// Logo institucional de la Universidad del Valle.
// Usa el escudo oficial (univalle.png en /public) sobre un fondo blanco
// que destaca al colocarlo sobre la barra roja del header.

export default function UnivalleLogo({ variant = 'light', size = 'md' }) {
  const text = variant === 'light' ? 'text-white' : 'text-univalle-red-deep';
  const dims = size === 'lg' ? { box: 'w-12 h-12', tile: 'p-1' } : { box: 'w-10 h-10', tile: 'p-1' };

  return (
    <div className="flex items-center gap-3">
      <div className={`${dims.box} ${dims.tile} bg-white rounded-md shadow-soft flex items-center justify-center flex-shrink-0`}>
        <img
          src="/univalle.png"
          alt="Escudo Universidad del Valle"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      <div className={`${text} leading-tight`}>
        <p className={`${size === 'lg' ? 'text-xl' : 'text-[17px]'} font-extrabold tracking-tight`}>
          Universidad <span className="font-light">del Valle</span>
        </p>
      </div>
    </div>
  );
}
