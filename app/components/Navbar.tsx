'use client';

import { motion } from 'motion/react';
import { Globe, Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import AnimatedText from './AnimatedText';

export default function Navbar({
  lang,
  setLang,
  dark,
  setDark,
  t,
  scrollToSection,
}: {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
  dark: boolean;
  setDark: (dark: boolean) => void;
  t: (key: string) => string;
  scrollToSection: (id: string) => void;
}) {
  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es');
  const toggleDark = () => {
    setDark(!dark);
    localStorage.setItem('theme', !dark ? 'dark' : 'light');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div whileHover={{ scale: 1.05 }} className="brand flex items-center gap-3 text-blue-600 font-bold">
            <img
              src="/1000247272-removebg-preview(1).png"
              alt="Avatar Juan Sebastian"
              className="w-8 h-8 rounded-full object-cover shadow-sm"
            />
            <div className="flex flex-col leading-tight">
              <div className="brand-name text-blue-600 text-base md:text-lg font-bold">
                <AnimatedText text="Juan Sebastian Estacio" speed={30} className="brand-name" />
              </div>
              <span className="text-xs text-slate-600 dark:text-white"><AnimatedText text="Full Stack Developer" speed={60} /></span>
            </div>
          </motion.div>

          <div className="hidden md:flex items-center gap-6">
            {['inicio', 'acerca', 'proyectos', 'testimonios', 'estudios', 'contacto'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection(item)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-slate-700 hover:text-blue-600 transition-colors capitalize font-medium nav-link"
              >
                {item === 'acerca' ? (lang === 'es' ? 'Acerca de mí' : 'About me') : (t(item) || item)}
              </motion.button>
            ))}

            <div className="flex items-center gap-2">
              <button
                onClick={toggleLang}
                title={lang === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
              >
                <Globe className="w-5 h-5 text-slate-700" />
                <span className="text-sm font-medium text-slate-700">{lang === 'es' ? 'ES' : 'EN'}</span>
              </button>
              <button
                onClick={toggleDark}
                title={dark ? (lang === 'es' ? 'Modo claro' : 'Light mode') : (lang === 'es' ? 'Modo oscuro' : 'Dark mode')}
                className="p-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors"
              >
                {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
