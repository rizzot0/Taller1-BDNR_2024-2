# Proyecto de Gestión de Cursos con NestJS y MongoDB
Este proyecto es una aplicación desarrollada en Node.js utilizando el framework NestJS para gestionar cursos. La base de datos utilizada es MongoDB, que está corriendo en un contenedor Docker.

## Tecnologías Utilizadas
### -Lenguaje: TypeScript
### -Framework: NestJS
### -Base de Datos: MongoDB
### -MongoDB GUI: MongoDB Compass (Para visualizar los datos)
  
## Requisitos Previos
Asegúrate de tener instaladas las siguientes herramientas antes de ejecutar la aplicación:

### -Node.js (versión 18 o superior)
### -MongoDB Compass
### -Visual Studio Code
### -Thunder Cliente (Extension de Visual Studio Code para ver los distintos request)


## Instalación

- Descargar el repositorio y extraerlo.
- Abrir la carpeta del proyecto en Visual Studio
- Ejecutar el siguiente comando para ejecutar la aplicación
```
{
  npm install
  npm run start:dev
```

## Acceso a la aplicación
### -Aplicación principal: http://localhost:3000 
### -Endpoint para gestión de cursos: http://localhost:3000/cursos
### -Endpoint para gestión de unidades: http://localhost:3000/unidades
### -Endpoint para gestión de clases: http://localhost:3000/clases
### -Endpoint para gestión de comentarios: http://localhost:3000/comentarios


## Uso de la API

### 4.1 Gestión de Cursos

#### a) Obtener todos los cursos
- Verbo HTTP: GET Ruta: /cursos
- Descripción: Devuelve un listado de todos los cursos disponibles, mostrando el nombre, imagen, descripción, y valoración de cada curso.

#### b) Obtener detalles de un curso
- Verbo HTTP: GET Ruta: /cursos/:id
- Parámetros: id (ID del curso)
- Descripción: Devuelve los detalles completos de un curso específico, incluyendo unidades, clases, usuarios inscritos, comentarios y valoración.

#### c) Crear un curso nuevo
- Verbo HTTP: POST Ruta: /cursos
- Parámetros en el Body (JSON):

```
{
  "nombre": String,
  "descripcion": String,
  "imagen_portada": String,
  "imagen_banner": String,
  "valoracion": int,
  "unidades": [],  // Array inicializado vacío para unidades
  "comentarios": []  // Array inicializado vacío para comentarios
}
```

#### d) Actualizar un curso
- Verbo HTTP: PUT Ruta: /cursos/:id 
- Parámetros: id (ID del curso a actualizar) 
- Descripción: Actualiza los detalles de un curso específico.


#### e) Eliminar un curso
- Verbo HTTP: DELETE Ruta: /cursos/:id
- Parámetros: id (ID del curso) 
- Descripción: Elimina un curso y toda su información de la plataforma.

### 4.2 Gestión de Unidades
#### a) Agregar una unidad a un curso
- Verbo HTTP: POST Ruta: /unidades
- Descripción: Permite agregar una nueva unidad a un curso.
```
{
  "nombre": String,
  "numero_orden": integer,
  "idCurso": String,  // ID del curso al que pertenece esta unidad
  "clases": []  // Array inicializado vacío para clases
}

```


#### b) Eliminar una unidad de un curso
- Verbo HTTP: DELETE Ruta: /unidades/:idUnidad
- Parámetros: unidadId: ID de la unidad a eliminar.
- Descripción: Elimina una unidad de un curso específico.

### 4.3 Gestión de Clases
#### a) Agregar una clase a una unidad
- Verbo HTTP: POST Ruta: /clases
- Body (JSON):

```
{
  "nombre": String,
  "descripcion": String,
  "video_url": String,
  "contenido_descargable": [
    {
      "titulo": String,
      "url": String
    }
  ],
  "numero_orden":integer,
  "idUnidad": "ID_DE_LA_UNIDAD",  // ID de la unidad a la que pertenece esta clase, es de tipo String
  "comentarios": [],  // Array inicializado vacío para comentarios
  "me_gusta": integer,
  "no_me_gusta": integer
}

```

Descripción: Agrega una clase nueva a una unidad específica dentro de un curso.

#### b) Eliminar una clase de una unidad
- Verbo HTTP: DELETE Ruta: /clase/:id
- Parámetros:  unidadId: ID de la unidad. 
- Descripción: Elimina una clase específica de una unidad en un curso.

### 4.4 Gestión de Comentarios
#### a) Agregar un comentario a un curso o a una clase
- Verbo HTTP: POST Ruta: /comentarios
- Body (JSON):

```
{
  "nombre_autor": "Juan Perez",
  "fecha": "2024-01-01T12:00:00Z",
  "titulo": "Gran Curso",
  "detalle": "Este curso me ayudó mucho a entender los conceptos básicos.",
  "idrelacion": "ID_DEL_CURSO_O_CLASE"  // ID del curso o clase al que está relacionado este comentario
}
```

#### b) Eliminar un comentario 
- Verbo HTTP: POST Ruta: /comentarios/:id
- Descripcion: Eliminar un comentario con su id correspondiente

