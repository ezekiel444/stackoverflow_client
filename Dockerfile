FROM node:current-alpine3.16

WORKDIR /app

COPY package.json /app

RUN npm i

COPY . /app/

EXPOSE 3000

CMD [ "npm", "start" ]
