'use client';

import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export default function Testimonials({
  t,
}: {
  t: (key: string) => string;
}) {
  return (
    <section id="testimonios" className="py-32 bg-white section-testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            {t('testimoniosTitulo')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: t('nombre1'), role: t('rol1'), text: t('testimonio1') },
            { name: t('nombre2'), role: t('rol2'), text: t('testimonio2') },
            { name: t('nombre3'), role: t('rol3'), text: t('testimonio3') }
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
  );
}
