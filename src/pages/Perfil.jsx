import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthHeader from '../components/AuthHeader.jsx';
import Footer from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';
import { user, semesters, courses } from '../data/mockData.js';

// Pantalla 5 — Perfil / Mi progreso (versión pulida)
// Correcciones aplicadas:
//  - F5 (H2): "Editar perfil" -> "Actualizar mis datos".
//             "Cursos no regulares" -> "Materias adicionales o especiales".
//             "Semestre 2020 II" -> "Semestre agosto – diciembre 2020".
//             Nombre en Title Case (no MAYÚSCULAS DE BD).
//             "Sede: Tuluá" -> "Sede regional Tuluá (Valle del Cauca, Colombia)".

const TABS = [
  { id: 'cursos', label: 'Mi progreso por semestre', icon: 'graduation' },
  { id: 'detalles', label: 'Más sobre mí', icon: 'user' },
  { id: 'privacidad', label: 'Privacidad', icon: 'shield' },
];

export default function Perfil() {
  const [tab, setTab] = useState('cursos');
  const navigate = useNavigate();

  const avgProgress = Math.round(courses.reduce((a, c) => a + c.progress, 0) / courses.length);

  return (
    <div className="min-h-screen flex flex-col bg-univalle-cream">
      <AuthHeader />

      <main id="contenido" tabIndex={-1} className="flex-1">
        {/* Hero banner */}
        <section className="relative h-44 md:h-56 bg-gradient-to-br from-univalle-red-deep via-univalle-red to-univalle-red-dark overflow-hidden">
          <div className="absolute inset-0 dots opacity-15" aria-hidden="true"/>
          <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-univalle-gold/20 blur-2xl" aria-hidden="true"/>
          <div className="absolute -bottom-20 -left-10 w-72 h-72 rounded-full bg-white/10 blur-2xl" aria-hidden="true"/>
        </section>

        <div className="container-page pb-12 grid lg:grid-cols-12 gap-6">
          {/* Identidad — columna izquierda (sube sobre el banner rojo) */}
          <aside className="lg:col-span-4 space-y-6 -mt-20 md:-mt-24">
            <div className="card p-6 relative">
              <div className="flex flex-col items-center text-center">
                <img
                  src={user.avatar}
                  alt={`Foto de perfil de ${user.displayName}`}
                  className="w-28 h-28 rounded-full border-4 border-white shadow-card -mt-16 bg-univalle-cream"
                />
                <h1 className="mt-3 text-xl font-extrabold text-univalle-ink font-display">
                  {user.displayName}
                </h1>
                <span className="chip mt-2"><Icon name="graduation" className="w-3 h-3"/> {user.program}</span>
                <p className="text-xs text-univalle-muted mt-2 font-mono">{user.studentCode}</p>

                <div className="mt-5 grid grid-cols-3 gap-2 w-full">
                  <div className="bg-univalle-surface rounded-xl p-2.5">
                    <p className="text-lg font-extrabold text-univalle-ink font-display">7</p>
                    <p className="text-[10px] uppercase tracking-wider text-univalle-muted">Semestres</p>
                  </div>
                  <div className="bg-univalle-surface rounded-xl p-2.5">
                    <p className="text-lg font-extrabold text-univalle-ink font-display">{courses.length}</p>
                    <p className="text-[10px] uppercase tracking-wider text-univalle-muted">Materias</p>
                  </div>
                  <div className="bg-univalle-surface rounded-xl p-2.5">
                    <p className="text-lg font-extrabold text-univalle-ink font-display">{avgProgress}%</p>
                    <p className="text-[10px] uppercase tracking-wider text-univalle-muted">Avance</p>
                  </div>
                </div>

                <button type="button" className="btn-primary mt-5 w-full">
                  <Icon name="edit" className="w-4 h-4"/>
                  Actualizar mis datos
                </button>
                <button
                  type="button"
                  onClick={() => navigate('/login', { state: { expired: false } })}
                  className="btn-secondary mt-2 w-full"
                >
                  <Icon name="logout" className="w-4 h-4"/>
                  Cerrar sesión con seguridad
                </button>
              </div>
            </div>

            <div className="card p-5">
              <h2 className="font-bold text-univalle-ink flex items-center gap-2">
                <Icon name="sparkle" className="w-4 h-4 text-univalle-red-deep"/> Sobre mí
              </h2>
              <p className="text-sm text-univalle-ink-soft mt-2 leading-relaxed">{user.about}</p>
            </div>

            <div className="card p-5">
              <h2 className="font-bold text-univalle-ink flex items-center gap-2">
                <Icon name="user" className="w-4 h-4 text-univalle-red-deep"/> Información personal
              </h2>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="text-xs uppercase tracking-wider text-univalle-muted font-bold">Correo institucional</dt>
                  <dd className="mt-0.5">
                    <a href={`mailto:${user.email}`} className="text-univalle-red-deep underline underline-offset-2 break-all font-medium">
                      {user.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-wider text-univalle-muted font-bold">Lugar de estudio</dt>
                  <dd className="mt-0.5 text-univalle-ink-soft flex items-start gap-2">
                    <Icon name="pin" className="w-4 h-4 mt-0.5 text-univalle-muted flex-shrink-0"/>
                    <span>
                      {user.campus}<br/>
                      <span className="text-xs text-univalle-muted">{user.country}</span>
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>

          {/* Contenido — columna derecha (queda debajo del banner) */}
          <section className="lg:col-span-8 mt-6 lg:mt-8">
            <div className="card overflow-hidden">
              <div className="border-b border-univalle-line px-3 flex flex-wrap gap-1" role="tablist" aria-label="Secciones del perfil">
                {TABS.map((t) => {
                  const active = tab === t.id;
                  return (
                    <button
                      key={t.id}
                      role="tab"
                      aria-selected={active}
                      onClick={() => setTab(t.id)}
                      className={`inline-flex items-center gap-2 px-4 py-3 font-semibold text-sm transition border-b-2 ${
                        active
                          ? 'border-univalle-red text-univalle-red-deep'
                          : 'border-transparent text-univalle-ink-soft hover:text-univalle-ink'
                      }`}
                    >
                      <Icon name={t.icon} className="w-4 h-4"/>
                      {t.label}
                    </button>
                  );
                })}
              </div>

              {tab === 'cursos' && (
                <div className="p-6 md:p-8 animate-fade-in">
                  <p className="text-univalle-ink-soft">
                    Revisa las materias que has cursado en cada semestre. Las etiquetas ahora muestran el
                    rango de meses para que sea más fácil ubicarse.
                  </p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {semesters.map((s, i) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="flex items-center justify-between gap-3 p-4 rounded-xl border border-univalle-line hover:border-univalle-red-deep hover:bg-univalle-cream/40 transition group"
                        >
                          <span className="flex items-center gap-3 min-w-0">
                            <span className="w-10 h-10 rounded-xl bg-univalle-surface group-hover:bg-univalle-red group-hover:text-white text-univalle-ink-soft flex items-center justify-center transition flex-shrink-0">
                              <Icon name={i === 0 ? 'bolt' : 'calendar'} className="w-4 h-4"/>
                            </span>
                            <span className="min-w-0">
                              <p className="font-bold text-univalle-ink leading-tight">{s.label}</p>
                              <p className="text-xs text-univalle-muted mt-0.5">
                                {i === 0 ? 'Materias activas' : 'Consulta materias y calificaciones'}
                              </p>
                            </span>
                          </span>
                          <Icon name="chevronRight" className="w-4 h-4 text-univalle-muted group-hover:text-univalle-red-deep flex-shrink-0"/>
                        </a>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 rounded-2xl bg-univalle-surface border border-univalle-line p-4 flex items-start gap-3">
                    <span className="w-9 h-9 rounded-xl bg-state-info-bg text-state-info-text flex items-center justify-center flex-shrink-0">
                      <Icon name="helpCircle" className="w-5 h-5"/>
                    </span>
                    <p className="text-sm text-univalle-ink-soft">
                      <strong className="text-univalle-ink">Sugerencia:</strong> si necesitas un certificado de notas de un
                      semestre, escríbenos desde el menú <em>Atención y soporte</em> y te ayudamos.
                    </p>
                  </div>
                </div>
              )}

              {tab === 'detalles' && (
                <div className="p-6 md:p-8 space-y-7 animate-fade-in">
                  <section>
                    <h2 className="font-bold text-univalle-ink flex items-center gap-2">
                      <Icon name="sparkle" className="w-4 h-4 text-univalle-red-deep"/>
                      Intereses académicos
                    </h2>
                    <p className="text-univalle-ink-soft text-sm mt-1">
                      Cuéntale a tus docentes y compañeros en qué temas te gustaría profundizar. Estos
                      intereses ayudan a tu tutor a recomendarte cursos electivos.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {['Diseño de interfaces', 'Datos y analítica', 'Desarrollo móvil', 'IA aplicada'].map((tag) => (
                        <span key={tag} className="chip bg-univalle-red-100 text-univalle-red-deep border-univalle-red-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="font-bold text-univalle-ink flex items-center gap-2">
                      <Icon name="globe" className="w-4 h-4 text-univalle-red-deep"/>
                      Contacto adicional
                    </h2>
                    <dl className="text-sm mt-3 grid sm:grid-cols-2 gap-3">
                      <div className="rounded-xl bg-univalle-surface p-3">
                        <dt className="text-xs uppercase tracking-wider text-univalle-muted font-bold">Ciudad de origen</dt>
                        <dd className="mt-1 text-univalle-ink font-semibold">El Cerrito, Valle del Cauca</dd>
                      </div>
                      <div className="rounded-xl bg-univalle-surface p-3">
                        <dt className="text-xs uppercase tracking-wider text-univalle-muted font-bold">Idiomas</dt>
                        <dd className="mt-1 text-univalle-ink font-semibold">Español (nativo)</dd>
                        <dd className="text-univalle-ink-soft">Inglés (intermedio)</dd>
                      </div>
                    </dl>
                  </section>

                  <section>
                    <h2 className="font-bold text-univalle-ink flex items-center gap-2">
                      <Icon name="award" className="w-4 h-4 text-univalle-red-deep"/>
                      Logros recientes
                    </h2>
                    <ul className="mt-3 grid sm:grid-cols-2 gap-3 text-sm">
                      {[
                        ['Constancia académica', 'Entregaste todas tus tareas a tiempo el mes pasado.', 'check'],
                        ['Participación activa', '12 aportes en foros este semestre.', 'message'],
                      ].map(([t, d, ic]) => (
                        <li key={t} className="rounded-xl border border-univalle-line p-3 flex gap-3 items-start">
                          <span className="w-9 h-9 rounded-xl bg-state-success-bg text-state-success-text flex items-center justify-center flex-shrink-0">
                            <Icon name={ic} className="w-4 h-4"/>
                          </span>
                          <div>
                            <p className="font-bold text-univalle-ink">{t}</p>
                            <p className="text-univalle-ink-soft text-xs mt-0.5">{d}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              )}

              {tab === 'privacidad' && (
                <div className="p-6 md:p-8 animate-fade-in">
                  <h2 className="font-bold text-univalle-ink flex items-center gap-2">
                    <Icon name="shield" className="w-4 h-4 text-state-success-text"/>
                    Privacidad de tu perfil
                  </h2>
                  <p className="text-univalle-ink-soft text-sm mt-1">
                    Decides qué información comparten contigo tus docentes y compañeros.
                  </p>

                  <ul className="mt-5 space-y-3">
                    {[
                      ['Mi correo institucional', 'Visible para tus docentes y compañeros de materia.', true],
                      ['Mi programa académico', 'Visible para que tus compañeros sepan en qué carrera estás.', true],
                      ['Mi número de celular', 'Solo lo ves tú. Lo usamos para recuperación de cuenta.', false],
                      ['Foto de perfil', 'Visible en foros y entregas grupales.', true],
                    ].map(([t, d, on]) => (
                      <li key={t} className="rounded-xl border border-univalle-line p-4 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-bold text-univalle-ink">{t}</p>
                          <p className="text-univalle-ink-soft text-sm mt-0.5">{d}</p>
                        </div>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${
                          on ? 'bg-state-success-bg text-state-success-text' : 'bg-univalle-surface text-univalle-muted'
                        }`}>
                          {on ? 'Visible' : 'Solo tú'}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-2xl bg-univalle-cream border border-univalle-line p-4 text-sm text-univalle-ink-soft">
                    <Icon name="lock" className="w-4 h-4 inline mr-1 text-state-success-text"/>
                    Univalle nunca te pedirá tu contraseña por correo, llamada o WhatsApp. Si recibes una
                    solicitud sospechosa, repórtala a soporte.
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
