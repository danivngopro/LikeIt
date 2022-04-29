FROM node:14.8-alpine AS build

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

COPY ./src ./src

EXPOSE 3000

CMD ["npm", "start"]