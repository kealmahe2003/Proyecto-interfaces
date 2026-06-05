// Portadas ilustradas para tarjetas de curso.
// Cada materia tiene un look distintivo (color + patrón + ícono temático).
// Esto reemplaza las "imágenes decorativas vacías" señaladas en la falla F1.

import Icon from './Icon.jsx';

const STYLES = {
  'taller-escritura': {
    bg: 'linear-gradient(135deg,#FFF7E6 0%,#F5DDB0 100%)',
    accent: '#A66A1E',
    pattern: 'lines',
    icon: 'pen',
    tag: 'Comunicación',
  },
  'gestion-proyectos': {
    bg: 'linear-gradient(135deg,#EDE7F9 0%,#C8B9F1 100%)',
    accent: '#5A39B5',
    pattern: 'dots',
    icon: 'layers',
    tag: 'Gestión',
  },
  'diseno-contenido': {
    bg: 'linear-gradient(135deg,#E3F0FF 0%,#A4C7F8 100%)',
    accent: '#10417A',
    pattern: 'grid',
    icon: 'sparkle',
    tag: 'UX / Contenido',
  },
  'proyecto-integrador': {
    bg: 'linear-gradient(135deg,#FFE6EE 0%,#F4A6C0 100%)',
    accent: '#A0285A',
    pattern: 'waves',
    icon: 'flag',
    tag: 'Integrador',
  },
  'innovacion': {
    bg: 'linear-gradient(135deg,#FCE4F4 0%,#E89CC9 100%)',
    accent: '#9B2E76',
    pattern: 'sparkles',
    icon: 'bolt',
    tag: 'Innovación',
  },
  'impactos-ambientales': {
    bg: 'linear-gradient(135deg,#E4F4E2 0%,#A6D9A1 100%)',
    accent: '#2B6B33',
    pattern: 'leaves',
    icon: 'leaf',
    tag: 'Ambiental',
  },
};

const FALLBACK = {
  bg: 'linear-gradient(135deg,#F1EEEA 0%,#D6D1CA 100%)',
  accent: '#5C6473',
  pattern: 'dots',
  icon: 'book',
  tag: 'Materia',
};

function Pattern({ kind, color }) {
  const stroke = color + '55';
  const fill = color + '33';
  if (kind === 'dots') {
    return (
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <pattern id="p-dots" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.2" fill={fill} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-dots)" />
      </svg>
    );
  }
  if (kind === 'grid') {
    return (
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <pattern id="p-grid" width="18" height="18" patternUnits="userSpaceOnUse">
            <path d="M18 0H0v18" stroke={stroke} strokeWidth="0.6" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-grid)" />
      </svg>
    );
  }
  if (kind === 'lines') {
    return (
      <svg className="absolute inset-0 w-full h-full" aria-hidden="true">
        <defs>
          <pattern id="p-lines" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="10" stroke={stroke} strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#p-lines)" />
      </svg>
    );
  }
  if (kind === 'waves') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 70 Q 40 50 80 70 T 160 70 T 240 70 V100 H0Z" fill={fill} />
        <path d="M0 80 Q 40 60 80 80 T 160 80 T 240 80 V100 H0Z" fill={fill} opacity="0.7" />
      </svg>
    );
  }
  if (kind === 'sparkles') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" aria-hidden="true">
        {[...Array(10)].map((_, i) => {
          const x = (i * 23) % 200;
          const y = (i * 37) % 120;
          return <circle key={i} cx={x} cy={y} r={Math.random() * 2 + 1} fill={fill} />;
        })}
      </svg>
    );
  }
  if (kind === 'leaves') {
    return (
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 120" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <path
            key={i}
            d={`M ${20 + i * 35} 110 Q ${30 + i * 35} 60 ${50 + i * 35} 60 Q ${30 + i * 35} 80 ${20 + i * 35} 110 Z`}
            fill={fill}
          />
        ))}
      </svg>
    );
  }
  return null;
}

export default function CourseCover({ courseId, className = 'h-32', children }) {
  const s = STYLES[courseId] || FALLBACK;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: s.bg }}
      role="img"
    >
      <Pattern kind={s.pattern} color={s.accent} />
      {/* círculo grande decorativo */}
      <div
        className="absolute -right-6 -top-6 w-24 h-24 rounded-full opacity-25"
        style={{ background: s.accent }}
        aria-hidden="true"
      />
      <div
        className="absolute right-10 bottom-2 w-10 h-10 rounded-full opacity-30"
        style={{ background: s.accent }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 p-3 flex flex-col justify-between">
        <span
          className="self-start text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full text-white"
          style={{ background: s.accent }}
        >
          {s.tag}
        </span>
        <div
          className="self-end w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-soft"
          style={{ background: s.accent }}
        >
          <Icon name={s.icon} className="w-5 h-5" />
        </div>
      </div>
      {children}
    </div>
  );
}
