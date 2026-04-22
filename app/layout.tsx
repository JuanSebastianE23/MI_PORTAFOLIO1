import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juan Sebastian Estacio - Portfolio',
  description: 'Full Stack Developer - Creando experiencias digitales increíbles con pasión y código limpio',
  keywords: ['desarrollador full stack', 'react', 'typescript', 'node.js', 'portfolio', 'web development'],
  authors: [{ name: 'Juan Sebastian Estacio' }],
  openGraph: {
    title: 'Juan Sebastian Estacio - Portfolio',
    description: 'Full Stack Developer apasionado por crear experiencias digitales increíbles',
    type: 'website',
    locale: 'es_ES',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  )
}