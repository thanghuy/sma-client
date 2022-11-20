# build stage

FROM node:alpine as build-stage

#aslo say

WORKDIR /app

#copy the react app to the container

COPY . /app/

#prepare the container for building react app

RUN npm install

RUN npm run build

#prepare nginx 

FROM nginx:1.17-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

#fire up nginx 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]