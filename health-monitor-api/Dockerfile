FROM node:12.19.0-alpine3.9 AS development

WORKDIR /src

COPY package*.json ./

RUN npm install

COPY . .

USER admin

CMD ["node", "dist/main"]