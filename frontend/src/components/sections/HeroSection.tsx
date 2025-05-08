"use client";

import Image from "next/image";

export  function HeroSection() {
  return (
    <section className="relative w-full h-screen bg-[#111111] flex flex-col justify-center items-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/HSmujeres3.png"
          alt="Silueta de mujeres en fila"
          fill
          className="object-cover object-center opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      </div>

      <div className="z-10 px-6 max-w-3xl text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Más de <span className="text-red-600"> 855 mujeres</span> han sido asesinadas
          por violencia femicida en Chile desde el 2010
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Detrás de cada cifra hay una vida, una historia, una ausencia. Esta
          plataforma visibiliza los datos recopilados por la <a href="https://www.nomasviolenciacontramujeres.cl/registro-de-femicidios/" target="_blank" className="font-bold">Red Chilena contra
          la Violencia hacia las Mujeres</a>.
        </p>
      </div>
    </section>
  );
}
