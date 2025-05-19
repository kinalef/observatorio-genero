"use client";

import Link from "next/link";

export default function APIDocsPage() {
  return (
    <>
      <main className="bg-[#111111] text-gray-200 min-h-screen p-10 pt-28 font-sans">
        <h1 className="text-4xl font-extrabold mb-4 text-red-500">
          Documentación API
        </h1>
        <p className="text-lg mb-8 max-w-3xl">
          Esta API permite consultar los datos recopilados por el Observatorio de Femicidios en Chile. Puedes acceder a los endpoints directamente o integrar estos datos en otras plataformas.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Endpoints principales</h2>
          <table className="w-full text-left border border-gray-700">
            <thead className="bg-gray-800">
              <tr>
                <th className="p-3 border border-gray-700">Método</th>
                <th className="p-3 border border-gray-700">Endpoint</th>
                <th className="p-3 border border-gray-700">Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-700">
                <td className="p-3">GET</td>
                <td className="p-3">/api/casos</td>
                <td className="p-3">Lista todos los casos registrados</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-3">GET</td>
                <td className="p-3">/api/estadisticas</td>
                <td className="p-3">Datos agregados por año, región y relación</td>
              </tr>
              <tr className="border-t border-gray-700">
                <td className="p-3">GET</td>
                <td className="p-3">/api/casos/:id</td>
                <td className="p-3">Detalle de un caso específico</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Ejemplo de uso</h2>
          <pre className="bg-[#1a1a1a] text-red-400 p-4 rounded-lg overflow-auto">
{`curl https://observatorio-genero.vercel.app/api/casos`}
          </pre>
        </section>

        <section>
          <Link
            href={`${process.env.NEXT_PUBLIC_API_URL}/api/docs`}
            target="_blank"
            className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Ver documentación técnica (Swagger)
          </Link>
        </section>
      </main>
    </>
  );
}