'use client';

import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Code2, Palette, Zap, Music, ArrowRight, Star, MapPin, Phone, Send, Moon, Sun, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [dark, setDark] = useState<boolean>(false);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDark(true);
    const savedLang = localStorage.getItem('lang');
    if (savedLang === 'en') setLang('en');
  }, []);

  const texts: Record<string, Record<string, string>> = {
    es: {
      inicio: 'inicio',
      acerca: 'acerca',
      proyectos: 'proyectos',
      testimonios: 'testimonios',
      estudios: 'estudios',
      contacto: 'contacto',
      hola: 'Hola, soy',
      role: 'Desarrollador Full Stack & UI/UX Designer',
      subtitle: 'Creando experiencias digitales increíbles con código limpio y pasión',
      descargarCV: 'Descargar CV',
      contactar: 'Contactarme',
      acercaTitulo: 'Acerca de mí',
      herramientas: 'HERRAMIENTAS Y TECNOLOGÍAS',
      proyectosTitulo: 'Mis Proyectos',
      testimoniosTitulo: 'Testimonios',
      estudiosTitulo: 'Estudios',
      contactoTitulo: 'CONTACTO',
      contactame: 'CONTÁCTAME',
      nombre: 'Nombre',
      email: 'Email',
      mensaje: 'Mensaje',
      enviarMensaje: 'Enviar Mensaje',
      emailLabel: 'Email',
      telefonoLabel: 'Teléfono',
      ubicacionLabel: 'Ubicación',
      disponible: '¿Listo para empezar? Estoy disponible para proyectos freelance',
      tituloAcerca: 'Apasionado por la tecnología y la música',
      descripcionAcerca: 'Combino creatividad musical con soluciones tecnológicas.',
      parrafoAcerca: 'Me apasiona la tecnología y la música. Combino mi creatividad musical con el desarrollo de soluciones tecnológicas innovadoras.',
      bullets1: 'Desarrollo web full stack: React, TypeScript, Node.js, Next.js',
      verProyectos: 'Ver todos los proyectos',
      contactarme: 'Enviar mensaje',
      livePerformance: 'Live performance • Electric Guitar',
      tituloProyecto: 'Análisis de Contratos Legales con Inteligencia Artificial',
      descripcionProyecto: 'Sistema inteligente para análisis automatizado de contratos legales utilizando procesamiento de lenguaje natural (NLP) y machine learning',
      codigo: 'Código',
      demo: 'Demo',
      fueraDelCodigoTitulo: 'Fuera del Código',
      fueraDelCodigoTexto: 'Apasionado por la música: guitarrista y bajista en géneros como Rock, Metal, Blues, entre otros',
      experienciaTitulo2: 'Ingeniería de Software',
      experienciaInstitucion: 'Universidad Cooperativa de Colombia',
      experienciaFecha: '2024 - Presente',
      experienciaDescripcion: 'Formación en desarrollo de software y tecnologías modernas, enfocada en crear soluciones innovadoras y de alta calidad.',
      experienciaTitulo2b: 'Certificado en Procesos para Software de Calidad, Desarrollo de Software',
      experienciaInstitucion2: 'Servicio Nacional de Aprendizaje (SENA) - Palmira, Valle del Cauca',
      experienciaFecha2: '01/2023 - 08/2023',
       testimonio1: 'Juan es un desarrollador excepcional. Su atención al detalle y capacidad para resolver problemas complejos realmente es impresionante.',
       testimonio2: 'Trabajar con Juan fue una experiencia fantástica. Su código limpio, bien documentado y eficiente facilitó todo el proceso de desarrollo.',
       testimonio3: 'La creatividad de Juan y su enfoque innovador transformaron completamente nuestra visión en un producto excepcional.',
       nombre1: 'Richard Enríquez',
       nombre2: 'David Erazo',
       nombre3: 'Sonia Guerrero',
       rol1: 'Estudiante de Ingeniería de Sistemas',
       rol2: 'Desarrollador de Software',
       rol3: 'Estudiante de Ingeniería de Sistemas'
    },
    en: {
      inicio: 'home',
      acerca: 'about',
      proyectos: 'projects',
      testimonios: 'testimonials',
      estudios: 'Education',
      contacto: 'contact',
      hola: 'Hi, I am',
      role: 'Full Stack Developer & UI/UX Designer',
      subtitle: 'Building amazing digital experiences with clean code and passion',
      descargarCV: 'Download CV',
      contactar: 'Get in Touch',
      acercaTitulo: 'About Me',
      herramientas: 'TOOLS & TECHNOLOGIES',
      proyectosTitulo: 'My Projects',
      testimoniosTitulo: 'Testimonials',
      estudiosTitulo: 'Education',
      contactoTitulo: 'CONTACT',
      contactame: 'GET IN TOUCH',
      nombre: 'Name',
      email: 'Email',
      mensaje: 'Message',
      enviarMensaje: 'Send Message',
      emailLabel: 'Email',
      telefonoLabel: 'Phone',
      ubicacionLabel: 'Location',
      disponible: 'Ready to start? I am available for freelance projects',
      tituloAcerca: 'Passionate about technology and music',
      descripcionAcerca: 'I combine musical creativity with technological solutions.',
      parrafoAcerca: 'I am passionate about technology and music. I combine my musical creativity with the development of innovative technological solutions.',
      bullets1: 'Full stack web development: React, TypeScript, Node.js, Next.js',
      verProyectos: 'View all projects',
      contactarme: 'Send message',
      livePerformance: 'Live performance • Electric Guitar',
      tituloProyecto: 'Legal Contracts Analysis with AI',
      descripcionProyecto: 'Intelligent system for automated analysis of legal contracts using natural language processing and machine learning',
      codigo: 'Code',
      demo: 'Demo',
      fueraDelCodigoTitulo: 'Outside the Code',
      fueraDelCodigoTexto: 'Passionate about music: guitarist and bassist in genres like Rock, Metal, Blues, among others',
       experienciaTitulo2: 'Software Engineering',
       experienciaInstitucion: 'Universidad Cooperativa de Colombia',
       experienciaFecha: '2024 - Present',
       experienciaDescripcion: 'Training in software development and modern technologies, focused on creating innovative and high-quality solutions.',
      experienciaTitulo2b: 'Certificate in Software Quality Processes, Software Development',
      experienciaInstitucion2: 'National Learning Service (SENA) - Palmira, Valle del Cauca',
      experienciaFecha2: '01/2023 - 08/2023',
       testimonio1: 'Juan is an exceptional developer. His attention to detail and ability to solve complex problems is impressive.',
       testimonio2: 'Working with Juan was a fantastic experience. His clean and well-documented code facilitated the entire development process.',
       testimonio3: "Juan's creativity and innovative approach transformed our vision into an exceptional product.",
       nombre1: 'Richard Enríquez',
       nombre2: 'David Erazo',
       nombre3: 'Sonia Guerrero',
       rol1: 'Estudiante de Ingeniería de Sistemas',
       rol2: 'Desarrollador de Software',
       rol3: 'Estudiante de Ingeniería de Sistemas'
    }
  };

  const t = (key: string) => texts[lang][key] ?? key;

  function applyDark(value: boolean) {
    try {
      if (value) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    } catch {}
  }

  useEffect(() => {
    applyDark(dark);
  }, [dark]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('section').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  function toggleDark() {
    setDark((v) => !v);
  }

  function toggleLang() {
    setLang((l) => {
      const nl = l === 'es' ? 'en' : 'es';
      try { localStorage.setItem('lang', nl); } catch {}
      return nl;
    });
  }

const AnimatedTyping = ({ text, charDelay = 80, pause = 2200, loop = true, className = '' }: { text: string; charDelay?: number; pause?: number; loop?: boolean; className?: string }) => {
    return (
      <span className={`typing-anim ${className}`}>
        {text.split('').map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.05}s` }} className="char-anim">{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </span>
    );
  };

  const AnimatedText = ({ text, speed = 30, className = '' }: { text: string; speed?: number; className?: string }) => {
    return (
      <span className={`text-anim ${className}`}>
        {text.split('').map((char, i) => (
          <span key={i} style={{ animationDelay: `${i * 0.03}s` }} className="char-anim">{char === ' ' ? '\u00A0' : char}</span>
        ))}
      </span>
    );
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'es' ? '¡Mensaje enviado con éxito! Gracias por contactarme.' : 'Message sent successfully! Thank you for contacting me.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="app-root min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:bg-gradient-to-br dark:from-slate-900 dark:to-slate-800">
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="brand flex items-center gap-3 text-blue-600 font-bold"
            >
              <img
src="/1000247272-removebg-preview(1).png"
                alt="Avatar Juan Sebastian"
                className="w-8 h-8 rounded-full object-cover shadow-sm"
              />
               <div className="flex flex-col leading-tight">
                 <div className="brand-name text-blue-600 text-base md:text-lg font-bold">
                   <AnimatedText text={'Juan Sebastian Estacio'} speed={30} className="brand-name" />
                 </div>
                 <span className="text-xs text-slate-600 dark:text-white"><AnimatedText text={'Full Stack Developer'} speed={60} /></span>
               </div>
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
               {['inicio', 'acerca', 'proyectos', 'testimonios', 'estudios', 'contacto'].map((item) => (
              <motion.button
                key={item}
                onClick={() => scrollToSection( item === 'acerca' ? 'acerca' : item === 'experiencia' ? 'estudios' : item)}
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
                   <span className="text-sm font-medium text-slate-700">
                     {lang === 'es' ? 'ES' : 'EN'}
                   </span>
                 </button>
                <button
                  onClick={toggleDark}
                  title={dark ? (lang === 'es' ? 'Modo claro' : 'Light mode') : (lang === 'es' ? 'Modo oscuro' : 'Dark mode')}
                  className="p-2 rounded-md hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors flex items-center"
                >
                  {dark ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

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
                <AnimatedText text={t('hola')} speed={60} />
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="text-4xl sm:text-5xl font-bold text-slate-800 mb-4"
              >
                <AnimatedText text={t('role')} speed={40} />
              </motion.p>
               <motion.p
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.9 }}
                 className="text-lg text-slate-600 mb-8 leading-relaxed"
               >
                 <AnimatedText text={t('subtitle')} speed={30} />
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
                  whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(14, 165, 233, 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('contacto')}
                  className="w-full sm:w-auto px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                >
                  {t('contactar')}
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="flex gap-6 flex-wrap"
              >
                {[
                  { Icon: Github, href: 'https://github.com/JuanSebastianE23' },
                  { Icon: Linkedin, href: 'https://www.linkedin.com/in/juan-sebastian-estacio-enriquez-b8b0033ba/' },
                  { Icon: Mail, href: 'mailto:juan.estacioenri@Campusucc.edu.co' }
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <Icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative z-10"
                >
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-30"></div>
                  <div className="w-full max-w-[320px] sm:max-w-[420px] mx-auto md:mx-0">
                    <div className="rounded-3xl p-1 bg-transparent border-4 border-black/30 hover:border-black/40 transition-colors">
                      <img
src="/1000247272-removebg-preview(1).png"
                        alt="Juan Sebastian Estacio"
                        loading="lazy"
                        className="rounded-3xl shadow-2xl w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="acerca" className="py-32 bg-white section-about">
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
               <div className="about-card p-8 md:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/60 backdrop-blur-sm border border-blue-100 dark:border-white/6 shadow-2xl">
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

      <section className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50 section-tools">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              <AnimatedText text={t('herramientas')} speed={40} />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { Icon: Code2, title: lang === 'es' ? 'Desarrollo Web Full Stack' : 'Full Stack Web Development', desc: 'React, TypeScript, Node.js, Next.js' },
              { Icon: Palette, title: lang === 'es' ? 'Diseño UI/UX' : 'UI/UX Design', desc: 'Figma, Adobe XD, Creative Suite' },
              { Icon: Zap, title: lang === 'es' ? 'Performance & SEO' : 'Performance & SEO', desc: lang === 'es' ? 'Optimización avanzada y SEO técnico' : 'Advanced optimization and technical SEO' },
              { Icon: Music, title: lang === 'es' ? 'Música' : 'Music', desc: lang === 'es' ? 'Guitarra eléctrica, Rock, Blues' : 'Electric Guitar, Rock, Blues' }
            ].map(({ Icon, title, desc }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(37, 99, 235, 0.2)' }}
                className="p-6 bg-white rounded-xl border border-blue-100 shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                <p className="text-sm text-slate-600">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS'].map((tech, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold shadow-lg"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="proyectos" className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50 section-projects">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              <AnimatedText text={t('proyectosTitulo')} speed={40} />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -10 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-blue-100 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-80 md:h-auto overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src="https://images.unsplash.com/photo-1726831662518-c48d983f9b86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                  alt="Análisis de Contratos Legales"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-slate-800 mb-4">
                  {t('tituloProyecto')}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {t('descripcionProyecto')}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {lang === 'es' 
                    ? ['Python', 'IA', 'NLP', 'Machine Learning'].map((tag, index) => (
                        <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-sm font-semibold">{tag}</span>
                      ))
                    : ['Python', 'AI', 'NLP', 'Machine Learning'].map((tag, index) => (
                        <span key={index} className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 rounded-lg text-sm font-semibold">{tag}</span>
                      ))
                  }
                </div>
                 <div className="flex gap-4">
                   <motion.a
                     href="https://github.com/AndresMira21/analyzer-contract-backend"
                     target="_blank"
                     rel="noopener noreferrer"
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg flex items-center gap-2"
                   >
                     <Github className="w-5 h-5" />
                     {t('codigo')}
                   </motion.a>
                   <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     onClick={() => window.open('https://analyzer-contract-frontend-kohl.vercel.app/', '_blank')}
                     className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                   >
                     {t('demo')}
                   </motion.button>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="testimonios" className="py-32 bg-white section-testimonials">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              <AnimatedText text={t('testimoniosTitulo')} speed={40} />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: t('nombre1'),
                role: t('rol1'),
                text: t('testimonio1')
              },
              {
                name: t('nombre2'),
                role: t('rol2'),
                text: t('testimonio2')
              },
              {
                name: t('nombre3'),
                role: t('rol3'),
                text: t('testimonio3')
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(37, 99, 235, 0.2)' }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 shadow-lg"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                 <p className="text-slate-700 mb-6 leading-relaxed italic">
                   "{testimonial.text}"
                 </p>
                 <div className="text-center">
                   <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                   <p className="text-sm text-blue-600">{testimonial.role}</p>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

       <section id="estudios" className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50 section-experience">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              <AnimatedText text={t('estudiosTitulo')} speed={40} />
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
                      <h3 className="text-2xl font-bold text-slate-800 mb-2">
                        {t('experienciaTitulo2b')}
                      </h3>
                      <div className="flex items-center gap-2">
                        <p className="text-lg text-blue-600 font-semibold">
                          {t('experienciaInstitucion2')}
                        </p>
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

       <section id="fuera-del-codigo" className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
         <div className="max-w-7xl mx-auto px-6">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-16"
           >
             <h2 className="text-5xl font-bold text-blue-600 mb-4">
               <AnimatedText text={t('fueraDelCodigoTitulo')} speed={40} />
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

       <section id="contacto" className="py-32 bg-white section-contact">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              <AnimatedText text={t('contactoTitulo')} speed={40} />
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
               { Icon: Mail, href: 'mailto:sebastianjuan514@gmail.com', label: t('emailLabel'), value: 'sebastianjuan514@gmail.com' },
               { Icon: Phone, label: t('telefonoLabel'), value: '+57 300 123 4567', href: 'tel:+573001234567' },
               { Icon: MapPin, label: t('ubicacionLabel'), value: 'San Juan de Pasto, Nariño, Colombia', href: null }
            ].map(({ Icon, label, value, href }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(37, 99, 235, 0.2)' }}
                className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 shadow-lg text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-sm text-blue-600 font-semibold mb-2">{label}</p>
                {href ? (
                  <a href={href} className="text-slate-800 font-medium hover:text-blue-600 transition-colors break-words">
                    {value}
                  </a>
                ) : (
                  <p className="text-slate-800 font-medium">{value}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-blue-600 mb-4">
              {t('contactame')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto">
              {t('disponible')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-2xl border border-blue-100 space-y-6">
              <div>
                <label className="block text-slate-700 font-semibold mb-2">{t('nombre')}</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">{t('email')}</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-2">{t('mensaje')}</label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold shadow-lg flex items-center justify-center gap-2"
              >
                {t('enviarMensaje')}
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
        </section>

       <footer className="bg-gradient-to-r from-blue-900 to-cyan-900 text-white py-12">
         <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col items-center justify-center">
             <p className="text-xl font-semibold">© 2026 Juan Sebastian Estacio - Todos los derechos reservados</p>
           </div>
         </div>
       </footer>
    </div>
  );
}