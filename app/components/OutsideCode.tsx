'use client';

import { motion } from 'motion/react';

export default function OutsideCode({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <section id="fuera-del-codigo" className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            {t('fueraDelCodigoTitulo')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-blue-100 dark:border-white/6 shadow-2xl rounded-3xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative">
                <img
                  src="/WhatsApp Image 2026-04-21 at 9.20.52 AM.jpeg"
                  alt="Música en vivo - Pasión por la guitarra"
                  className="w-full h-72 md:h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block px-4 py-2 bg-blue-600/80 backdrop-blur-sm text-white rounded-lg font-semibold">
                    {t('livePerformance')}
                  </span>
                </div>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {t('fueraDelCodigoTexto')}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Cuando no estoy programando, me dedico a tocar la guitarra y el bajo. Mi pasión por la música me ha llevado a explorar géneros como el Rock, Metal y Blues, tanto en presentaciones en vivo como en estudio. La música me inspira creatividad y me ayuda a mantener un equilibrio entre la tecnología y el arte.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
