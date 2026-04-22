'use client';

import { motion } from 'motion/react';
import { Code2 } from 'lucide-react';

export default function About({
  t,
  scrollToSection,
}: {
  t: (key: string) => string;
  scrollToSection: (id: string) => void;
}) {
  return (
    <section id="acerca" className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50 section-about">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            <AnimatedText text={t('acercaTitulo')} speed={40} />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-2 md:order-1"
          >
            <div className="bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-blue-100 dark:border-white/6 shadow-2xl rounded-3xl p-8 md:p-10">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-md">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2L15 8l6 .5-4.5 3 1.5 6L12 15l-6 3 1.5-6L3 8.5 9 8l3-6z" fill="currentColor" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-white">{t('tituloAcerca')}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-300">{t('descripcionAcerca')}</p>
                </div>
              </div>

              <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6">
                {t('parrafoAcerca')}
              </p>

              <ul className="mb-6">
                <li className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-blue-50 text-blue-600 font-semibold">●</span>
                  <span className="text-sm text-slate-600 dark:text-slate-300">{t('bullets1')}</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
            className="relative order-1 md:order-2"
          >
            <div className="about-img-wrapper relative rounded-3xl">
              <div className="absolute -inset-3 bg-gradient-to-tr from-cyan-200 via-blue-100 to-indigo-50 rounded-3xl blur-2xl opacity-40"></div>
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/40 shadow-2xl">
                <img
                  src="/1000247272-removebg-preview(1).png"
                  alt="Juan Sebastian Estacio - Guitarrista"
                  className="about-img w-full h-[420px] object-cover rounded-2xl transform transition-transform duration-700 will-change-transform"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
