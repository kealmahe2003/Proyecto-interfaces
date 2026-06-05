import { Link, useLocation } from 'react-router-dom';
import UnivalleLogo from './UnivalleLogo.jsx';
import Icon from './Icon.jsx';

export default function PublicHeader() {
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-40" role="banner">
      <a href="#contenido" className="skip-link">Saltar al contenido principal</a>

      {/* Top bar: contacto rápido */}
      <div className="hidden md:block bg-univalle-ink text-white/90 text-xs">
        <div className="container-page h-9 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="phone" className="w-3.5 h-3.5" /> 602 321 2100 · ext. 2549
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="mail" className="w-3.5 h-3.5" /> campusvirtual@correounivalle.edu.co
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="#bienestar" className="hover:text-white">Bienestar</a>
            <a href="#biblioteca" className="hover:text-white">Biblioteca</a>
            <span className="text-white/40">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="globe" className="w-3.5 h-3.5" /> Español
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="bg-univalle-red text-white shadow-sm">
        <div className="container-page h-16 flex items-center justify-between gap-6">
          <Link to="/" aria-label="Ir al inicio del Campus Virtual">
            <UnivalleLogo variant="light" />
          </Link>

          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-1 text-[15px]">
            {[
              ['Inicio', '/'],
              ['Cursos abiertos', '#cursos'],
              ['Ayudas', '#ayudas'],
              ['Recursos', '#recursos'],
            ].map(([label, href]) => (
              <a key={label} href={href} className="px-3 py-2 rounded-full font-semibold/none hover:bg-white/10 transition">
                {label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className={`inline-flex items-center gap-2 rounded-full bg-white text-univalle-red-deep font-semibold px-5 py-2 hover:bg-univalle-cream transition shadow-sm ${
                loc.pathname === '/login' ? 'ring-2 ring-white/60' : ''
              }`}
            >
              <Icon name="lock" className="w-4 h-4" />
              Ingresar al Campus
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
