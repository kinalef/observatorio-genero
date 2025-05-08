# Documentación de servicios en `/src/services/`

Este directorio contiene la lógica de comunicación con la API del Observatorio. Se encuentra organizada en archivos independientes por dominio, lo que permite mantener el código modular, reutilizable y fácil de mantener.

---

## `apiConfig.ts`

**Propósito:**
Define la URL base de la API, obtenida desde las variables de entorno.

**Contenido principal:**
```ts
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
```

---

## `authService.ts`

**Propósito:**
Gestiona los tokens de autenticación JWT en el navegador (access token y refresh token).

**Funciones principales:**
- `getAccessToken()` y `getRefreshToken()`: Obtienen los tokens desde `localStorage`.
- `setTokens(accessToken, refreshToken)`: Almacena los tokens.
- `clearTokens()`: Elimina los tokens.
- `refreshAccessToken()`: Llama al endpoint `/api/auth/refresh` para obtener un nuevo access token usando el refresh token guardado.

---

## `apiFetch.ts`

**Propósito:**
Realiza peticiones HTTP a la API agregando automáticamente el token de autenticación.

**Comportamiento:**
- Adjunta el header `Authorization: Bearer <token>`.
- Si el token expiró, intenta renovarlo usando `authService.refreshAccessToken()`.
- Si la renovación falla, borra los tokens y lanza un error.

**Ejemplo de uso:**
```ts
const datos = await apiFetch("/api/estadisticas/globales");
```

---

## `estadisticasService.ts`

**Propósito:**
Encapsula las llamadas al endpoint de estadísticas globales del observatorio.

**Funciones:**
- `obtenerEstadisticasGlobales()`: Llama a `/api/estadisticas/globales` y devuelve los datos procesados desde el backend.

**Ejemplo:**
```ts
import { obtenerEstadisticasGlobales } from "@/services/estadisticasService";

const data = await obtenerEstadisticasGlobales();
```

---

## Variables de entorno necesarias

- `NEXT_PUBLIC_API_URL` — URL base de la API (por ejemplo, `http://localhost:3000`)
- `NEXT_PUBLIC_ACCESS_TOKEN_KEY` — Clave de acceso token en `localStorage`
- `NEXT_PUBLIC_REFRESH_TOKEN_KEY` — Clave de refresh token en `localStorage`

---

> Esta estructura está pensada para facilitar el trabajo con APIs seguras y escalables dentro de una SPA en Next.js.
