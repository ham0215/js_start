FROM node:12.8.1

RUN npm install npm -g
RUN npm install -g yarn

RUN yarn global add http-server

WORKDIR /app
ADD . /app

RUN yarn install --check-files
