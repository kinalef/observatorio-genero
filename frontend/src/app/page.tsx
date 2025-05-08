"use client";

import { useEffect, useState } from "react";

import { HeroSection } from "@/components/sections/HeroSection";
import { PorqueSection } from "@/components/sections/PorqueSection";
import { DatosSection } from "@/components/sections/DatosSection";
import { ImpactoSection } from "@/components/sections/ImpactoSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { FooterSection } from "@/components/sections/FooterSection";

import { obtenerEstadisticas } from "@/services/estadisticasService";

export default function Home() {
  const [estadisticas, setEstadisticas] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await obtenerEstadisticas();
        setEstadisticas(data);
      } catch (error) {
        console.error("Error al obtener estadísticas:", error);
      }
    };

    fetchData();
  }, []);

  if (!estadisticas) {
    return (
      <main className="bg-[#111111] min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Cargando datos...</p>
      </main>
    );
  }

  return (
    <main className="font-sans text-gray-200 bg-[#111111] overflow-x-hidden">
      <HeroSection />
      <PorqueSection />
      <DatosSection estadisticas={estadisticas} />
      <ImpactoSection />
      <RoadmapSection />
      <FooterSection />
    </main>
  );
}