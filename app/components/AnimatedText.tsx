'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

export default function AnimatedText({
  text,
  speed = 30,
  className = '',
  lang
}: {
  text: string;
  speed?: number;
  className?: string;
  lang?: 'es' | 'en';
}) {
  const [displayed, setDisplayed] = useState('');
  const idx = useRef(0);

  useEffect(() => {
    setDisplayed('');
    idx.current = 0;
    const chars = text.split('');
    let timeout: NodeJS.Timeout;

    const typeNext = () => {
      if (idx.current < chars.length) {
        setDisplayed((prev) => prev + chars[idx.current]);
        idx.current += 1;
        setTimeout(typeNext, speed + Math.random() * 50);
      }
    };

    timeout = setTimeout(typeNext, speed);
    return () => clearTimeout(timeout);
  }, [text, speed, lang]);

  return (
    <span className={className}>
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-6 ml-0.5 bg-blue-600 align-middle"
      />
    </span>
  );
}
