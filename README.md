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

## Instalación

Para construir los contenedores correspondientes (Base de datos de Mongo y la aplicación NestJS):

```bash
docker-compose up --build -d
```


## Acceso a la aplicación

-Aplicación principal: http://localhost:3000
-Endpoint para gestión de cursos: http://localhost:3000/cursos

## Uso de la API

### 4.1 Gestión de Cursos

#### a) Obtener todos los cursos
Verbo HTTP: GET
Ruta: /cursos
Descripción: Devuelve un listado de todos los cursos disponibles, mostrando el nombre, imagen, descripción, y valoración de cada curso.

#### b) Obtener detalles de un curso
Verbo HTTP: GET
Ruta: /cursos/:id
Parámetros: id (ID del curso)
Descripción: Devuelve los detalles completos de un curso específico, incluyendo unidades, clases, usuarios inscritos, comentarios y valoración.

#### c) Crear un curso nuevo
Verbo HTTP: POST
Ruta: /cursos
Parámetros en el Body (JSON):

```bash
{
  "nombre": "Curso de Node.js con NestJS",
  "descripcion": "Un curso completo para aprender Node.js y NestJS",
  "imagen_portada": "http://example.com/imagen_portada.jpg",
  "imagen_banner": "http://example.com/imagen_banner.jpg",
  "unidades": []
}
```

#### d) Actualizar un curso
Verbo HTTP: PUT
Ruta: /cursos/:id
Parámetros: id (ID del curso a actualizar)
Descripción: Actualiza los detalles de un curso específico.
Parámetros en el Body (JSON): Campos que se desean actualizar (ejemplo):

```bash
{
  "nombre": "Nuevo nombre del curso",
  "descripcion": "Descripción actualizada",
  "imagen_portada": "http://example.com/nueva_imagen.jpg"
}
```

#### e) Eliminar un curso
Verbo HTTP: DELETE
Ruta: /cursos/:id
Parámetros: id (ID del curso)
Descripción: Elimina un curso y toda su información de la plataforma.

### 4.2 Gestión de Unidades

#### a) Agregar una unidad a un curso
Verbo HTTP: POST
Ruta: /cursos/:cursoId/unidades
Parámetros:
cursoId: ID del curso.
Body (JSON):

```bash
{
  "nombre": "Unidad 1: Introducción",
  "numero_orden": 1
}
```
Descripción: Permite agregar una nueva unidad a un curso.

#### b) Eliminar una unidad de un curso
Verbo HTTP: DELETE
Ruta: /cursos/:cursoId/unidades/:unidadId
Parámetros:
cursoId: ID del curso.
unidadId: ID de la unidad a eliminar.
Descripción: Elimina una unidad de un curso específico.

### 4.3 Gestión de Clases

#### a) Agregar una clase a una unidad
Verbo HTTP: POST
Ruta: /cursos/:cursoId/unidades/:unidadId/clases
Parámetros:
cursoId: ID del curso.
unidadId: ID de la unidad.
Body (JSON):

```bash
{
  "nombre": "Clase 1: Introducción a Node.js",
  "descripcion": "Descripción sobre qué es Node.js y cómo funciona",
  "video_url": "http://example.com/video_intro.mp4",
  "contenido_descargable": [
    {
      "titulo": "Guía Rápida de Node.js",
      "url": "http://example.com/guia_nodejs.pdf"
    }
  ]
}
```
Descripción: Agrega una clase nueva a una unidad específica dentro de un curso.

#### b) Eliminar una clase de una unidad
Verbo HTTP: DELETE
Ruta: /cursos/:cursoId/unidades/:unidadId/clases/:claseId
Parámetros:
cursoId: ID del curso.
unidadId: ID de la unidad.
claseId: ID de la clase a eliminar.
Descripción: Elimina una clase específica de una unidad en un curso.

### 4.4 Gestión de Comentarios

#### a) Agregar un comentario a un curso
Verbo HTTP: POST
Ruta: /cursos/:cursoId/comentarios
Parámetros:
cursoId: ID del curso.
Body (JSON):

```bash
{
  "autor": "Juan Perez",
  "titulo": "Excelente curso",
  "detalle": "El contenido es claro y preciso.",
  "me_gusta": 10,
  "no_me_gusta": 1
}
```
Descripción: Agrega un comentario a un curso.

#### b) Agregar un comentario a una clase

Verbo HTTP: POST
Ruta: /cursos/:cursoId/unidades/:unidadId/clases/:claseId/comentarios
Parámetros:
cursoId: ID del curso.
unidadId: ID de la unidad.
claseId: ID de la clase.
Body (JSON): Igual que en el caso anterior.
Descripción: Permite a los usuarios comentar sobre una clase específica dentro de una unidad.
Formato de los Documentos JSON
