"use client";

import Link from "next/link";
import { FooterSection } from "@/components/sections/FooterSection";

export default function APIDocsPage() {
  return (
    <>
      <main className="bg-[#111111] text-gray-200 min-h-screen pt-28 font-sans flex flex-col items-center px-6">
        <div className="w-full max-w-4xl">
          <h1 className="text-5xl font-extrabold mb-6 text-red-500">
            Documentación de la API
          </h1>

          <p className="text-lg mb-10 text-gray-300">
            La API del Observatorio permite acceder a los datos recopilados sobre femicidios en Chile. Puedes consumirla desde otras plataformas o aplicaciones usando los endpoints disponibles.
          </p>


          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-white">Endpoints principales(no requieren autenticación)</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-700">
              <table className="w-full text-left border-collapse">
                <thead className="bg-gray-800 text-sm text-gray-300">
                  <tr>
                    <th className="p-4 border-b border-gray-700">Método</th>
                    <th className="p-4 border-b border-gray-700">Endpoint</th>
                    <th className="p-4 border-b border-gray-700">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="hover:bg-gray-900">
                    <td className="p-4 text-green-400">GET</td>
                    <td className="p-4 font-mono text-sm text-blue-400">/api/casos</td>
                    <td className="p-4 text-gray-300">Lista todos los casos registrados</td>
                  </tr>
                  <tr className="hover:bg-gray-900">
                    <td className="p-4 text-green-400">GET</td>
                    <td className="p-4 font-mono text-sm text-blue-400">/api/estadisticas</td>
                    <td className="p-4 text-gray-300">Estadísticas agregadas por año, región y relación</td>
                  </tr>
                  <tr className="hover:bg-gray-900">
                    <td className="p-4 text-green-400">GET</td>
                    <td className="p-4 font-mono text-sm text-blue-400">/api/casos/:id</td>
                    <td className="p-4 text-gray-300">Obtiene el detalle de un caso específico</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Ejemplo de uso</h2>
            <pre className="bg-[#1c1c1c] text-red-400 p-4 rounded-lg text-sm overflow-x-auto">
{`curl https://observatorio-genero.vercel.app/api/casos`}
            </pre>
          </section>

          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-4 text-white">Ejemplo de respuesta</h2>
            <pre className="bg-[#1c1c1c] text-green-300 p-4 rounded-lg text-sm overflow-x-auto">
{`[
  {
    "id": 1,
    "nombre_victima": "María Pérez",
    "fecha": "2023-05-12",
    "region": "Metropolitana",
    "edad": 32,
    "relacion_agresor": "Conviviente"
  },
  {
    "id": 2,
    "nombre_victima": "Ana Soto",
    "fecha": "2022-11-03",
    "region": "Los Lagos",
    "edad": 26,
    "relacion_agresor": "Pareja"
  }
]`}
            </pre>
          </section>

          <section className="mb-24">
            <Link
              href={`${process.env.NEXT_PUBLIC_API_URL}/api/docs`}
              target="_blank"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-200"
            >
              Ver documentación técnica (Swagger)
            </Link>
          </section>

          <p className="text-sm text-gray-500 text-center mt-10">
            Última actualización: 07/2025
          </p>
        </div>

        <FooterSection />
      </main>
    </>
  );
}