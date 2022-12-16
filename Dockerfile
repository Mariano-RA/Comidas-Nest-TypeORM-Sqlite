FROM node:lts-alpine

WORKDIR /app
COPY . .
RUN npm install 
RUN npm build

EXPOSE 8111
ENV PORT=8111
CMD ["/bin/sh", "-c","npm run start:dev"] 

# docker build -t backend-comidas . para crear la imagen de nombre "getting-started"
