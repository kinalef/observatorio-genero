# 📊 Observatorio de Violencia de Género

Este proyecto tiene como objetivo centralizar, procesar y disponibilizar datos públicos sobre violencia de género en Chile, extraídos desde la [Red Chilena contra la Violencia hacia las Mujeres](https://www.nomasviolenciacontramujeres.cl/).

La arquitectura del sistema se divide en dos módulos principales: `backend` y `frontend`. A su vez, el `backend` se organiza en dos submódulos: uno para el procesamiento y carga de datos, y otro para la API REST que expone los datos procesados de forma autenticada.

---

## 🗂️ Estructura del Proyecto

```
observatorio-genero/
├── backend/                    # Backend completo del sistema
│   ├── api/                    # API REST con Express, autenticación y Swagger
│   ├── carga-datos/            # Scripts de procesamiento de archivos Excel y carga a PostgreSQL
│   ├── shared/                 # Modelos y configuración común
│   ├── package.json            # Dependencias unificadas del backend
│   ├── package-lock.json
│   └── README.md               # Documentación del backend
├── frontend/                   # Interfaz visual del observatorio (futura implementación)
│   └── README.md               # Documentación del frontend (por desarrollar)
└── README.md                   # Documentación general del proyecto
```

---
## 🚀 Cómo ejecutar cada módulo

Consulta los README específicos dentro de cada subcarpeta:

- [`backend/README.md`](./backend/README.md)
- [`frontend/README.md`](./frontend/README.md) *(en desarrollo)*

---

## 🛠️ Tecnologías principales

- **Node.js** + **Express** — Backend y API REST
- **PostgreSQL** — Base de datos relacional
- **Sequelize** — ORM para Node.js
- **Swagger** — Documentación de la API
- **JWT + OAuth2 (Google)** — Autenticación de usuarios

---

## 📌 Estado actual

| Módulo     | Estado           | Notas                                                 |
|------------|------------------|--------------------------------------------------------|
| backend/   | ✅ Funcional      | Carga de datos probada con archivos reales            |
| api/       | 🛠️ En desarrollo | Autenticación JWT y documentación Swagger activas     |
| frontend/  | 🚧 Pendiente     | Interfaz web por implementar                          |

---

## 🤝 Contribuciones

Este proyecto está en constante evolución. Las sugerencias, issues y pull requests son bienvenidas. Si deseas colaborar, no dudes en ponerte en contacto.

---

## ⚖️ Licencia

Este proyecto se encuentra bajo la Licencia MIT.

---

## ✨ Autor

**Katherine Inalef Pineda**  
💻 Desarrolladora Fullstack  
📍 Valdivia, Chile
