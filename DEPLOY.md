# Deploy — Vetrium (site + admin) (Dokku, VPS compartilhada)

Site institucional (`/`) e CRM interno (`/admin`) no mesmo app Next.js — substitui o deploy
anterior do site na Vercel. VPS: `191.241.136.77`. Mesmo esquema de deploy usado no BarberFlow
(`backend/`, `whatsapp-gateway`): Dokku, `git push dokku main`, sem painel/CI. Porta reservada:
**3050** (ver `VPS.md` na raiz do Vetrium-second-brain).

> **Executado em 29/08/2026.** O app, o Postgres, o volume e as env vars já existem na VPS;
> as migrations rodaram e o seed criou o admin + os 6 clientes. Falta **só** liberar a porta
> 3050 no firewall de borda — ver "Pendência: acesso externo" no fim deste arquivo.

Os passos 1–5 rodam **no servidor**, mas não precisam de shell: o usuário `dokku` aceita os
comandos por SSH direto (`ssh dokku@191.241.136.77 <comando>`), e a chave desta máquina já está
autorizada. Depois do setup, o deploy do dia a dia é `git push dokku main`.

## 1. Criar o app no Dokku

```bash
dokku apps:create vetrium-lp
```

## 2. Postgres (plugin `postgres`, rede interna — sem porta pública)

```bash
dokku postgres:create vetrium-lp-db
dokku postgres:link vetrium-lp-db vetrium-lp
```

O `link` injeta `DATABASE_URL` automaticamente nas env vars do app (formato que o Prisma já
espera) — não precisa setar na mão.

## 3. Storage persistente pros materiais (`UPLOAD_DIR`)

```bash
mkdir -p /var/lib/dokku/data/storage/vetrium-lp-uploads
dokku storage:mount vetrium-lp /var/lib/dokku/data/storage/vetrium-lp-uploads:/app/uploads
```

## 4. Variáveis de ambiente

```bash
dokku config:set vetrium-lp \
  AUTH_SECRET="$(openssl rand -base64 32)" \
  UPLOAD_DIR="/app/uploads" \
  RUN_SEED="true"
```

`RUN_SEED=true` só no primeiro deploy (cria o admin + migra os clientes/leads — idempotente,
`upsert`). Depois do primeiro deploy bem-sucedido:

```bash
dokku config:set vetrium-lp RUN_SEED="false"
```

## 5. Porta pública (sem domínio, igual ao BarberFlow)

O `ports:set` sozinho **não basta**: ele só cria um listener no nginx do host, e o firewall de
borda da VPS descarta as portas altas (ver "Pendência" no fim). Os apps que funcionam hoje
(`barberflow-backend`, `salgados-flow`) publicam a porta direto pelo Docker. Para espelhar:

```bash
dokku domains:disable   vetrium-lp                    # senão o nginx segura a 3050 e o -p falha
dokku ports:clear       vetrium-lp
dokku docker-options:add vetrium-lp deploy "-p 3050:3000"
dokku ps:stop  vetrium-lp && dokku ps:start vetrium-lp # -p com porta fixa exige parar antes
```

A ordem importa: com o vhost habilitado o nginx faz bind na 3050 e o container morre com
`failed to bind host port 0.0.0.0:3050/tcp: address already in use`.

Alternativa (melhor, se for seguir por aí): domínio + HTTPS via `dokku domains:add` +
`letsencrypt:enable`, servindo por 443 em vez de porta alta — resolve o firewall de tabela, já
que 80/443 passam por trás do Cloudflare.

## 6. Deploy (da sua máquina)

```bash
git remote add dokku dokku@191.241.136.77:vetrium-lp
git push dokku main
```

Dokku detecta o `Dockerfile` na raiz do repo e builda a partir dele — sem Procfile, sem
buildpack. O `ENTRYPOINT` (`docker-entrypoint.sh`) roda `prisma migrate deploy` sempre, e o seed
só se `RUN_SEED=true`; o log do deploy mostra a **senha temporária do admin**
(`admin@vetrium.com.br`) — copiar e trocar em `/admin/conta/senha`.

O arquivo `CHECKS` na raiz do repo faz o Dokku esperar `/` responder 200 antes de trocar o
tráfego pro novo container (zero-downtime).

## 7. Confirmar

```bash
curl -sI http://191.241.136.77:3050/            # site institucional, 200
curl -sI http://191.241.136.77:3050/admin        # redireciona pra /admin/entrar
```

---

## Local (dev) — não usa Dokku

`docker-compose.yml` continua só pra subir um Postgres local:

```bash
cp .env.example .env   # ajustar valores
docker compose up -d db
npx prisma migrate deploy
npm run seed
npm run dev
```

---

## Pendência: acesso externo (29/08/2026)

O app está **rodando e saudável** na VPS (`dokku ps:report vetrium-lp` → `Running: true`; o log
mostra `prisma migrate deploy` aplicado, seed concluído e `Next.js ▲ 16.3.1 ✓ Ready`), mas
`http://191.241.136.77:3050/` dá **timeout de fora**.

Não é problema do app nem do Dokku. O que foi verificado:

- O container publica a porta: `docker-options deploy: -p 3050:3000`, e ele só sobe quando a
  3050 está livre no host — prova de que o bind acontece.
- `3030` (barberflow) e `3333` (salgados-flow) respondem de fora; `3050` e `3070` (agroflow) dão
  **timeout**, não `connection refused` — pacote descartado, assinatura de firewall.
- `80` e `443` direto no IP também dão timeout; `paulojunqueira.com` responde porque passa pelo
  Cloudflare. Ou seja: o firewall tem uma allowlist e 3050 não está nela.

Para destravar, uma das duas (ambas exigem acesso que o usuário `dokku` não tem):

1. **Abrir a 3050** no firewall do host/provedor (quem administra a VPS).
2. **Servir por domínio**: apontar um subdomínio (ex.: `admin.vetrium.space`) para
   `191.241.136.77` no Cloudflare, e então `dokku domains:enable vetrium-lp`,
   `dokku domains:add vetrium-lp admin.vetrium.space`, `dokku letsencrypt:enable vetrium-lp`
   (e remover o `-p 3050:3000` do `docker-options`). Mais trabalhoso, mas dá HTTPS e não depende
   de porta alta liberada.

Credencial do primeiro acesso (gerada pelo seed, trocar em `/admin/conta/senha` no primeiro
login): `admin@vetrium.com.br` / senha temporária no log do deploy — `dokku logs vetrium-lp`.
`RUN_SEED` já foi setado pra `false` depois do primeiro deploy.
