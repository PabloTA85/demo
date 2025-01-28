# Usa una imagen base con Node.js
FROM node:22.13.0-slim

# Crear el directorio de trabajo
WORKDIR /app

# Copiar los archivos del proyecto (index.html y app.js) al contenedor
COPY . .

# Instalar http-server globalmente
RUN npm install -g http-server

# Exponer el puerto que usa el servidor
EXPOSE 8000

# Ejecutar el servidor en el puerto 8000 desde la raíz del proyecto
CMD ["http-server", ".", "-p", "8000"]
