'use client';
import { motion } from 'framer-motion';

export function EnfoqueSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nuestro enfoque
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Enfoque Feminista</h3>
            <p className="text-gray-600">
              Visibilizamos la violencia de género como un problema estructural, no como hechos aislados. Nos basamos en datos recopilados por organizaciones comprometidas con los derechos de las mujeres.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-2 text-purple-700">Transparencia y Acceso</h3>
            <p className="text-gray-600">
              Queremos que cualquier persona pueda acceder, comprender y usar estos datos para generar conciencia, informar políticas públicas o impulsar iniciativas ciudadanas.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
