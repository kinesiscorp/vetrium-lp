# Deploy — Vetrium (site + admin) (Coolify, VPS compartilhada)

Site institucional (`/`) e CRM interno (`/admin`) no mesmo app Next.js — substitui o deploy
anterior do site na Vercel. VPS: `191.241.136.77` (painel Coolify em
`http://host.paulojunqueira.com:8000`). Porta reservada: **3050** (ver `VPS.md` na raiz do
Vetrium-second-brain).

## Criar Postgres (rede interna, sem porta pública)

Coolify → **Databases → Add PostgreSQL**:

- Nome: `vetrium-lp-db` (cria volume persistente automaticamente)
- Usuário/senha/banco: preencher com valores fortes e **guardar no app abaixo**
- **Não expor porta no host** — só rede interna Docker (padrão do projeto)

## Criar a aplicação

Coolify → **Resources → Add Resource → Public Repository** (ou New Project → Dockerfile):

- Repositório: o remote Git do `vetrium-lp` (branch `main`)
- Build Pack: **Dockerfile** (contexto: raiz do repo; o multi-stage pega o target `production` automaticamente — se o Coolify pedir, definir `dockerfile-target=production`)
- Porta de publicação: **3050** → 3000 (o container escuta em 3000)

## Variáveis de ambiente

Preencher em **Environment Variables** (template em `.env.example` do repo):

| Variável | Valor |
|---|---|
| `DATABASE_URL` | URL interna do Postgres acima (host = nome do serviço no Coolify, ex. `postgresql://user:senha@vetrium-lp-db:5432/vetriumcrm?schema=public`) |
| `AUTH_SECRET` | `openssl rand -base64 32` |
| `UPLOAD_DIR` | `/app/uploads` (volume persistente em **Storages**) |
| `RUN_SEED` | `true` **só no primeiro deploy** (cria admin + migra clientes/leads — idempotente); depois `false` |

**Storages:** montar um volume persistente em `/app/uploads`.

## Deploy

1. Deploy com `RUN_SEED=true`. O entrypoint roda `prisma migrate deploy` automaticamente; o seed imprime no log a **senha temporária do admin** (`admin@vetrium.com.br`) — copiar e trocar em `/admin/conta/senha`.
2. Conferir `http://VPS:3050` → site institucional na raiz. `http://VPS:3050/admin` deve redirecionar para `/admin/entrar`.
3. Marcar `RUN_SEED=false` nos próximos deploys.

Produção logada: `ssh vps-paulojunqueira 'docker ps --format "{{.Names}}\t{{.Ports}}\t{{.Status}}"'` (ver `VPS.md`).