'use client';

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact({
  t,
  formData,
  setFormData,
  handleSubmit,
}: {
  t: (key: string) => string;
  formData: { name: string; email: string; message: string };
  setFormData: (data: { name: string; email: string; message: string }) => void;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <section id="contacto" className="py-32 bg-white section-contact">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-blue-600 mb-4">
            <AnimatedText text={t('contactoTitulo')} speed={40} lang={lang} />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {[
            { Icon: Mail, label: t('emailLabel'), value: 'sebastianjuan514@gmail.com', href: 'mailto:sebastianjuan514@gmail.com' },
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
  );
}
