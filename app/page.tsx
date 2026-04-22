'use client';

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tools from './components/Tools';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Education from './components/Education';
import OutsideCode from './components/OutsideCode';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
      <Navbar lang={lang} setLang={setLang} dark={dark} setDark={setDark} t={t} scrollToSection={scrollToSection} />
      <Hero t={t} lang={lang} scrollToSection={scrollToSection} />
      <About t={t} />
      <Tools t={t} lang={lang} />
      <Projects t={t} />
      <Testimonials t={t} />
      <Education t={t} />
      <OutsideCode t={t} />
      <Contact t={t} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
      <Footer />
    </div>
  );
}
