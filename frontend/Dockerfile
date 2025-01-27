# Usa una imagen base con Node.js (si usas algún framework como React, Vue, Angular, etc.)
FROM node:22.13.0-slim

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto
COPY . .

# Instalar las dependencias, si tienes un package.json
RUN npm install

# Instalar http-server globalmente
RUN npm install -g http-server

# Exponer el puerto que usa el servidor
EXPOSE 8000

# Ejecutar el servidor en el puerto 8000
CMD ["http-server", "dist", "-p", "8000"]
