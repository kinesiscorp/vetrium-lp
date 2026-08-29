FROM node:22-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl

FROM base AS deps
COPY package.json package-lock.json ./
# O package-lock.json foi gerado no macOS e so registra as variantes darwin-arm64
# de lightningcss e @tailwindcss/oxide (o npm nao gravou as demais plataformas).
# Sem isso o `next build` quebra no Alpine com "Cannot find module
# '../lightningcss.linux-x64-musl.node'". As versoes vem do proprio lockfile,
# entao nao ha drift quando as deps forem atualizadas.
RUN --mount=type=cache,target=/root/.npm \
    npm ci --include=dev \
 && npm install --no-save --no-package-lock \
      "lightningcss-linux-$(node -p process.arch)-musl@$(node -p "require('lightningcss/package.json').version")" \
      "@tailwindcss/oxide-linux-$(node -p process.arch)-musl@$(node -p "require('@tailwindcss/oxide/package.json').version")"

FROM base AS build
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx prisma generate
RUN npm run build

FROM base AS production
ENV NODE_ENV=production

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/public ./public
COPY --from=build /app/.next ./.next
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/src/generated ./src/generated
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/next.config.ts ./next.config.ts
COPY --from=build /app/prisma.config.ts ./prisma.config.ts

# tsx, dotenv e prisma (CLI) são "dependencies" (não dev) porque o
# docker-entrypoint.sh precisa deles em produção (migrate deploy + seed).
RUN npm prune --omit=dev

COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=60s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null || exit 1
ENTRYPOINT ["/app/docker-entrypoint.sh"]
CMD ["npm", "run", "start"]
