# Usar imagen oficial de Node.js
FROM node:22-alpine


# # Set environment variables
# ARG NODE_ENV
# ARG PORT
# ARG POSTGRES_USER
# ARG POSTGRES_PASSWORD
# ARG POSTGRES_DB

# ENV NODE_ENV=${NODE_ENV}
# ENV PORT=${PORT}
# ENV POSTGRES_USER=${POSTGRES_USER}
# ENV POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
# ENV POSTGRES_DB=${POSTGRES_DB}


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