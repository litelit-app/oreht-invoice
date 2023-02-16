FROM node:alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
ENV NODE_ENV=production
ENV TZ=Europe/Moscow

CMD [ "node", "/app/.output/server/index.mjs" ]
