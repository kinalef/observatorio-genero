"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic"; 

// Importación dinámica con SSR desactivado
const CasosPorAnioChart = dynamic(
  () => import("@/components/charts/CasosPorAnioChart").then((mod) => mod.CasosPorAnioChart),
  { ssr: false }
);

const HeatmapECharts = dynamic(
  () => import("@/components/charts/HeatmapECharts").then((mod) => mod.HeatmapECharts),
  { ssr: false }
);

const RelacionAgresorWordCloud = dynamic(
  () => import("@/components/charts/RelacionAgresorWordCloud").then((mod) => mod.RelacionAgresorWordCloud),
  { ssr: false }
);

interface Estadisticas {
  total_femicidios: number;
  distribucion_edad: {
    promedio: number | null;
    menores_de_edad: number;
    rango_25_35: number;
  };
  relacion_agresor: Record<string, number>;
  casos_por_region: Record<string, number>;
  casos_por_anio: Record<string, number>;
  casos_por_region_y_anio: Record<string, Record<string, number>>;
}

interface DatosSectionProps {
  estadisticas: Estadisticas;
}

export const DatosSection: React.FC<DatosSectionProps> = ({ estadisticas }) => {
  const datosBarChart = Object.entries(estadisticas.casos_por_anio).map(
    ([anio, cantidad]) => ({
      anio,
      cantidad: Number(cantidad),
    })
  );

  const datosPieRelacion = useMemo(
    () =>
      Object.entries(estadisticas.relacion_agresor || {}).map(
        ([tipo, cantidad]) => ({
          text: tipo,
          value: Number(cantidad),
        })
      ),
    [estadisticas]
  );

  const heatmapData = useMemo(() => {
    const casos = estadisticas.casos_por_region_y_anio || {};
  
    const allYears = Array.from(
      new Set(Object.values(casos).flatMap(regionData => Object.keys(regionData)))
    ).sort();
  
    return Object.entries(casos).map(([region, datosPorAnio]) => {
      const entrada: { region: string; [year: string]: number | string } = { region };
      allYears.forEach(anio => {
        entrada[anio] = datosPorAnio[anio] ?? 0;
      });
      return entrada;
    });
  }, [estadisticas]);

  // Extrae solo las claves numéricas del objeto casos_por_anio
  const numericYears = Object.keys(estadisticas.casos_por_anio)
    .filter((key) => !isNaN(Number(key)))
    .map(Number);

  const minimo = Math.min(...numericYears);
  const maximo = Math.max(...numericYears);
  return (
    <section className="bg-[#111111] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Cada número es una vida arrebatada
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          El Observatorio recoge información sobre los casos de femicidio en Chile, con el objetivo de visibilizar esta grave problemática. Los datos muestran la magnitud de una realidad que no podemos seguir ignorando.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div className="bg-[#1c1c1c] p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <p className="text-6xl font-bold text-red-600 mb-2">
            {estadisticas.total_femicidios}
          </p>
          <p className="text-lg text-gray-200">
            femicidios registrados en el período analizado
          </p>
        </div>

        <div className="bg-[#1c1c1c] p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <p className="text-6xl font-bold text-red-600 mb-2">
            {estadisticas.distribucion_edad.menores_de_edad}
          </p>
          <p className="text-lg text-gray-200">víctimas eran menores de edad</p>
        </div>

        <div className="bg-[#1c1c1c] p-8 rounded-2xl shadow-lg text-center hover:scale-105 transition-transform">
          <p className="text-6xl font-bold text-red-600 mb-2">
            {Object.keys(estadisticas.casos_por_anio).length}
          </p>
          <p className="text-lg text-gray-200">años de registros disponibles</p>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-sm text-gray-500">
          Fuente: Red Chilena contra la Violencia hacia las Mujeres. Periodo de datos: {minimo} - {maximo}
        </p>
      </div>

      <CasosPorAnioChart data={datosBarChart} />

      {datosPieRelacion.length > 0 ? (
        <RelacionAgresorWordCloud data={datosPieRelacion} />
      ) : (
        <section className="bg-[#111111] py-10 text-center text-white">
          <p>No hay datos disponibles sobre la relación con el agresor.</p>
        </section>
      )}

    <HeatmapECharts data={heatmapData} />
    </section>
  );
};