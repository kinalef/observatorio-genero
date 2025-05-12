# Backend - Observatorio de Femicidios en Chile

Este backend forma parte del Observatorio de Femicidios en Chile. Su principal función es disponibilizar los datos recopilados por la Red Chilena contra la Violencia hacia las Mujeres a través de una API REST segura y documentada.

## Funcionalidades principales

- Procesamiento de archivos Excel con registros anuales de femicidios.
- Almacenamiento de los datos en una base de datos PostgreSQL.
- Exposición de los datos a través de una API REST protegida con JWT.
- Endpoint para estadísticas agregadas (por región, por año, por relación con el agresor, etc).
- Sistema de autenticación con Google OAuth.
- Control de acceso basado en roles.
- Limitación de llamadas a la API (en desarrollo).

## Estructura del backend

```
backend/
├── api/                    # API REST con Express
│   ├── controllers/        # Controladores de endpoints
│   ├── middlewares/       # Middleware de autenticación y validación
│   ├── routes/            # Rutas protegidas y públicas
│   └── utils/             # Utilidades compartidas
├── carga-data/            # Scripts para procesamiento y carga de Excel
├── shared/                # Modelos y configuración compartida (Sequelize, .env)
├── .env                   # Variables de entorno locales
└── README.md              # Este archivo
```

## Instalación y uso

1. Clona el repositorio y navega a la carpeta `backend/`.
2. Copia el archivo `.env.example` y renómbralo a `.env`. Ajusta las variables según tu configuración.
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta las migraciones y carga inicial de datos:
   ```bash
   npm run migrate
   npm run seed
   ```
5. Inicia el servidor:
   ```bash
   npm run dev
   ```

## Endpoints relevantes

- `GET /api/estadisticas`: estadísticas agregadas (sin autenticación).
- `POST /api/casos`: permite crear un nuevo caso (requiere autenticación y rol admin).
- `GET /api/casos`: listar casos cargados (requiere autenticación y rol admin).
- `GET /api/docs`: documentación Swagger de la API.

## Consideraciones

- Los datos provienen de archivos Excel anuales publicados por la Red Chilena contra la Violencia hacia las Mujeres.
- La información ha sido procesada para normalizar nombres de regiones, relaciones y fechas.
- No se incluyen registros de "suicidios femicidas" u otras categorías que no estén explícitamente clasificadas como femicidio.
- La autenticación se realiza mediante Google OAuth y los permisos se controlan por rol.

## Licencia

Este proyecto es sin fines de lucro, creado con el objetivo de visibilizar y facilitar el acceso a información pública sobre femicidios en Chile.