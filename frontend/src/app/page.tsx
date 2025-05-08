"use client";
// 1. Imports externos
import { useEffect, useState } from "react";
// 2. Imports de componentes internos
import { HeroSection } from "@/components/sections/HeroSection";
import { PorqueSection } from "@/components/sections/PorqueSection";
import { DatosSection } from "@/components/sections/DatosSection";
import { CasosPorAnioChart } from "@/components/sections/CasosPorAnioChart";
import { EnfoqueSection } from "@/components/sections/EnfoqueSection";
import { ImpactoSection } from "@/components/sections/ImpactoSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { MapaRegion } from "@/components/sections/MapaRegion";

// 3. Imports de servicios
import { obtenerEstadisticas } from "@/services/estadisticasService";
import { authService } from "@/services/authService";


export default function Home() {
  const [estadisticas, setEstadisticas] = useState<any>(null);
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = authService.getAccessToken();
      if (!token) {
        const refreshed = await authService.refreshAccessToken();
        if (!refreshed) {
          console.warn("⚠️ No se pudo obtener token");
        }
      }
      setIsAuthChecked(true);
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (!isAuthChecked) return;

      try {
        const data = await obtenerEstadisticas();
        setEstadisticas(data);
      } catch (error) {
        console.error("Error al obtener estadísticas:", error);
      }
    };

    fetchData();
  }, [isAuthChecked]);

  if (!estadisticas) {
    return (
      <main className="bg-[#111111] min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Cargando datos...</p>
      </main>
    );
  }

  
  return (
    <main className="font-sans text-gray-200 bg-[#111111] overflow-x-hidden">
      {/* Sección principal de sensibilización */}
      <HeroSection />
      {/* Explicación del problema */}
      <PorqueSection />
       {/* Datos generales en tarjetas o bloques */}
      <DatosSection estadisticas={estadisticas}/>
      {/* Impacto y resultados esperados */}
      <ImpactoSection />
      {/* Plan de acción o próximos pasos */}
      <RoadmapSection />
      {/* Créditos, fuentes y contacto */}
      <FooterSection />
    </main>
  );
}
