# stage 1

FROM node:alpine AS my-app-build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# stage 2

FROM nginx:alpine
COPY --from=my-app-build /app/dist/data-sharing-demo /usr/share/nginx/html
EXPOSE 80

COPY nginx.conf /etc/nginx/conf.d/default.conf