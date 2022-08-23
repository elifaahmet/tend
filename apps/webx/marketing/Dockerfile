FROM node:14.16.1-alpine AS deps
RUN apk add --no-cache libc6-compat bash
#WORKDIR /app

COPY ./dist/apps/webx/marketing .
RUN yarn add nextjs
#
#FROM node:14.16.1-alpine3.10 AS builder
#WORKDIR /app
#
#COPY --from=deps /app/ .


#WORKDIR /app
# RUN yarn build webx-marketing



#FROM node:14.16.1-alpine AS runner
#WORKDIR /app

ENV NODE_ENV production
ENV PORT=4200

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

#COPY --from=deps /app/. .
COPY . .
RUN chown nextjs:nodejs dist/apps/webx/marketing/.next

USER nextjs

EXPOSE ${PORT}

ENV NEXT_TELEMETRY_DISABLED 1

CMD yarn next start -p ${PORT}
