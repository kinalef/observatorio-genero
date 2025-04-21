/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        oscuro: "#111111",
        grisProfundo: "#1e1e1e",
        violetaOscuro: "#4B0082",
        violetaClaro: "#9B59B6",
        acento: "#FFD166",
        // Extendible para dashboard
        grisSuave: "#2c2c2c",
        fondoDashboard: "#0F0F0F",
        textoClaro: "#EEEEEE"
      }
    },
  },
  plugins: [],
}