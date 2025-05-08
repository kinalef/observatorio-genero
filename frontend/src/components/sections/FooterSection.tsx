"use client";

import React from "react";

export const FooterSection = () => {
  return (
    <footer className="bg-[#111111] text-gray-300 py-12 mt-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-semibold mb-4">Sobre el Observatorio</h4>
          <p className="text-sm leading-relaxed">
            Este sitio es parte de un proyecto de visualización de datos públicos sobre femicidios en Chile.
            Tiene como propósito visibilizar y sensibilizar sobre la violencia estructural hacia las mujeres.
          </p>
          <p className="text-sm mt-4">Período de datos: <strong>2010 - 2024</strong></p>
          <p className="text-sm"><a href="https://www.nomasviolenciacontramujeres.cl/registro-de-femicidios/" target="_blank" className="text-white hover:underline">Fuente: Red Chilena contra la Violencia hacia las Mujeres</a></p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Créditos</h4>
          <p className="text-sm leading-relaxed">
            Desarrollo y diseño por <strong><a href="katherineinalef.cl" target="_blank" className="text-white hover:underline">Katherine Inalef</a></strong>. 
          </p>
          <p className="text-sm mt-4">
            Si deseas conocer más sobre este proyecto o colaborar, puedes escribir a: <br />
            <a href="mailto:katherineinalef@gmail.com" className="text-white hover:underline">
              katherineinalef@gmail.com
            </a>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-sm text-center text-gray-500">
        © {new Date().getFullYear()} Observatorio de Violencia de Género. Todos los derechos reservados.
      </div>
    </footer>
  );
};