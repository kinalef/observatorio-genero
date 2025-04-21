// frontend/src/components/sections/DatosSection.tsx
'use client';
import { motion } from 'framer-motion';

export function DatosSection() {
  return (
    <section className="bg-[#121212] text-[#F5F5F7] py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Estadísticas Clave (2010–2024)
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-[#2C2C2E] p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[#B5B6C9] mb-2">Femicidios registrados</p>
            <p className="text-4xl font-bold text-white">563</p>
          </motion.div>

          <motion.div
            className="bg-[#2C2C2E] p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[#B5B6C9] mb-2">Menores de edad</p>
            <p className="text-4xl font-bold text-white">73</p>
          </motion.div>

          <motion.div
            className="bg-[#2C2C2E] p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[#B5B6C9] mb-2">Parejas o exparejas</p>
            <p className="text-4xl font-bold text-white">67%</p>
          </motion.div>

          <motion.div
            className="bg-[#2C2C2E] p-6 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-xl text-[#B5B6C9] mb-2">Casos sin justicia</p>
            <p className="text-4xl font-bold text-white">22%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
