FROM node:alpine

WORKDIR /usr/user-api/src

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
