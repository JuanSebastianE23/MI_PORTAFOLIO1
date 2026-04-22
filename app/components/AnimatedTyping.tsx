'use client';

export default function AnimatedTyping({
  text,
  charDelay = 80,
  pause = 2200,
  loop = true,
  className = ''
}: {
  text: string;
  charDelay?: number;
  pause?: number;
  loop?: boolean;
  className?: string;
}) {
  return (
    <span className={`typing-anim ${className}`}>
      {text.split('').map((char, i) => (
        <span key={i} style={{ animationDelay: `${i * 0.05}s` }} className="char-anim">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}
