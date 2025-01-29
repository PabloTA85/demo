# Proyecto de Contenedores con Docker

**Autor:** Pablo Tejerina Alonso  
**GitHub:** [PabloTA85](https://github.com/PabloTA85)  
**Docker Hub:** [PabloTA85](https://hub.docker.com/u/PabloTA85)

Este proyecto implementa un sistema básico con tres servicios:

- **Frontend:** Un contenedor con HTML y JavaScript para mostrar datos obtenidos del backend.
- **Backend:** Un contenedor Java Spring Boot que se comunica con una base de datos para extraer información.
- **Base de Datos:** Un contenedor MySQL con algunos datos de ejemplo (ver archivo `sql/init.sql`).

---

## Instrucciones para probar la aplicación con Docker

### 1) Requisitos previos

Antes de comenzar, asegúrate de tener **Docker** y **Docker Compose** instalados en tu máquina. Si no los tienes, puedes obtenerlos desde los siguientes enlaces:

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/install/)

### 2) Iniciar los contenedores con Docker Compose

Para iniciar los contenedores, abre la terminal y ejecuta el siguiente comando:

```bash
docker-compose up --build
