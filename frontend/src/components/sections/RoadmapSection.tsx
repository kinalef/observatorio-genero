import React from "react";

export  function RoadmapSection() {
  return (
    <section className="bg-[#111111] text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Próximos pasos</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12">
          Seguiremos incorporando datos,
          desarrollando análisis profundos y sumando nuevas formas de visibilizar la
          violencia de género. 
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-[#1A1A1A] p-8 rounded-2xl shadow-md hover:scale-1  05 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Integración de nuevos datasets</h3>
            <p className="text-base leading-relaxed">
              Incorporaremos datos del Ministerio de la Mujer y Equidad de Género, y
              otras organizaciones relevantes, para enriquecer la base de casos y brindar
              una visión más completa.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Panel analítico interactivo</h3>
            <p className="text-base leading-relaxed">
              Se está trabajando en un dashboard que permita explorar los datos desde
              múltiples perspectivas: por región, año, edad, tipo de agresor y más.
            </p>
          </div>

          <div className="bg-[#1A1A1A] p-8 rounded-2xl shadow-md hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-semibold mb-4">Acceso API público</h3>
            <p className="text-base leading-relaxed">
              Queremos que esta información esté disponible para desarrolladores,
              investigadores y periodistas a través de una API protegida y bien documentada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
