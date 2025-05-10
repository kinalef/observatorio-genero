# 📊 Observatorio de Violencia de Género

Este proyecto tiene como objetivo centralizar, procesar y disponibilizar datos públicos sobre violencia de género en Chile, extraídos desde la [Red Chilena contra la Violencia hacia las Mujeres](https://www.nomasviolenciacontramujeres.cl/).

La arquitectura del sistema se divide en dos módulos principales: `backend` y `frontend`. A su vez, el `backend` se organiza en dos submódulos: uno para el procesamiento y carga de datos, y otro para la API REST que expone los datos procesados de forma autenticada.

---
## 🌐 Demo

🔗 [observatorio-genero.vercel.app](https://observatorio-genero.vercel.app)

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

## 🧩 Estructura del Proyecto

- `/frontend`: Aplicación web (SPA) desarrollada en Next.js 14, con gráficos dinámicos usando ECharts y Recharts.
- `/backend`: API construida con Node.js + Express. Expone endpoints protegidos y públicos.
- `/backend/carga-datos`: Scripts que procesan archivos Excel (de la Red Chilena contra la Violencia hacia las Mujeres) y los insertan en la base de datos PostgreSQL.
- Base de datos: PostgreSQL, estructurada para facilitar agregación de estadísticas por año, región, edad, relación con agresor, etc.

## 🔗 Datos y API

Los datos mostrados en el frontend provienen directamente de una **API desarrollada dentro de este mismo repositorio**, ubicada en la carpeta `/backend`. Esta API se encuentra desplegada en un servidor distinto, pero sirve como fuente oficial de datos para la SPA.  
Los datos se cargan mediante scripts desde archivos Excel entregados públicamente por la Red Chilena contra la Violencia hacia las Mujeres.

## 📌 Estado actual

| Módulo     | Estado           | Notas                                                 |
|------------|------------------|--------------------------------------------------------|
| backend/   | ✅ Funcional      | Carga de datos probada con archivos reales            |
| api/       | 🛠️ En desarrollo | Autenticación JWT y documentación Swagger activas     |
| frontend/  | 🚧 Pendiente     | Interfaz web por implementar                          |

---

## 🛠️ Tecnologías Utilizadas

### Frontend

- Next.js 14
- TypeScript
- Tailwind CSS
- ECharts
- Recharts
- Framer Motion

### Backend

- Node.js + Express
- PostgreSQL
- Sequelize ORM
- Swagger para documentación de la API

## 🤝 Contribuciones

Este proyecto está en constante evolución. Las sugerencias, issues y pull requests son bienvenidas. Si deseas colaborar, no dudes en ponerte en contacto.

---

## ✅ Uso y Licencia

- Los datos provienen de la **Red Chilena contra la Violencia hacia las Mujeres**.
- Esta plataforma no tiene fines de lucro.
- El proyecto es de código abierto y se puede reutilizar, siempre que se cite la fuente de los datos y se respete el objetivo de sensibilización.

## ✨ Autor

**Katherine Inalef Pineda**  
💻 Desarrolladora Fullstack  
📍 Valdivia, Chile
