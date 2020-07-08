FROM node:12-alpine AS builder

COPY . ./data-sharing-demo
WORKDIR /data-sharing-demo
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /data-sharing-demo/dist/data-sharing-demo/ /usr/share/nginx/html