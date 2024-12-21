FROM node:20-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

CMD ["npx", "nodemon", "--legacy-watch", "src/index.js"]