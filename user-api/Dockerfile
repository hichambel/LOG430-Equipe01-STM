FROM node:alpine

WORKDIR /usr/src/user

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
