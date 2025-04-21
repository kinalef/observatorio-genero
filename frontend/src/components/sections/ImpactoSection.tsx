'use client';
import { motion } from 'framer-motion';

export function ImpactoSection() {
  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Qué impacto buscamos?
        </motion.h2>

        <div className="space-y-8 text-left">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-700">Conciencia Colectiva</h3>
            <p className="text-gray-600">
              Promover una mirada crítica y empática frente a la violencia estructural que enfrentan las mujeres en Chile.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-700">Acción Informada</h3>
            <p className="text-gray-600">
              Entregar herramientas concretas a periodistas, investigadoras, activistas y ciudadanía en general para generar cambios reales.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-700">Memoria y registro</h3>
            <p className="text-gray-600">
              No olvidamos. Cada dato cargado aquí representa una vida. Documentar es también resistir.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}