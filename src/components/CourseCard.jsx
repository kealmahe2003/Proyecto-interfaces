// Tarjeta de curso rediseñada (corrige F1-H4 y F2-H6 con presentación pulida):
//  - Portada ilustrada por materia (en lugar de placeholder vacío)
//  - Badge de estado contextual + barra de progreso + próxima entrega humana
//  - Microcopy en lenguaje natural; código interno como dato secundario

import CourseCover from './CourseCover.jsx';
import Icon from './Icon.jsx';

const STATUS = {
  'al-dia':       { label: 'Al día',                   cls: 'badge-success', icon: 'check' },
  'pendiente':    { label: 'Tareas pendientes',        cls: 'badge-warn',    icon: 'clock' },
  'urgente':      { label: 'Entregas atrasadas',       cls: 'badge-danger',  icon: 'bell' },
  'calificacion': { label: 'Calificación disponible',  cls: 'badge-info',    icon: 'award' },
};

export default function CourseCard({ course, compact = false }) {
  const s = STATUS[course.status] || STATUS['al-dia'];
  return (
    <article
      className="card card-hover overflow-hidden flex flex-col group"
      aria-labelledby={`title-${course.id}`}
    >
      <CourseCover courseId={course.id} className={compact ? 'h-28' : 'h-36'} />

      <div className="p-4 flex-1 flex flex-col gap-2.5">
        <div className="flex items-start justify-between gap-2">
          <span className={s.cls}>
            <Icon name={s.icon} className="w-3 h-3" /> {s.label}
          </span>
        </div>

        <h3
          id={`title-${course.id}`}
          className="text-univalle-ink font-bold leading-snug text-[15px] line-clamp-2"
        >
          <a href={`#${course.id}`} className="hover:text-univalle-red-deep transition">
            {course.name}
          </a>
        </h3>

        <p className="text-xs text-univalle-muted flex items-center gap-1.5">
          <Icon name="user" className="w-3.5 h-3.5" />
          {course.teacher} <span className="text-univalle-line-strong">·</span> {course.group}
        </p>

        {!compact && (
          <>
            <div className="mt-1 rounded-xl bg-univalle-cream/70 border border-univalle-line px-3 py-2 text-sm text-univalle-ink-soft">
              {course.nextDue ? (
                <>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-univalle-red-deep">
                    Próxima entrega
                  </p>
                  <p className="text-[13px] leading-snug mt-0.5">{course.nextDue}</p>
                </>
              ) : (
                <p className="text-[13px] text-univalle-muted">{course.summary}</p>
              )}
            </div>

            <a
              href={`#${course.id}`}
              className="mt-1 inline-flex items-center justify-between text-sm font-semibold text-univalle-red-deep hover:text-univalle-red-dark group"
            >
              Entrar a la materia
              <Icon name="arrowRight" className="w-4 h-4 transition group-hover:translate-x-0.5" />
            </a>
          </>
        )}

        {compact && (
          <p className="text-[13px] text-univalle-ink-soft mt-1 line-clamp-2">
            {course.nextDue || course.summary}
          </p>
        )}
      </div>
    </article>
  );
}
