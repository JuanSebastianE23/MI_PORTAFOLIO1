'use client';

import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import AnimatedText from './AnimatedText';
import AnimatedTyping from './AnimatedTyping';

export default function Hero({
  t,
  lang,
  scrollToSection,
}: {
  t: (key: string) => string;
  lang: 'es' | 'en';
  scrollToSection: (id: string) => void;
}) {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-12 md:pt-20 section-hero">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-600"
          >
            <AnimatedTyping text="Juan Sebastian Estacio" charDelay={80} pause={2200} loop={true} className="inline-block" />
          </motion.h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-2xl text-blue-600 mb-4"
            >
               <AnimatedText text={t('hola')} speed={60} lang={lang} />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4"
            >
               <AnimatedText text={t('role')} speed={40} lang={lang} />
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="text-lg text-slate-600 mb-8 leading-relaxed"
            >
                <AnimatedText text={t('subtitle')} speed={30} lang={lang} />
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 items-center"
            >
              <motion.a
                href="/Hoja de Vida Juan Sebastian Estacio.pdf"
                download="Hoja de Vida Juan Sebastian Estacio.pdf"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(37, 99, 235, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                {t('descargarCV')}
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('contacto')}
                className="w-full sm:w-auto px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                {t('contactar')}
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center"
          >
            <img
              src="/1000247272-removebg-preview(1).png"
              alt="Avatar Juan Sebastian Estacio"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
