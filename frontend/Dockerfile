# FROM node:latest as build-stage
# WORKDIR /app
# COPY package*.json ./
# COPY yarn.lock ./
# RUN yarn install
# COPY ./ .
# RUN yarn build

FROM nginx:latest as production-stage
RUN mkdir /app
COPY build /app
COPY nginx.conf /etc/nginx/nginx.conf