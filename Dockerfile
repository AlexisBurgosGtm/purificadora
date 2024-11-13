# Usar una imagen oficial de Node.js como imagen base
FROM node:22.10-alpine

# Establecer el directorio de trabajo en el contenedor
WORKDIR /

# Copiar el archivo package.json y package-lock.json 
COPY package*.json ./

# Instalar las dependencias del proyecto
RUN npm install

COPY . .

# Exponer el puerto en el que se correra la app
EXPOSE 2024

# Comando para iniciar la aplicación
CMD ["npm", "test"]