# Observatorio de Violencia de Género - Backend

Este módulo corresponde al backend del Observatorio de Violencia de Género. Expone una API REST que permite acceder a los datos procesados desde fuentes públicas como la Red Chilena contra la Violencia hacia las Mujeres.

## Estructura general

- `/api/`: Código de la API construida con Express.
- `/carga-datos/`: Scripts para cargar archivos Excel a la base de datos.
- `/shared/`: Modelos y configuración compartida.

## Tecnologías utilizadas

- Node.js
- Express
- Sequelize (ORM)
- PostgreSQL
- JWT para autenticación

## Endpoints principales

- `GET /api/estadisticas/globales`: Retorna estadísticas agregadas sobre los casos.
- `GET /api/casos`: Lista de casos.
- `POST /api/login`: Autenticación con Google (opcional, según configuración).

## Base de datos

- PostgreSQL
- Modelos definidos con Sequelize
- Migraciones automáticas

## Scripts de carga de datos

En la carpeta `/carga-datos/` se encuentran los scripts que leen archivos `.xlsx` desde `/data/`, procesan los encabezados y los almacenan en la base de datos normalizada.

## Variables de entorno

Crear un archivo `.env` con las siguientes variables:

```
DB_HOST=
DB_PORT=
DB_NAME=
DB_USER=
DB_PASSWORD=
JWT_SECRET=
```

## Autenticación

Se puede habilitar el login con Google mediante el uso de OAuth2. Para ello, configurar el ID y secret del cliente de Google en las variables de entorno.

## Licencia

Proyecto con fines educativos y sin fines de lucro. Uso de datos con fines de sensibilización y visibilización.

---

**Autora**: Katherine Inalef Pineda  
📍 Valdivia, Chile — 2025
