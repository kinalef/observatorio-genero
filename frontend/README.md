# Observatorio de Violencia de Género - Frontend

Este módulo corresponde al frontend tipo Single Page Application (SPA) del Observatorio de Violencia de Género. Visualiza los datos obtenidos desde la API y los presenta en forma de gráficos y secciones explicativas.

## Tecnologías utilizadas

- Next.js 14
- Tailwind CSS
- ECharts (gráficos de barra, heatmap, wordcloud)
- TypeScript

## Estructura general

- `/components/`: Componentes reutilizables como gráficos y secciones.
- `/services/`: Funciones para conexión con la API.
- `/app/`: Página principal del sitio.

## Variables de entorno

Crear un archivo `.env` con la siguiente variable:

```
NEXT_PUBLIC_API_URL=https://<URL-del-backend>
```

## Funcionalidades

- Visualización de casos por año (gráfico de barras)
- Heatmap por región y año
- Nube de palabras con relación entre víctima y agresor
- Secciones de contexto y sensibilización
- Diseño responsivo y accesible

## Despliegue

Este frontend puede ser desplegado fácilmente en Vercel. Solo asegúrate de configurar correctamente la variable `NEXT_PUBLIC_API_URL`.

## Licencia

Uso sin fines de lucro. Proyecto de sensibilización social basado en datos públicos.

