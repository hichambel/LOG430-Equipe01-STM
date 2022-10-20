FROM node:12.19.0-alpine3.9 AS development

WORKDIR /src

RUN npm install

COPY . .

CMD ["node", "dist/main"]