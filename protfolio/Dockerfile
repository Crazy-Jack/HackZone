FROM node:latest as build-deps

WORKDIR /usr/src/app

# install and cache app dependencies
COPY ./package.json ./yarn.lock ./
RUN yarn install

COPY ./public ./public
COPY ./src ./src
RUN yarn build


## Stage 2 - the production environment
#FROM nginx:1.12-alpine
## COPY nginx.conf /etc/nginx/conf.d/default.conf
#COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]
