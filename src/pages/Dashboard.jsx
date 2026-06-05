import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthHeader from '../components/AuthHeader.jsx';
import Footer from '../components/Footer.jsx';
import CourseCard from '../components/CourseCard.jsx';
import Icon from '../components/Icon.jsx';
import { user, courses, schedule, quickAccess } from '../data/mockData.js';

// Pantalla 3 — Dashboard / Área Personal (versión pulida)
// Correcciones aplicadas (informe pág. 9-10):
//  - F1: Tarjetas con badge, progreso y próxima entrega.
//  - F2: Cronograma con NOMBRE REAL del curso (no el código).
//  - F5: Saludo en Title Case y mensajes humanos ("vence hoy a las 11:59 p.m.").

const QUICK_ICON_BG = {
  biblioteca: 'bg-univalle-red-100 text-univalle-red-deep',
  correo: 'bg-state-info-bg text-state-info-text',
  reglamento: 'bg-univalle-gold-soft text-[#7A4A00]',
  herramientas: 'bg-univalle-surface-2 text-univalle-ink',
  bienestar: 'bg-state-success-bg text-state-success-text',
};

const STATUS_TIMELINE = {
  late: { text: 'Atrasada', cls: 'badge-danger', dot: 'bg-univalle-red' },
  soon: { text: 'Próxima', cls: 'badge-warn', dot: 'bg-univalle-gold' },
  done: { text: 'Entregada', cls: 'badge-success', dot: 'bg-state-success-text' },
};

export default function Dashboard() {
  const [filter, setFilter] = useState('todos');
  const [query, setQuery] = useState('');

  const summary = useMemo(() => {
    const late = courses.reduce((acc, c) => acc + (c.status === 'urgente' ? c.pending : 0), 0);
    const pending = courses.reduce((acc, c) => acc + (c.status === 'pendiente' ? c.pending : 0), 0);
    const grades = courses.filter((c) => c.status === 'calificacion').length;
    const avgProgress = Math.round(courses.reduce((a, c) => a + c.progress, 0) / courses.length);
    return { late, pending, grades, avgProgress };
  }, []);

  const filteredSchedule = useMemo(() => {
    return schedule
      .map((day) => ({
        ...day,
        items: day.items.filter((it) => {
          const matchFilter =
            filter === 'todos' ||
            (filter === 'atrasados' && it.status === 'late') ||
            (filter === 'proximos' && it.status === 'soon');
          const matchQuery = (it.title + ' ' + it.course)
            .toLowerCase()
            .includes(query.toLowerCase());
          return matchFilter && matchQuery;
        }),
      }))
      .filter((d) => d.items.length > 0);
  }, [filter, query]);

  return (
    <div className="min-h-screen flex flex-col bg-univalle-cream">
      <AuthHeader />

      <main id="contenido" tabIndex={-1} className="flex-1">
        {/* Hero greeting */}
        <section className="relative overflow-hidden bg-gradient-to-br from-univalle-red-deep via-univalle-red to-univalle-red-dark text-white">
          <div className="absolute inset-0 dots opacity-10" aria-hidden="true"/>
          <div className="absolute -bottom-32 -right-20 w-96 h-96 rounded-full bg-white/5 blur-3xl" aria-hidden="true"/>
          <div className="container-page relative py-10 lg:py-14">
            <p className="text-white/75 text-sm font-medium flex items-center gap-2">
              <Icon name="calendar" className="w-4 h-4"/>
              Jueves 22 de mayo · semestre febrero – junio 2026
            </p>
            <h1 className="mt-2 text-3xl md:text-5xl font-extrabold font-display text-balance leading-[1.05]">
              Hola, {user.shortName}. <span className="text-univalle-gold">¿Qué vamos a hacer hoy?</span>
            </h1>
            <p className="mt-4 text-white/85 text-pretty max-w-2xl text-[15px] leading-relaxed">
              {summary.late > 0
                ? `Tienes ${summary.late} entrega${summary.late === 1 ? '' : 's'} atrasada${summary.late === 1 ? '' : 's'} y ${summary.pending} próxima${summary.pending === 1 ? '' : 's'} esta semana. Te recomiendo empezar por las atrasadas.`
                : `Estás al día. Tienes ${summary.pending} actividad${summary.pending === 1 ? '' : 'es'} próxima${summary.pending === 1 ? '' : 's'} esta semana.`}
            </p>

            <div className="mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
              {[
                { v: summary.late, l: 'Entregas atrasadas', s: 'Revísalas antes de subir nuevas tareas.', icon: 'bell',     accent: 'text-univalle-gold' },
                { v: summary.pending, l: 'Próximas entregas', s: 'Las que vencen en 7 días.',           icon: 'clock',    accent: 'text-white' },
                { v: summary.grades,  l: 'Calificaciones nuevas', s: 'Mira las notas recientes.',       icon: 'award',    accent: 'text-univalle-gold' },
                { v: `${summary.avgProgress}%`, l: 'Avance promedio', s: 'Progreso general en tus materias.', icon: 'trending', accent: 'text-white' },
              ].map((k) => (
                <div key={k.l} className="rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 p-4 hover:bg-white/15 transition">
                  <div className="flex items-center justify-between">
                    <p className={`text-3xl font-extrabold font-display ${k.accent}`}>{k.v}</p>
                    <Icon name={k.icon} className={`w-5 h-5 ${k.accent}`}/>
                  </div>
                  <p className="text-sm font-semibold mt-1">{k.l}</p>
                  <p className="text-xs text-white/70 mt-0.5">{k.s}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container-page py-10 grid lg:grid-cols-12 gap-8">
          {/* Columna principal */}
          <div className="lg:col-span-8 space-y-10">
            {/* Tus materias */}
            <section aria-labelledby="materias">
              <header className="flex items-end justify-between gap-4 flex-wrap">
                <div>
                  <span className="eyebrow">Esta semana</span>
                  <h2 id="materias" className="mt-2 text-2xl font-extrabold text-univalle-ink font-display">
                    Tus materias
                  </h2>
                  <p className="text-univalle-ink-soft text-sm mt-1">
                    Cada tarjeta muestra su estado actual y la próxima entrega.
                  </p>
                </div>
                <Link to="/mis-materias" className="btn-ghost">
                  Ver todas <Icon name="arrowRight" className="w-4 h-4"/>
                </Link>
              </header>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-5">
                {courses.slice(0, 6).map((c) => (
                  <CourseCard key={c.id} course={c} compact />
                ))}
              </div>
            </section>

            {/* Cronograma timeline */}
            <section aria-labelledby="cronograma">
              <header>
                <span className="eyebrow">Cronograma</span>
                <h2 id="cronograma" className="mt-2 text-2xl font-extrabold text-univalle-ink font-display">
                  Lo que viene esta semana
                </h2>
                <p className="text-univalle-ink-soft text-sm mt-1">
                  Te mostramos lo que vence pronto. Para evitar olvidos, empieza por las atrasadas.
                </p>
              </header>

              <div className="card mt-5 p-4 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center gap-1 bg-univalle-surface rounded-full p-1">
                  {[
                    { id: 'todos', label: 'Todas' },
                    { id: 'atrasados', label: 'Atrasadas' },
                    { id: 'proximos', label: 'Próximas' },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setFilter(f.id)}
                      className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition ${
                        filter === f.id ? 'bg-white text-univalle-ink shadow-soft' : 'text-univalle-ink-soft hover:text-univalle-ink'
                      }`}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>

                <div className="flex-1 min-w-[220px] relative">
                  <Icon name="search" className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-univalle-muted"/>
                  <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar por tarea o materia (ej. 'exposición' o 'cálculo')"
                    className="w-full rounded-full border border-univalle-line bg-univalle-cream/40 pl-10 pr-4 py-2 text-sm focus:bg-white focus:border-univalle-red focus:ring-4 focus:ring-univalle-red/10"
                    aria-label="Buscar entrega"
                  />
                </div>
              </div>

              <div className="mt-6 relative">
                {filteredSchedule.length === 0 && (
                  <div className="card p-6 text-univalle-ink-soft text-center">
                    No hay entregas con esos filtros. Prueba otro término o cambia el filtro.
                  </div>
                )}

                {filteredSchedule.map((day) => (
                  <div key={day.dateLabel} className="mb-7">
                    <h3 className="font-bold text-univalle-ink text-[15px] flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-univalle-red"/>
                      {day.dateLabel}
                    </h3>
                    <ul className="mt-3 space-y-3 relative pl-5 border-l-2 border-dashed border-univalle-line ml-1">
                      {day.items.map((it) => {
                        const s = STATUS_TIMELINE[it.status];
                        return (
                          <li
                            key={it.title}
                            className="relative card p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-3 md:gap-5 card-hover"
                          >
                            <span className={`absolute -left-[26px] top-6 w-3 h-3 rounded-full ${s.dot} ring-4 ring-univalle-cream`} aria-hidden="true"/>
                            <div className="flex items-start gap-3 flex-1">
                              <div className="text-center bg-univalle-surface rounded-xl px-3 py-2 min-w-[64px]">
                                <p className="text-[10px] uppercase tracking-wider text-univalle-muted font-bold">Vence</p>
                                <p className="font-bold text-univalle-ink">{it.time}</p>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h4 className="font-bold text-univalle-ink">{it.title}</h4>
                                  <span className={s.cls}>{s.text}</span>
                                </div>
                                <p className="text-sm text-univalle-ink-soft mt-1 flex items-center gap-1.5">
                                  <Icon name="bookOpen" className="w-3.5 h-3.5"/>
                                  {it.course}
                                </p>
                              </div>
                            </div>
                            <div className="flex-shrink-0 md:text-right">
                              <button type="button" className="btn-primary">
                                <Icon name="upload" className="w-4 h-4"/>
                                {it.action}
                              </button>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </div>

              <button type="button" className="btn-secondary mt-4">
                <Icon name="calendar" className="w-4 h-4"/>
                Mostrar todas las actividades del mes
              </button>
            </section>
          </div>

          {/* Sidebar derecho */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="card p-5">
              <h3 className="font-bold text-univalle-ink flex items-center gap-2">
                <Icon name="bolt" className="w-4 h-4 text-univalle-red-deep"/>
                Accesos rápidos
              </h3>
              <ul className="mt-4 divide-y divide-univalle-line">
                {quickAccess.map((q) => (
                  <li key={q.id}>
                    <a href={`#${q.id}`} className="flex items-start gap-3 py-3 group">
                      <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${QUICK_ICON_BG[q.id] || 'bg-univalle-surface text-univalle-ink'}`}>
                        <Icon name={q.icon}/>
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-univalle-ink leading-tight">{q.title}</p>
                        <p className="text-xs text-univalle-muted mt-0.5">{q.description}</p>
                      </div>
                      <Icon name="chevronRight" className="w-4 h-4 text-univalle-muted mt-2 group-hover:text-univalle-red-deep transition"/>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-5 bg-gradient-to-br from-univalle-ink to-[#1e2230] text-white relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-univalle-red/30 blur-2xl" aria-hidden="true"/>
              <span className="eyebrow text-univalle-gold">
                <span className="w-1.5 h-1.5 rounded-full bg-univalle-gold"/> Consejo
              </span>
              <h3 className="mt-2 font-bold text-lg relative">Sube tus entregas con tiempo</h3>
              <p className="mt-1 text-sm text-white/80 relative">
                Subir 30 minutos antes del cierre te da margen para revisar el archivo o corregir errores.
              </p>
              <a href="#guia" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-univalle-gold relative">
                Ver guía de entregas <Icon name="arrowRight" className="w-4 h-4"/>
              </a>
            </div>

            <div className="card p-5">
              <h3 className="font-bold text-univalle-ink flex items-center gap-2">
                <Icon name="users" className="w-4 h-4 text-state-info-text"/>
                Tu cohorte
              </h3>
              <div className="mt-3 flex items-center -space-x-2">
                {['JM','LP','AC','MG','+'].map((i, ix) => (
                  <span key={ix} className={`w-9 h-9 rounded-full ring-2 ring-white flex items-center justify-center text-xs font-bold ${ix===4 ? 'bg-univalle-surface text-univalle-muted' : 'bg-gradient-to-br from-univalle-red to-univalle-red-deep text-white'}`}>
                    {i}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm text-univalle-ink-soft">
                <strong className="text-univalle-ink">12 compañeros</strong> están conectados ahora en tus materias.
              </p>
              <a href="#foros" className="mt-3 inline-flex text-sm font-semibold text-univalle-red-deep hover:underline">
                Ir al foro de la semana →
              </a>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
