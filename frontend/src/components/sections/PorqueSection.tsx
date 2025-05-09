'use client';
import { motion } from 'framer-motion';

export function PorqueSection() {
    console.log("Cargando componente PorqueSection");
  return (
    <section className="bg-white text-gray-800 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Por qué nace este observatorio?
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
        Este observatorio nace con la finalidad de visibilizar y concientizar. En un contexto donde la violencia de género sigue siendo sistemáticamente invisibilizada, necesitamos datos claros, accesibles y humanos.
        </motion.p>
      </div>
    </section>
  );
}
