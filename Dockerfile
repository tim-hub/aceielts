# https://stackoverflow.com/questions/43790807/speed-up-npm-install-in-docker-container
# they say this structure can speed it up
FROM node:13.14.0-alpine

RUN mkdir /aceielts-front
WORKDIR aceielts-front

EXPOSE 5000

ENTRYPOINT serve -s build

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .
RUN npm run build
RUN npm i -g serve

