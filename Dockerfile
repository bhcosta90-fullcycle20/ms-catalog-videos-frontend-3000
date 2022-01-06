FROM node:14
WORKDIR /srv/react-docker
COPY package.json .
RUN npm install --quiet