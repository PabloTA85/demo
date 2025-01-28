Autor: Pablo Tejerina Alonso
GitHub: PabloTA85
Docker Hub: PabloTA85
Proyecto de Contenedores con Docker
Este proyecto implementa un sistema básico con tres servicios:

Frontend: Un contenedor con HTML y JavaScript para mostrar datos obtenidos del backend.
Backend: Un contenedor Java Spring Boot que se comunica con una base de datos para extraer información.
Base de Datos: Un contenedor MySQL con algunos datos de ejemplo (ver archivo sql/init.sql).
Instrucciones para probar la aplicación con Docker
1) Requisitos previos
Antes de comenzar, asegúrate de tener Docker y Docker Compose instalados en tu máquina. Si no los tienes instalados, puedes obtenerlos desde los siguientes enlaces:

Docker
Docker Compose
2) Docker Compose
Abre la terminal de tu sistema y ejecuta los siguientes comandos para iniciar el contenedor de Docker Compose:

docker-compose up --build
O si prefieres hacerlo en moto dettached (desatendido):

docker-compose up --build -d
Esto iniciará todos los contenedores de Docker Compose y los creará en tu máquina local.

3) Acceso a los contenedores
Para acceder a los contenedores y ver sus estados, puedes utilizar el siguiente comando:

docker compose ps
4) Puertos para probar la aplicación
Frontend: El frontend estará disponible en el puerto 8000 de tu máquina local (localhost:80).
Backend: El backend estará disponible en el puerto 8080 de tu máquina local (localhost:9000).
DB: La base de datos estará disponible en el puerto 3306.
Puedes acceder al frontend desde cualquier cliente y yendo a http://localhost o http://localhost:8000. El backend estará disponible en http://localhost:8080.

(!) Importante: Asegúrate de que no estás utilizando los puertos 8000, 8080 y 3306 en tu máquina local.

5) Detener los contenedores
Para detener los contenedores de Docker Compose, puedes utilizar el siguiente comando:

docker compose down