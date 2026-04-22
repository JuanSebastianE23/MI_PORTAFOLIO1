'use client';

import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function Education({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <section id="estudios" className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50 section-experience">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            <AnimatedText text={t('estudiosTitulo')} speed={40} lang={lang} />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {/* Primera experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-blue-100"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {t('experienciaTitulo2')}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      {t('experienciaInstitucion')}
                    </p>
                  </div>
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg font-semibold">
                    {t('experienciaFecha')}
                  </span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  {t('experienciaDescripcion')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Segunda experiencia */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white p-10 rounded-3xl shadow-2xl border border-blue-100"
          >
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                  <Code2 className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">
                      {t('experienciaTitulo2b')}
                    </h3>
                    <p className="text-lg text-blue-600 font-semibold">
                      {t('experienciaInstitucion2')}
                    </p>
                  </div>
                  <span className="px-2 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded text-xs font-semibold whitespace-nowrap">
                    {t('experienciaFecha2')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
