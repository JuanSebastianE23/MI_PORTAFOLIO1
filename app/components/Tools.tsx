'use client';

import { motion } from 'motion/react';
import { Code2, Palette, Zap, Music } from 'lucide-react';
import AnimatedText from './AnimatedText';

export default function Tools({
  t,
  lang,
}: {
  t: (key: string) => string;
  lang: 'es' | 'en';
}) {
  const tools = [
    { Icon: Code2, title: lang === 'es' ? 'Desarrollo Web Full Stack' : 'Full Stack Web Development', desc: 'React, TypeScript, Node.js, Next.js' },
    { Icon: Palette, title: lang === 'es' ? 'Diseño UI/UX' : 'UI/UX Design', desc: 'Figma, Adobe XD, Creative Suite' },
    { Icon: Zap, title: lang === 'es' ? 'Performance & SEO' : 'Performance & SEO', desc: lang === 'es' ? 'Optimización avanzada y SEO técnico' : 'Advanced optimization and technical SEO' },
    { Icon: Music, title: lang === 'es' ? 'Música' : 'Music', desc: lang === 'es' ? 'Guitarra eléctrica, Rock, Blues' : 'Electric Guitar, Rock, Blues' }
  ];

  return (
    <section className="py-32 bg-white section-tools">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            <AnimatedText text={t('herramientas')} speed={40} lang={lang} />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map(({ Icon, title, desc }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(37, 99, 235, 0.2)' }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border border-blue-100 shadow-lg text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{title}</h3>
              <p className="text-slate-600">{desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Tecnologías que manejo</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'TypeScript', 'Node.js', 'Next.js', 'Tailwind CSS', 'MongoDB', 'PostgreSQL', 'Git', 'Docker', 'AWS'].map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg font-medium cursor-pointer"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
