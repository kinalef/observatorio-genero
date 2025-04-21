'use client';
import { motion } from 'framer-motion';

export function RoadmapSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Lo que viene
        </motion.h2>

        <div className="space-y-10 text-left">
          <motion.div
            className="p-6 border-l-4 border-purple-600 bg-gray-50 rounded-md shadow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-700">+ Visualización interactiva</h3>
            <p className="text-gray-700">
              Incorporaremos gráficos y mapas dinámicos que permitan explorar patrones, zonas críticas y evolución de casos por región.
            </p>
          </motion.div>

          <motion.div
            className="p-6 border-l-4 border-purple-600 bg-gray-50 rounded-md shadow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-700">+ Datos desde más fuentes</h3>
            <p className="text-gray-700">
              Agregaremos información del Ministerio de la Mujer y otras instituciones públicas para complementar y contrastar los registros.
            </p>
          </motion.div>

          <motion.div
            className="p-6 border-l-4 border-purple-600 bg-gray-50 rounded-md shadow"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-700">+ Comunidad y participación</h3>
            <p className="text-gray-700">
              Buscamos abrir el observatorio a colaboración con organizaciones territoriales, universidades y personas interesadas en aportar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
