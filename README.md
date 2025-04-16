# 📊 Observatorio de Violencia de Género

Este proyecto tiene como objetivo centralizar, procesar y disponibilizar datos públicos, extraídos desde [Red Chilena contra la Violencia hacia las Mujeres](https://www.nomasviolenciacontramujeres.cl/), sobre violencia de género en Chile a través de un sistema modular dividido en tres partes principales:

- **`backend/`**: Procesamiento automático de archivos Excel (la Red Chilena contra la Violencia hacia las Mujeres) y carga estructurada a una base de datos PostgreSQL.
- **`api/`**: API REST que consulta la base de datos y expone endpoints autenticados para acceder a los datos procesados.
- **`frontend/`** *(en desarrollo)*: Interfaz visual para exploración, visualización y descarga de los datos procesados.

## 📁 Estructura del Proyecto

```
observatorio-genero/
├── backend/                    # Todo el backend del sistema
│   ├── api/                    # API REST con Express, autenticación y Swagger
│   ├── carga-datos/            # Scripts que procesan archivos Excel y cargan los datos
│   ├── shared/                 # Modelos Sequelize y configuración de base de datos
│   ├── package.json            # Dependencias comunes del backend
│   ├── package-lock.json       # Archivo generado automáticamente
│   └── README.md               # Documentación general del backend
├── frontend/                   # Interfaz web del observatorio (futura implementación)
│   └── README.md               # Documentación del frontend (por desarrollar)
└── README.md                   # Descripción general del proyecto
```

## 🔄 Modularidad y carpeta `shared/`

El proyecto está dividido en módulos independientes (`backend`, `api`, `frontend`), pero comparten ciertos recursos comunes. Para evitar duplicación de código, se utiliza la carpeta `shared/`, donde se almacenan:

- `shared/models/`: Modelos de datos utilizados por `backend` y `api`.
- `shared/config/`: Configuración de conexión a la base de datos y entorno compartido.

Esto permite mantener una única fuente de verdad para modelos y configuración, facilitando el mantenimiento y escalabilidad del proyecto.

## 🚀 Cómo iniciar cada módulo

Consulta los README específicos en cada carpeta:

- [`backend/README.md`](./backend/README.md)
- [`api/README.md`](./api/README.md)
- [`frontend/README.md`](./frontend/README.md) *(próximamente)*

## 📌 Estado actual

- `backend/`: funcional y probado con datos reales.
- `api/`: en desarrollo. Documentación Swagger y autenticación en proceso.
- `frontend/`: no implementado aún.

## 🤝 Contribuciones

Este proyecto está en constante mejora. Las sugerencias y contribuciones son bienvenidas.

## ⚖️ Licencia

Este proyecto utiliza la licencia [MIT](./LICENSE).

## ✨ Autor

**Katherine Inalef Pineda**  
💻 Desarrolladora Fullstack  
📍 Valdivia, Chile
