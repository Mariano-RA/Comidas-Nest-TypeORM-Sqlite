# Imagen base de Node.js (ligera y estable)
FROM node:lts-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos solo los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instalamos las dependencias en modo producción
RUN npm ci

# Copiamos el resto del código fuente
COPY . .

# Compilamos el código TypeScript
RUN npm run build-render

# Puerto que usará el servidor
EXPOSE 8080
ENV PORT=8080

# Comando para iniciar la app
CMD ["node", "dist/main.js"]
