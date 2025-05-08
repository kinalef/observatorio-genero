// src/services/estadisticasService.ts
import { apiFetch } from "./apiFetch";

export const obtenerEstadisticas = async () => {
  console.log("obtenerEstadisticas fue llamada");

  try {
    const data = await apiFetch('/api/estadisticas/globales');
    console.log("Datos obtenidos desde apiFetch:", data);
    return data;
  } catch (error) {
    console.error("Error al obtener estadísticas:", error);
    return null;
  }
};