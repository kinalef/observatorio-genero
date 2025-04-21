# 🌐 Frontend — Observatorio de Violencia de Género

Este módulo implementa la interfaz pública del Observatorio de Violencia de Género en Chile. Su objetivo es sensibilizar, informar y visibilizar mediante una experiencia moderna, fluida y respetuosa.

## 🧱 Tecnologías

- [Next.js](https://nextjs.org/) 15
- [React](https://reactjs.org/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/) para animaciones suaves

## ✨ Estructura

```
/src
├── app/                     # Entrada principal (pages, layout)
├── components/              # Componentes reutilizables por sección
│   └── sections/            # Hero, Datos, Footer, etc.
├── styles/                  # Archivo `globals.css` con Tailwind
└── assets/                  # Imágenes y recursos visuales
```

## 🚀 Cómo levantar localmente

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Ejecutar en modo desarrollo:
   ```bash
   npm run dev
   ```

3. Accede en tu navegador:
   ```
   http://localhost:3000
   ```


## 📌 Estado actual

- Página de difusión en desarrollo (SPA)
- A futuro: integración con API y estadísticas dinámicas

## ⚠️ Notas

- Este frontend se conecta al backend autenticado de la API `/api/estadisticas/globales` (en desarrollo).
- Algunas secciones están temporalmente desactivadas mientras se completa el backend.

---

**Autora**: Katherine Inalef Pineda  
📍 Valdivia, Chile — 2025
