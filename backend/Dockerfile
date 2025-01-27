# Usa una imagen base con OpenJDK para correr aplicaciones Spring Boot
FROM openjdk:17-jdk-slim

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar el archivo JAR del backend a la carpeta de trabajo
COPY target/demo-0.0.1-SNAPSHOT.jar app.jar

# Exponer el puerto en el que corre tu API
EXPOSE 7000

# Comando para correr la aplicación Spring Boot
CMD ["java", "-jar", "app.jar"]
