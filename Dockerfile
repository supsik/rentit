FROM node:20.18.0-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node", ".output/server/index.mjs"]