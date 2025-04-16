# 📊 Backend - Observatorio de Violencia de Género

Este módulo del Observatorio de Violencia de Género en Chile tiene como objetivo procesar archivos Excel publicados por la [Red Chilena contra la Violencia hacia las Mujeres](https://www.nomasviolenciacontramujeres.cl/) y cargar la información relevante en una base de datos PostgreSQL, que será posteriormente disponibilizada a través de una API.

## 🚀 ¿Qué hace este módulo?

- Lee archivos `.xlsx` ubicados en `backend/data/red/`.
- Limpia y transforma los datos relevantes.
- Inserta los datos en una base de datos PostgreSQL mediante Sequelize.

## 📁 Estructura del backend

```
backend/                    # Todo el backend del sistema
├── api/                    # API REST con Express, autenticación y Swagger
├── carga-data/            # Scripts que procesan archivos Excel y cargan los datos
├── shared/                 # Modelos Sequelize y configuración de base de datos
├── package.json            # Dependencias comunes del backend
└── README.md               # Documentación general del backend

```

## ⚙️ Requisitos    

- Node.js (v18+)
- PostgreSQL
- Archivo `.env` con configuración de base de datos

Ejemplo de `.env`:

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=tu_clave
DB_NAME=observatorio_db
```

## 📝 Cómo ejecutar el procesamiento

Desde la raíz del proyecto:

```bash
node backend/procesar_excel_red_contra_violencia.js
```


