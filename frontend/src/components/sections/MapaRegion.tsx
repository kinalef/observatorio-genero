"use client";

import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import chileGeo from "@/public/maps/chile-regions.json"; // Asegúrate de que este path sea correcto

interface MapaRegionProps {
  datos: Record<string, number>;
}

// Función para normalizar nombres de regiones (sin acentos y en minúsculas)
const normalizarNombre = (nombre: string) =>
  nombre
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");

export const MapaRegion: React.FC<MapaRegionProps> = ({ datos }) => {
  const maxCasos = Math.max(...Object.values(datos));
  const minCasos = Math.min(...Object.values(datos));

  const colorScale = scaleQuantize<string>()
    .domain([minCasos, maxCasos])
    .range(["#fee5d9", "#fcae91", "#fb6a4a", "#de2d26", "#a50f15"]);

  return (
    <section className="bg-[#111111] py-16 text-white text-center">
      <h2 className="text-2xl font-bold mb-6">Casos por región</h2>

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{ scale: 1100, center: [-71, -35] }}
        width={800}
        height={600}
        style={{ margin: "0 auto" }}
      >
        <Geographies geography={chileGeo}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const nombreRegionGeo = geo.properties.Region || geo.properties.region;
              const nombreNormalizado = normalizarNombre(nombreRegionGeo || "");
              const nombreEnDatos = Object.keys(datos).find(
                (key) => normalizarNombre(key) === nombreNormalizado
              );
              const casos = nombreEnDatos ? datos[nombreEnDatos] : 0;

              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={colorScale(casos)}
                  stroke="#ffffff"
                  style={{
                    default: { outline: "none" },
                    hover: { fill: "#b30000", outline: "none" },
                    pressed: { outline: "none" },
                  }}
                >
                  <title>
                    {nombreEnDatos ?? "Región desconocida"}: {casos} casos
                  </title>
                </Geography>
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </section>
  );
};