# Usa la imagen base oficial de MySQL
FROM mysql:8.0.20

# Establece las variables de entorno para MySQL
ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=demo

# Copia el archivo SQL para inicializar la base de datos
COPY init.sql /docker-entrypoint-initdb.d/

# Expone el puerto 3306 para la conexión externa
EXPOSE 3306

# Comando por defecto para iniciar MySQL
CMD ["mysqld"]
