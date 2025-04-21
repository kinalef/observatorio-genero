// frontend/src/components/sections/FooterSection.tsx
'use client';

export function FooterSection() {
  return (
    <footer className="bg-[#2C2C2E] text-[#F5F5F7] py-8 px-6 text-center">
      <p className="text-sm mb-2">
        Datos recopilados desde la Red Chilena contra la Violencia hacia las Mujeres (<a href="https://www.nomasviolenciacontramujeres.cl/registro-de-femicidios/" target="_blank" rel="noopener noreferrer" className="underline">ver fuente</a>)
      </p>
      <p className="text-sm">
        Proyecto de código abierto en <a href="https://github.com/kinalef/observatorio-genero" target="_blank" rel="noopener noreferrer" className="underline">GitHub</a> — Desarrollado por <a href="https://katherineinalef.cl" target="_blank" rel="noopener noreferrer" className="underline">Katherine Inalef</a>
      </p>
    </footer>
  );
}