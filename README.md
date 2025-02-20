# nodejs-docker-project

Este proyecto es una aplicación Node.js utilizando Express y PostgreSQL, configurada para ejecutarse en contenedores Docker. 

## Estructura del Proyecto

- **src/**: Contiene el código fuente de la aplicación.
  - **controllers/**: Controladores de la aplicación.
  - **models/**: Modelos de datos.
  - **routes/**: Definición de rutas de la API.
  - **config/**: Configuraciones de la aplicación, incluyendo la conexión a la base de datos.
  - **middlewares/**: Middleware para la autenticación y otras funciones.
  - **app.js**: Archivo principal que inicializa la aplicación.

- **docker/**: Archivos relacionados con Docker.
  - **postgres/**: Scripts de inicialización para la base de datos PostgreSQL.
  - **node/**: Dockerfile para construir la imagen de la aplicación Node.js.

- **.dockerignore**: Archivos y directorios que Docker debe ignorar al construir la imagen.
- **docker-compose.yml**: Configuración para orquestar los contenedores de la aplicación.
- **.env.example**: Ejemplo de archivo de variables de entorno.
- **.gitignore**: Archivos y directorios que Git debe ignorar.
- **package.json**: Dependencias y scripts de la aplicación.

## Instrucciones de Uso

1. Clona el repositorio.
2. Navega al directorio del proyecto.
3. Crea un archivo `.env` basado en `.env.example` y configura tus variables de entorno.
4. Ejecuta `docker-compose up` para iniciar la aplicación y la base de datos.

## Notas de Seguridad

Asegúrate de no incluir credenciales sensibles en el código fuente. Utiliza el archivo `.env` para almacenar información confidencial.