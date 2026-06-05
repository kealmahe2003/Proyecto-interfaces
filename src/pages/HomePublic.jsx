import { Link } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader.jsx';
import Footer from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';

// Pantalla 1 — Home Público (versión pulida)
// Correcciones aplicadas:
//  - F4 (WCAG 1.4.3): Todos los bloques informativos sobre fondo claro con
//    encabezados en rojo institucional accesible (>=4.5:1).
//  - F5 (H2): Encabezados y descripciones en lenguaje natural.
//  - Íconos con aria-hidden, regiones con landmarks y skip-link.

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-3xl md:text-4xl font-extrabold text-univalle-ink font-display">{value}</p>
      <p className="text-xs uppercase tracking-wider text-univalle-muted mt-1">{label}</p>
    </div>
  );
}

function Mockup() {
  // Pequeño mockup decorativo que evoca la app/plataforma — sin fotos externas
  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-to-br from-univalle-red-100 via-univalle-cream to-univalle-gold-soft rounded-[2.5rem] blur-2xl opacity-70" aria-hidden="true" />
      <div className="relative bg-white rounded-[2rem] shadow-card-hover border border-univalle-line p-5 rotate-[-1.5deg]">
        <div className="flex items-center justify-between text-xs text-univalle-muted">
          <span className="font-mono">campusvirtual.univalle.edu.co</span>
          <span className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-univalle-line-strong"/>
            <span className="w-2 h-2 rounded-full bg-univalle-line-strong"/>
            <span className="w-2 h-2 rounded-full bg-univalle-line-strong"/>
          </span>
        </div>
        <div className="mt-3 rounded-xl bg-gradient-to-br from-univalle-red to-univalle-red-deep text-white p-4">
          <p className="text-xs uppercase tracking-wider opacity-80">Hola, Jersson</p>
          <p className="font-bold mt-0.5">Tienes 3 entregas esta semana</p>
          <div className="mt-3 flex gap-2 text-[10px]">
            <span className="bg-white/20 rounded-full px-2 py-0.5">Hoy 11:59 p.m.</span>
            <span className="bg-white/20 rounded-full px-2 py-0.5">Mañana</span>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {[
            { t: 'Diseño de Contenido', s: 'Entrega · hoy', c: 'from-sky-200 to-sky-100', a: '#10417A' },
            { t: 'Gestión de Proyectos', s: 'Laboratorio · vie', c: 'from-violet-200 to-violet-100', a: '#5A39B5' },
            { t: 'Cálculo Multivariable', s: 'Quiz · lun', c: 'from-rose-200 to-rose-100', a: '#A0285A' },
            { t: 'Impactos Ambientales', s: 'Lectura · mié', c: 'from-emerald-200 to-emerald-100', a: '#2B6B33' },
          ].map((x) => (
            <div key={x.t} className={`rounded-lg p-2 bg-gradient-to-br ${x.c} border border-white`}>
              <p className="text-[11px] font-bold text-univalle-ink leading-tight">{x.t}</p>
              <p className="text-[10px] text-univalle-ink-soft mt-0.5">{x.s}</p>
            </div>
          ))}
        </div>
      </div>

      {/* tarjeta flotante decorativa */}
      <div className="hidden md:flex items-center gap-3 absolute -bottom-8 -left-6 bg-white rounded-2xl shadow-card-hover border border-univalle-line px-4 py-3 animate-float">
        <span className="bg-state-success-bg text-state-success-text w-9 h-9 rounded-full flex items-center justify-center"><Icon name="check"/></span>
        <div>
          <p className="text-xs text-univalle-muted">Entrega recibida</p>
          <p className="text-sm font-bold text-univalle-ink leading-tight">Laboratorio 4 · Gestión de Proyectos</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-3 absolute -top-6 -right-6 bg-white rounded-2xl shadow-card-hover border border-univalle-line px-4 py-3">
        <span className="bg-state-info-bg text-state-info-text w-9 h-9 rounded-full flex items-center justify-center"><Icon name="award"/></span>
        <div>
          <p className="text-xs text-univalle-muted">Nueva calificación</p>
          <p className="text-sm font-bold text-univalle-ink leading-tight">Parcial 1 · 4.6</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePublic() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PublicHeader />

      <main id="contenido" tabIndex={-1} className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden bg-univalle-cream">
          <div className="absolute inset-0 bg-grid-soft bg-grid-soft opacity-60 gradient-mask-b" aria-hidden="true" />
          <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-univalle-red-100 blur-3xl opacity-60" aria-hidden="true" />
          <div className="absolute -bottom-40 -left-40 w-[460px] h-[460px] rounded-full bg-univalle-gold-soft blur-3xl opacity-70" aria-hidden="true" />

          <div className="container-page relative grid lg:grid-cols-12 gap-12 items-center py-16 lg:py-24">
            <div className="lg:col-span-6 animate-slide-up">
              <span className="eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-univalle-red"/>
                Plataforma oficial Univalle
              </span>
              <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold text-univalle-ink leading-[1.05] text-balance font-display">
                Tu vida académica,<br/>
                <span className="bg-gradient-to-r from-univalle-red to-univalle-red-deep bg-clip-text text-transparent">a un solo clic.</span>
              </h1>
              <p className="mt-6 text-lg text-univalle-ink-soft leading-relaxed max-w-xl text-pretty">
                Entra al Campus Virtual para consultar tus materias, subir tus
                entregas y revisar tus notas. Más de <strong className="text-univalle-ink">30.000 estudiantes</strong> lo
                usan cada semana.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/login" className="btn-primary text-base px-6 py-3">
                  Ingresar al Campus
                  <Icon name="arrowRight" className="w-4 h-4" />
                </Link>
                <a href="#ayudas" className="btn-secondary text-base px-5 py-3">
                  <Icon name="bookOpen" className="w-4 h-4" />
                  Ver guías rápidas
                </a>
              </div>
              <p className="mt-4 text-sm text-univalle-muted">
                ¿Es tu primera vez? Usa tu código de estudiante y la contraseña que recibiste por correo institucional.
              </p>

              {/* Trust badges */}
              <div className="mt-10 flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm text-univalle-ink-soft">
                  <Icon name="shield" className="w-4 h-4 text-state-success-text"/>
                  Inicio de sesión cifrado
                </div>
                <div className="flex items-center gap-2 text-sm text-univalle-ink-soft">
                  <Icon name="check" className="w-4 h-4 text-state-success-text"/>
                  Cumple WCAG 2.1 AA
                </div>
                <div className="flex items-center gap-2 text-sm text-univalle-ink-soft">
                  <Icon name="graduation" className="w-4 h-4 text-univalle-red-deep"/>
                  Plataforma oficial Univalle
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 animate-pop-in">
              <Mockup />
            </div>
          </div>

          {/* Strip de stats */}
          <div className="relative border-t border-univalle-line bg-white/70 backdrop-blur">
            <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 py-8">
              <Stat value="30k+" label="Estudiantes activos" />
              <Stat value="900+" label="Cursos abiertos" />
              <Stat value="24/7" label="Acceso a recursos" />
              <Stat value="AA"  label="Accesibilidad WCAG" />
            </div>
          </div>
        </section>

        {/* AYUDAS — Falla 4 corregida (alto contraste, sobre blanco) */}
        <section id="ayudas" className="container-page py-20" aria-labelledby="ayudas-title">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div className="max-w-2xl">
              <span className="eyebrow">Te acompañamos</span>
              <h2 id="ayudas-title" className="mt-3 text-3xl md:text-4xl font-extrabold text-univalle-ink font-display text-balance">
                Tres lugares en los que apoyarte
              </h2>
              <p className="mt-3 text-univalle-ink-soft text-pretty">
                Soporte humano, atajos para resolver lo cotidiano y recursos para reforzar tus estudios.
              </p>
            </div>
            <a href="#mas" className="btn-ghost">Ver todo el centro de ayuda <Icon name="arrowRight" className="w-4 h-4"/></a>
          </div>

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            {/* Atención y soporte */}
            <article className="card p-6 group">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-univalle-red text-white flex items-center justify-center shadow-pop">
                  <Icon name="mail" />
                </div>
                <span className="chip"><Icon name="clock" className="w-3 h-3"/> 1 día hábil</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-univalle-ink">Atención y soporte</h3>
              <p className="mt-2 text-univalle-ink-soft">
                ¿Necesitas ayuda con tu acceso o con una entrega? Escríbenos y te respondemos pronto.
              </p>
              <ul className="mt-4 space-y-2 text-[15px]">
                <li className="flex items-start gap-2">
                  <Icon name="mail" className="w-4 h-4 mt-1 text-univalle-red-deep"/>
                  <a href="mailto:campusvirtual@correounivalle.edu.co" className="text-univalle-red-deep font-semibold underline-offset-2 hover:underline break-all">
                    campusvirtual@correounivalle.edu.co
                  </a>
                </li>
                <li className="flex items-start gap-2 text-univalle-ink-soft"><Icon name="phone" className="w-4 h-4 mt-1 text-univalle-muted"/> 602 321 2100 · ext. 2549</li>
                <li className="flex items-start gap-2 text-univalle-ink-soft"><Icon name="clock" className="w-4 h-4 mt-1 text-univalle-muted"/> Lunes a viernes, 8 a.m. a 5 p.m.</li>
              </ul>
              <a href="#contacto" className="mt-6 inline-flex items-center gap-1.5 text-univalle-red-deep font-semibold hover:gap-2 transition-all">
                Hablar con soporte <Icon name="arrowRight" className="w-4 h-4"/>
              </a>
            </article>

            {/* Ayudas rápidas */}
            <article className="card p-6">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-2xl bg-univalle-ink text-white flex items-center justify-center">
                  <Icon name="tool" />
                </div>
                <span className="chip"><Icon name="bolt" className="w-3 h-3"/> En menos de 1 min</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-univalle-ink">Ayudas rápidas</h3>
              <p className="mt-2 text-univalle-ink-soft">Los atajos que más usas, siempre a la mano.</p>
              <ul className="mt-4 divide-y divide-univalle-line">
                {[
                  ['Recuperar mi contraseña', '#recuperar', 'lock'],
                  ['Inscribir un curso', '#inscribir', 'bookOpen'],
                  ['Subir una entrega de tarea', '#entregas', 'upload'],
                  ['Cambiar mi correo institucional', '#correo', 'mail'],
                ].map(([label, href, icon]) => (
                  <li key={label}>
                    <a href={href} className="flex items-center justify-between py-3 group">
                      <span className="flex items-center gap-3 text-univalle-ink font-medium">
                        <span className="w-8 h-8 rounded-xl bg-univalle-surface group-hover:bg-univalle-red group-hover:text-white flex items-center justify-center transition">
                          <Icon name={icon} className="w-4 h-4"/>
                        </span>
                        {label}
                      </span>
                      <Icon name="chevronRight" className="w-4 h-4 text-univalle-muted group-hover:text-univalle-red-deep transition" />
                    </a>
                  </li>
                ))}
              </ul>
            </article>

            {/* Recursos académicos */}
            <article className="card p-6 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 dots opacity-30 rounded-full" aria-hidden="true" />
              <div className="flex items-start justify-between relative">
                <div className="w-12 h-12 rounded-2xl bg-univalle-gold text-univalle-ink flex items-center justify-center">
                  <Icon name="book" />
                </div>
                <span className="chip"><Icon name="star" className="w-3 h-3"/> Más visitados</span>
              </div>
              <h3 className="mt-5 text-xl font-bold text-univalle-ink relative">Recursos académicos</h3>
              <p className="mt-2 text-univalle-ink-soft relative">
                Repasos y guías preparadas por DINTEV para reforzar lo aprendido.
              </p>
              <ul className="mt-4 grid gap-2 relative">
                {[
                  'Repaso de matemáticas del colegio',
                  'Repaso de ciencias naturales del colegio',
                  'Guía de redacción académica',
                  'Tutoriales del Campus Virtual',
                ].map((label) => (
                  <li key={label}>
                    <a href={`#${label}`} className="flex items-center justify-between gap-3 bg-univalle-surface hover:bg-white border border-transparent hover:border-univalle-line rounded-xl px-3 py-2.5 transition">
                      <span className="text-univalle-ink font-medium">{label}</span>
                      <Icon name="arrowUpRight" className="w-4 h-4 text-univalle-muted"/>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        {/* App Vida Univalle */}
        <section className="bg-univalle-ink text-white relative overflow-hidden">
          <div className="absolute inset-0 dots opacity-10" aria-hidden="true" />
          <div className="container-page py-16 grid lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <span className="eyebrow text-univalle-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-univalle-gold"/> App Vida Univalle
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-extrabold font-display text-balance">
                Llévate Univalle en el bolsillo
              </h2>
              <p className="mt-3 text-white/80 max-w-xl text-pretty">
                Servicios académicos, salud y bienestar siempre contigo. Recibe avisos de
                entregas, consulta tu carné digital y guarda tus recibos.
              </p>
              <p className="mt-5 inline-flex items-center gap-2 text-sm text-univalle-gold font-semibold">
                <Icon name="download" className="w-4 h-4"/> Más de 30 mil descargas
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#play" className="inline-flex items-center gap-3 rounded-2xl bg-white text-univalle-ink px-5 py-3 hover:bg-univalle-cream transition shadow-pop">
                  <Icon name="play" className="w-5 h-5"/>
                  <div className="text-left leading-tight">
                    <p className="text-[10px] uppercase tracking-wider text-univalle-muted">Disponible en</p>
                    <p className="font-bold">Google Play</p>
                  </div>
                </a>
                <a href="#appstore" className="inline-flex items-center gap-3 rounded-2xl bg-white text-univalle-ink px-5 py-3 hover:bg-univalle-cream transition shadow-pop">
                  <Icon name="apple" className="w-5 h-5"/>
                  <div className="text-left leading-tight">
                    <p className="text-[10px] uppercase tracking-wider text-univalle-muted">Disponible en</p>
                    <p className="font-bold">App Store</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="mx-auto w-[280px] rounded-[2.2rem] border-[10px] border-white/10 bg-univalle-red-deep p-3 shadow-card-hover">
                <div className="rounded-[1.4rem] bg-white text-univalle-ink p-4">
                  <p className="text-[10px] uppercase tracking-wider text-univalle-muted">Hoy</p>
                  <p className="font-bold mt-0.5">Tienes 3 entregas próximas</p>
                  <ul className="mt-3 space-y-2 text-[12px]">
                    <li className="flex items-center justify-between p-2 rounded-lg bg-state-danger-bg text-state-danger-text"><span>Exposición 9</span><span>Hoy</span></li>
                    <li className="flex items-center justify-between p-2 rounded-lg bg-state-warn-bg text-state-warn-text"><span>Laboratorio 4</span><span>Vie</span></li>
                    <li className="flex items-center justify-between p-2 rounded-lg bg-state-info-bg text-state-info-text"><span>Quiz Cálculo</span><span>Lun</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accesibilidad CTA */}
        <section className="container-page py-14">
          <div className="card p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="w-12 h-12 rounded-2xl bg-state-info-bg text-state-info-text flex items-center justify-center">
                <Icon name="eye"/>
              </span>
              <div>
                <h2 className="text-xl font-bold text-univalle-ink">¿Tienes baja visión o usas lector de pantalla?</h2>
                <p className="text-univalle-ink-soft text-sm mt-1">
                  Esta plataforma cumple con los criterios de accesibilidad WCAG 2.1 AA.
                  Si encuentras una barrera, cuéntanos para mejorarla.
                </p>
              </div>
            </div>
            <a href="#accesibilidad" className="btn-secondary self-start md:self-auto">
              Reportar una barrera <Icon name="arrowRight" className="w-4 h-4"/>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
