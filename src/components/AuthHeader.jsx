import { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import UnivalleLogo from './UnivalleLogo.jsx';
import Icon from './Icon.jsx';
import { user } from '../data/mockData.js';

export default function AuthHeader() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkCls = ({ isActive }) =>
    `relative px-3 py-2 rounded-full text-[15px] font-semibold transition ${
      isActive ? 'bg-white/15 text-white' : 'text-white/85 hover:text-white hover:bg-white/10'
    }`;

  return (
    <header className="sticky top-0 z-40" role="banner">
      <a href="#contenido" className="skip-link">Saltar al contenido principal</a>

      <div className="bg-gradient-to-r from-univalle-red-deep via-univalle-red to-univalle-red-dark text-white shadow-sm">
        <div className="container-page h-16 flex items-center justify-between gap-6">
          <div className="flex items-center gap-8">
            <Link to="/dashboard" aria-label="Ir a tu área personal">
              <UnivalleLogo variant="light" />
            </Link>
            <nav aria-label="Menú principal" className="hidden md:flex items-center gap-1">
              <NavLink to="/dashboard" className={linkCls}>Inicio</NavLink>
              <NavLink to="/mis-materias" className={linkCls}>Mis materias</NavLink>
              <NavLink to="/perfil" className={linkCls}>Mi progreso</NavLink>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            {/* Buscador rápido */}
            <div className="hidden xl:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1.5 w-72 focus-within:bg-white/20 transition">
              <Icon name="search" className="w-4 h-4 text-white/80" />
              <input
                type="search"
                placeholder="Buscar materia, tarea o compañero…"
                className="bg-transparent outline-none text-sm placeholder:text-white/60 text-white flex-1"
                aria-label="Buscar en el Campus Virtual"
              />
              <kbd className="text-[10px] bg-white/15 rounded px-1.5 py-0.5">⌘K</kbd>
            </div>

            <button
              type="button"
              className="relative p-2 rounded-full hover:bg-white/15 transition"
              aria-label="Notificaciones: 14 sin leer"
              title="14 notificaciones nuevas"
            >
              <Icon name="bell" className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-univalle-gold text-univalle-ink text-[10px] font-bold rounded-full px-1.5 leading-4">14</span>
            </button>
            <button
              type="button"
              className="relative p-2 rounded-full hover:bg-white/15 transition"
              aria-label="Mensajes: 2 sin leer"
              title="2 mensajes nuevos"
            >
              <Icon name="message" className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-univalle-gold text-univalle-ink text-[10px] font-bold rounded-full px-1.5 leading-4">2</span>
            </button>

            <div className="relative pl-2 ml-1 border-l border-white/20">
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="flex items-center gap-2 pr-2 pl-1 py-1 rounded-full hover:bg-white/15 transition"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
                aria-label={`Sesión de ${user.shortName}. Abrir menú de cuenta`}
              >
                <img
                  src={user.avatar}
                  alt=""
                  className="w-9 h-9 rounded-full ring-2 ring-white/40"
                />
                <span className="hidden md:block text-sm font-semibold">{user.shortName}</span>
                <Icon name="chevronDown" className="w-4 h-4" />
              </button>

              {menuOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-12 w-72 bg-white text-univalle-ink rounded-2xl shadow-card-hover border border-univalle-line overflow-hidden animate-pop-in"
                >
                  <div className="p-4 bg-univalle-cream flex items-center gap-3">
                    <img src={user.avatar} alt="" className="w-12 h-12 rounded-full ring-2 ring-white" />
                    <div>
                      <p className="font-bold leading-tight">{user.displayName}</p>
                      <p className="text-xs text-univalle-muted">{user.studentCode}</p>
                    </div>
                  </div>
                  <ul className="py-1 text-sm">
                    {[
                      { label: 'Ver mi perfil', icon: 'user', to: '/perfil' },
                      { label: 'Actualizar mis datos', icon: 'edit', to: '/perfil' },
                      { label: 'Notificaciones', icon: 'bell', to: '/dashboard' },
                      { label: 'Ayuda y soporte', icon: 'helpCircle', to: '/' },
                    ].map((it) => (
                      <li key={it.label}>
                        <Link
                          to={it.to}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-univalle-surface"
                        >
                          <Icon name={it.icon} className="w-4 h-4 text-univalle-muted" />
                          <span>{it.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-univalle-line">
                    <button
                      type="button"
                      onClick={() => { setMenuOpen(false); navigate('/login', { state: { expired: false } }); }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-univalle-surface text-univalle-red-deep font-semibold text-sm"
                    >
                      <Icon name="logout" className="w-4 h-4" />
                      Cerrar sesión con seguridad
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
