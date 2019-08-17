FROM node:12.8.1

RUN npm install npm -g
RUN npm install -g yarn

WORKDIR /app
ADD . /app

RUN yarn install --check-file}s
