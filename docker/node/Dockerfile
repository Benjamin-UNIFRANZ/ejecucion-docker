# Usar imagen oficial de Node.js
FROM node:22-alpine
# Crear directorio de trabajo
WORKDIR /usr/src/app

# Copiar package.json y package-lock.json
COPY ../../package*.json ./

# Instalar dependencias
# RUN npm ci --only=production
RUN npm install
# Copiar todo el código desde la raíz
COPY ../../ .

# Exponer puerto
EXPOSE 3000

# Comando para iniciar la aplicación
# CMD ["npm", "start"]

# Comando para iniciar la aplicación en desarrollo
CMD ["npm", "run", "dev"]