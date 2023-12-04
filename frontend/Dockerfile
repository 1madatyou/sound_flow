FROM node:18-bookworm

ARG API_DOMAIN_NAME
ENV REACT_APP_API_DOMAIN_NAME=$API_DOMAIN_NAME

WORKDIR /usr/src/frontend

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build