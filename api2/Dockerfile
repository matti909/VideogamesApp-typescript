  # Stage 1: Construcción
  FROM node:16.4.2-alpine as build

  WORKDIR /app

  COPY package.json .
  RUN npm install

  COPY . .
  RUN npm run build

  # Stage 2: Producción
  FROM node:16.4.2-alpine

  WORKDIR /app

  COPY --from=build /app/package.json .
  COPY --from=build /app/build ./build

  RUN npm install 

  EXPOSE 4002

  CMD [ "npm", "start" ]
    