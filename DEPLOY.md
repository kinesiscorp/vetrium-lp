# Deploy — Vetrium (site + admin) (Dokku, VPS compartilhada)

Site institucional (`/`) e CRM interno (`/admin`) no mesmo app Next.js — substitui o deploy
anterior do site na Vercel. VPS: `191.241.136.77`. Mesmo esquema de deploy usado no BarberFlow
(`backend/`, `whatsapp-gateway`): Dokku, `git push dokku main`, sem painel/CI. Porta reservada:
**3050** (ver `VPS.md` na raiz do Vetrium-second-brain).

Tudo abaixo roda **no servidor**, via SSH (`ssh vps-paulojunqueira` — ver `VPS.md`). Sem acesso
SSH configurado, peça pra quem administra a VPS rodar os passos 1–5 uma vez; depois disso o
deploy do dia a dia é só `git push dokku main` da sua máquina.

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

```bash
dokku proxy:ports-set vetrium-lp http:3050:3000
```

Mapeia `191.241.136.77:3050` → porta 3000 do container (onde o `next start` escuta). Se preferir
domínio + HTTPS automático em vez de porta direta, usar `dokku domains:add` + `dokku
letsencrypt:enable` no lugar deste passo — não é o padrão atual dos outros projetos na VPS.

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
