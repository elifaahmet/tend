FROM node:14.16.1-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY ./dist/apps/webx/the-green .

RUN yarn add next-fonts
run yarn

FROM node:14.16.1-alpine as runner
WORKDIR /app

ENV NODE_ENV production
ENV PORT=4100

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

COPY --from=deps /app/. .
RUN chown nextjs:nodejs ./.next

USER nextjs

EXPOSE ${PORT}

ENV NEXT_TELEMETRY_DISABLED 1

CMD yarn next start -p ${PORT}
