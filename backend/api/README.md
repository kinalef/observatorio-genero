# API REST - Observatorio de Violencia de Género

Esta API gestiona información sobre casos de femicidio en Chile, basada en datos recopilados por la Red Chilena contra la Violencia hacia las Mujeres. Permite consultar, filtrar y administrar los registros de femicidios a través de endpoints seguros y autenticados.

## Tecnologías utilizadas

- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL
- JWT (Autenticación)
- Swagger (Documentación de la API)

## Instalación local

1. Clona este repositorio:
```bash
git clone https://github.com/tu_usuario/tu_repo_backend.git
cd tu_repo_backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
PORT=8000
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=nombre_base_datos
DB_PORT=5432
JWT_SECRET=tu_secreto_super_seguro
```

4. Corre las migraciones si es necesario.

5. Inicia el servidor:
```bash
npm run dev
```

La API estará disponible en `http://localhost:8000`.

## Principales Endpoints

- `POST /api/login/google` → Autenticación mediante Google OAuth.
- `GET /api/casos` → Obtiene todos los casos registrados.
- `POST /api/casos` → Agrega un nuevo caso (requiere autenticación).
- `GET /api/estadisticas` → Obtiene estadísticas agregadas de los casos.

> **Nota:** Todas las rutas principales requieren token JWT para acceso, excepto el login.

## Documentación

Puedes explorar y probar los endpoints a través de la documentación Swagger integrada en `/api/docs`.

## Deploy

(Enlace pronto disponible)

## Roadmap

- Implementar pruebas unitarias para los controladores principales (Jest/Supertest).
- Mejorar el manejo de errores y mensajes de respuesta.
- Agregar validación avanzada de datos en los endpoints (por ejemplo, usando Joi).
- Implementar paginación y filtros para consultas de casos.
- Mejorar seguridad mediante Rate Limiting y Helmet.
- Agregar sistema de roles para diferentes tipos de usuarios.
- Implementar logging avanzado para seguimiento de errores y actividad.
- Publicar el frontend y conectar con esta API para visualización pública de los datos.

---
