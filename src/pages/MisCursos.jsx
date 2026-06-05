import { useMemo, useState } from 'react';
import AuthHeader from '../components/AuthHeader.jsx';
import Footer from '../components/Footer.jsx';
import CourseCard from '../components/CourseCard.jsx';
import Icon from '../components/Icon.jsx';
import { courses } from '../data/mockData.js';

// Pantalla 4 — Mis Materias (versión pulida)
// Correcciones aplicadas:
//  - F1: Tarjetas con metadatos accionables (estado, progreso, próxima entrega).
//  - F5: Pestañas reescritas
//      "Semestre actual"      -> "Este semestre"
//      "Semestres anteriores" -> "Semestres pasados"
//      "No regulares"         -> "Materias adicionales o especiales"

const TABS = [
  { id: 'actual', label: 'Este semestre', icon: 'bolt' },
  { id: 'pasados', label: 'Semestres pasados', icon: 'clock' },
  { id: 'extra', label: 'Materias adicionales o especiales', icon: 'sparkle' },
];

const STATUS_FILTERS = [
  { id: 'todos', label: 'Todas mis materias' },
  { id: 'urgente', label: 'Con entregas atrasadas' },
  { id: 'pendiente', label: 'Con tareas pendientes' },
  { id: 'al-dia', label: 'Al día' },
  { id: 'calificacion', label: 'Con calificación nueva' },
];

export default function MisCursos() {
  const [tab, setTab] = useState('actual');
  const [statusFilter, setStatusFilter] = useState('todos');
  const [query, setQuery] = useState('');
  const [view, setView] = useState('grid');

  const visible = useMemo(() => {
    if (tab !== 'actual') return [];
    return courses.filter((c) => {
      const matchStatus = statusFilter === 'todos' || c.status === statusFilter;
      const matchQ = (c.name + ' ' + c.teacher).toLowerCase().includes(query.toLowerCase());
      return matchStatus && matchQ;
    });
  }, [tab, statusFilter, query]);

  const stats = useMemo(() => {
    return {
      total: courses.length,
      late: courses.filter((c) => c.status === 'urgente').length,
      pending: courses.filter((c) => c.status === 'pendiente').length,
      ok: courses.filter((c) => c.status === 'al-dia').length,
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-univalle-cream">
      <AuthHeader />

      <main id="contenido" tabIndex={-1} className="flex-1">
        {/* Header section */}
        <section className="bg-white border-b border-univalle-line">
          <div className="container-page py-10">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <span className="eyebrow"><Icon name="bookOpen" className="w-3 h-3"/> Vista general</span>
                <h1 className="mt-2 text-3xl md:text-4xl font-extrabold text-univalle-ink font-display">
                  Mis materias
                </h1>
                <p className="text-univalle-ink-soft mt-2 max-w-2xl">
                  Aquí encuentras todas tus materias con su estado actual, próxima entrega y avance.
                  Haz clic en una tarjeta para entrar.
                </p>
              </div>
              <div className="flex items-center gap-4 bg-univalle-surface rounded-2xl px-5 py-3">
                <div className="text-center"><p className="text-2xl font-extrabold text-univalle-ink font-display">{stats.total}</p><p className="text-xs text-univalle-muted">Materias</p></div>
                <span className="w-px h-8 bg-univalle-line"/>
                <div className="text-center"><p className="text-2xl font-extrabold text-state-danger-text font-display">{stats.late}</p><p className="text-xs text-univalle-muted">Atrasadas</p></div>
                <span className="w-px h-8 bg-univalle-line"/>
                <div className="text-center"><p className="text-2xl font-extrabold text-state-warn-text font-display">{stats.pending}</p><p className="text-xs text-univalle-muted">Pendientes</p></div>
                <span className="w-px h-8 bg-univalle-line"/>
                <div className="text-center"><p className="text-2xl font-extrabold text-state-success-text font-display">{stats.ok}</p><p className="text-xs text-univalle-muted">Al día</p></div>
              </div>
            </div>
          </div>

          {/* Pestañas */}
          <div className="container-page">
            <div className="flex flex-wrap gap-1 -mb-px" role="tablist" aria-label="Periodo académico">
              {TABS.map((t) => {
                const active = tab === t.id;
                return (
                  <button
                    key={t.id}
                    role="tab"
                    aria-selected={active}
                    onClick={() => setTab(t.id)}
                    className={`inline-flex items-center gap-2 px-5 py-3 rounded-t-xl text-sm font-semibold transition border ${
                      active
                        ? 'bg-univalle-cream border-univalle-line border-b-univalle-cream text-univalle-red-deep'
                        : 'bg-transparent border-transparent text-univalle-ink-soft hover:text-univalle-ink'
                    }`}
                  >
                    <Icon name={t.icon} className="w-4 h-4"/>
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        <div className="container-page py-10">
          {/* Toolbar */}
          <div className="card p-4 md:p-5 flex flex-wrap items-center gap-3 mb-7">
            <div className="flex items-center gap-2">
              <Icon name="filter" className="w-4 h-4 text-univalle-muted"/>
              <label htmlFor="status" className="text-sm font-semibold text-univalle-ink">Mostrar</label>
              <select
                id="status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="rounded-full border border-univalle-line bg-univalle-surface px-3 py-1.5 text-sm font-medium text-univalle-ink"
              >
                {STATUS_FILTERS.map((s) => (
                  <option key={s.id} value={s.id}>{s.label}</option>
                ))}
              </select>
            </div>

            <div className="flex-1 min-w-[220px] relative">
              <Icon name="search" className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-univalle-muted"/>
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar por materia o docente (ej. 'cálculo' o 'castaño')"
                className="w-full rounded-full border border-univalle-line bg-univalle-cream/40 pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-univalle-red focus:ring-4 focus:ring-univalle-red/10"
                aria-label="Buscar materia"
              />
            </div>

            <div className="inline-flex items-center gap-1 bg-univalle-surface rounded-full p-1" role="group" aria-label="Vista">
              <button
                onClick={() => setView('grid')}
                className={`p-2 rounded-full transition ${view==='grid' ? 'bg-white shadow-soft text-univalle-ink' : 'text-univalle-muted hover:text-univalle-ink'}`}
                aria-pressed={view==='grid'}
                aria-label="Ver como cuadrícula"
              >
                <Icon name="layers" className="w-4 h-4"/>
              </button>
              <button
                onClick={() => setView('list')}
                className={`p-2 rounded-full transition ${view==='list' ? 'bg-white shadow-soft text-univalle-ink' : 'text-univalle-muted hover:text-univalle-ink'}`}
                aria-pressed={view==='list'}
                aria-label="Ver como lista"
              >
                <Icon name="filter" className="w-4 h-4"/>
              </button>
            </div>
          </div>

          {/* Contenido */}
          {tab === 'actual' ? (
            <section>
              {visible.length === 0 ? (
                <div className="card p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-univalle-surface mx-auto flex items-center justify-center text-univalle-muted mb-3">
                    <Icon name="search"/>
                  </div>
                  <p className="font-semibold text-univalle-ink">No encontramos materias con esos filtros</p>
                  <p className="text-univalle-ink-soft text-sm mt-1">Prueba con otro estado o un término distinto.</p>
                  <button
                    onClick={() => { setStatusFilter('todos'); setQuery(''); }}
                    className="btn-secondary mt-4"
                  >
                    Quitar filtros
                  </button>
                </div>
              ) : (
                <>
                  <p className="text-sm text-univalle-muted mb-3">
                    Mostrando <strong className="text-univalle-ink">{visible.length}</strong> de {courses.length} materias.
                  </p>
                  <div className={view === 'grid'
                    ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-5'
                    : 'grid grid-cols-1 gap-3'
                  }>
                    {visible.map((c) => (
                      view === 'grid'
                        ? <CourseCard key={c.id} course={c} />
                        : <CourseRowItem key={c.id} course={c} />
                    ))}
                  </div>
                </>
              )}
            </section>
          ) : tab === 'pasados' ? (
            <section className="card p-6 md:p-8">
              <h2 className="font-bold text-univalle-ink text-xl">Semestres pasados</h2>
              <p className="text-univalle-ink-soft text-sm mt-1">
                Aquí guardamos las materias de tus semestres anteriores. Puedes
                consultar materiales, notas y entregas, pero ya no puedes subir nuevas tareas.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {[
                  ['Semestre agosto – diciembre 2025', '6 materias'],
                  ['Semestre febrero – junio 2025', '5 materias'],
                  ['Semestre agosto – diciembre 2024', '6 materias'],
                  ['Semestre febrero – junio 2024', '5 materias'],
                  ['Semestre agosto – diciembre 2023', '6 materias'],
                  ['Semestre febrero – junio 2023', '4 materias'],
                ].map(([s, n]) => (
                  <li key={s}>
                    <a
                      href={`#${s}`}
                      className="flex items-center justify-between gap-3 p-4 rounded-xl border border-univalle-line hover:border-univalle-red-deep hover:bg-univalle-cream/40 transition group"
                    >
                      <span className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-xl bg-univalle-surface group-hover:bg-univalle-red group-hover:text-white text-univalle-ink-soft flex items-center justify-center transition">
                          <Icon name="calendar" className="w-4 h-4"/>
                        </span>
                        <span>
                          <p className="font-bold text-univalle-ink leading-tight">{s}</p>
                          <p className="text-xs text-univalle-muted mt-0.5">{n}</p>
                        </span>
                      </span>
                      <Icon name="chevronRight" className="w-4 h-4 text-univalle-muted group-hover:text-univalle-red-deep"/>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ) : (
            <section className="card p-8 text-center">
              <div className="w-14 h-14 rounded-full bg-univalle-gold-soft mx-auto flex items-center justify-center text-[#7A4A00] mb-3">
                <Icon name="sparkle"/>
              </div>
              <h2 className="font-bold text-univalle-ink text-xl">Materias adicionales o especiales</h2>
              <p className="text-univalle-ink-soft text-sm mt-2 max-w-md mx-auto">
                Cursos electivos, talleres extracurriculares, validaciones u
                homologaciones que no hacen parte del plan regular de tu carrera.
              </p>
              <div className="mt-5 inline-flex items-center gap-2 text-sm text-univalle-muted bg-univalle-surface rounded-full px-4 py-2">
                <Icon name="check" className="w-4 h-4 text-state-success-text"/>
                Por ahora no tienes materias en esta categoría.
              </div>
            </section>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Vista en fila para "lista"
function CourseRowItem({ course }) {
  return (
    <article className="card card-hover p-4 flex items-center gap-4">
      <span className={`w-3 h-12 rounded-full ${
        course.status === 'urgente' ? 'bg-univalle-red' :
        course.status === 'pendiente' ? 'bg-univalle-gold' :
        course.status === 'calificacion' ? 'bg-state-info-text' : 'bg-state-success-text'
      }`}/>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-univalle-ink truncate">{course.name}</h3>
        <p className="text-xs text-univalle-muted mt-1 flex items-center gap-1.5">
          <Icon name="user" className="w-3 h-3"/>{course.teacher} · {course.group}
        </p>
      </div>
      <p className="hidden lg:block text-sm text-univalle-ink-soft w-64 truncate">
        {course.nextDue || course.summary}
      </p>
      <a href={`#${course.id}`} className="btn-secondary flex-shrink-0">
        Entrar <Icon name="arrowRight" className="w-4 h-4"/>
      </a>
    </article>
  );
}
