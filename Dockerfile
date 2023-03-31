FROM node:lts-alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm ci

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

EXPOSE 8080
ENV PORT=8080
CMD ["node", "dist/main.js"] 

# docker build -t backend-comidas . para crear la imagen de nombre "getting-started"
