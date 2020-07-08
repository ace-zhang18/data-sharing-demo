FROM node:12-alpine AS builder

WORKDIR /src/app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist/<name of your app>/* /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf