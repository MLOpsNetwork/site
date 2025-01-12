# Build stage
FROM node:22.13.0 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build

# Deployment stage
FROM busybox:1.35 AS deploy
RUN adduser -D -u 1001 static
USER static
WORKDIR /home/static
COPY --from=build /usr/src/app/build/ ./
EXPOSE 3000
CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]

