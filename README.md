# Proyecto de Gestión de Cursos con NestJS y MongoDB

Este proyecto es una aplicación desarrollada en **Node.js** utilizando el framework **NestJS** para gestionar cursos. La base de datos utilizada es **MongoDB**, que está corriendo en un contenedor Docker.

## Tecnologías Utilizadas

- **Lenguaje**: TypeScript
- **Framework**: [NestJS](https://nestjs.com/)
- **Base de Datos**: MongoDB
- **Herramientas de Desarrollo**: Docker y Docker Compose
- **MongoDB GUI**: MongoDB Compass (opcional para visualizar los datos)

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas antes de ejecutar la aplicación:

- [Node.js](https://nodejs.org/) (versión 18 o superior)
- [Docker](https://www.docker.com/) y [Docker Compose](https://docs.docker.com/compose/)
- [MongoDB Compass](https://www.mongodb.com/products/compass) (opcional, para ver los datos de MongoDB)

## Instalacion

Para construir los docker correspondientes (Base de datos (Base de datos de Mongo) y nestjs-app (Aplicacion))

 ```bash
   docker-compose up --build -d
 ```

### Acceso a la aplicacion

http://localhost:3000 (Acceder al main de la app)

http://localhost:3000/cursos (Para poder ingresar y obtener los cursos)

## Uso de la API

- GET /cursos: Obtén todos los cursos.
- POST /cursos: Crea un nuevo curso con el siguiente JSON de ejemplo:



