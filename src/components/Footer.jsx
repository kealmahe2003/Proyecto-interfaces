import Icon from './Icon.jsx';
import UnivalleLogo from './UnivalleLogo.jsx';

export default function Footer() {
  return (
    <footer className="bg-univalle-ink text-white/90 mt-16" role="contentinfo">
      <div className="container-page py-14 grid lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <UnivalleLogo variant="light" />
          <p className="mt-4 text-sm text-white/70 leading-relaxed">
            Plataforma oficial de aprendizaje en línea de la Universidad del Valle.
            Más de 30.000 estudiantes la usan cada semana.
          </p>
          <div className="mt-5 flex gap-2" aria-label="Redes sociales">
            {[
              { l: 'YouTube',   p: 'M23 7s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.1-1C16.9 3.4 12 3.4 12 3.4s-4.9 0-8.1.3c-.4.1-1.3.1-2.1 1C1.2 5.4 1 7 1 7S.8 8.9.8 10.8v1.4C.8 14.1 1 16 1 16s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.8.2 7.8.3 7.8.3s4.9 0 8.1-.3c.4-.1 1.3-.1 2.1-1 .6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-1.4C23.2 8.9 23 7 23 7zM9.8 14.7V8.3l6.2 3.2-6.2 3.2z' },
              { l: 'Facebook',  p: 'M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.5c0-2.4 1.4-3.7 3.5-3.7 1 0 2.1.2 2.1.2v2.3H15c-1.2 0-1.5.7-1.5 1.5V12H16l-.4 3h-2.1v7A10 10 0 0 0 22 12z' },
              { l: 'Twitter',   p: 'M22 5.8c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 12 9.1c0 .3 0 .6.1.9A11.6 11.6 0 0 1 3.8 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4-.7.2-1.4.2-2.1.1a4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.1 11.6 11.6 0 0 0 8.3 20c7.5 0 11.7-6.2 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2z' },
              { l: 'Instagram', p: 'M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.3 2.4.5.6.2 1.1.5 1.5 1 .5.4.8.9 1 1.5.2.5.4 1.2.5 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 1.9-.5 2.4-.2.6-.5 1.1-1 1.5-.4.5-.9.8-1.5 1-.5.2-1.2.4-2.4.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.3-2.4-.5-.6-.2-1.1-.5-1.5-1-.5-.4-.8-.9-1-1.5-.2-.5-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-1.9.5-2.4.2-.6.5-1.1 1-1.5.4-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 5.5a4.3 4.3 0 1 0 0 8.6 4.3 4.3 0 0 0 0-8.6zm0 7.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm5.4-7.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0z' },
            ].map((s) => (
              <a
                key={s.l}
                href={`#${s.l}`}
                aria-label={s.l}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d={s.p}/></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Estudiantes</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              'Recuperar mi contraseña',
              'Inscribir un curso',
              'Subir una entrega',
              'Calendario académico',
              'Calificaciones',
            ].map((x) => (
              <li key={x}><a className="text-white/70 hover:text-white" href={`#${x}`}>{x}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Soporte</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2 text-white/70"><Icon name="phone" className="w-4 h-4 mt-0.5"/> 602 321 2100 · ext. 2549 o 2653</li>
            <li className="flex items-start gap-2 text-white/70"><Icon name="mail" className="w-4 h-4 mt-0.5"/>
              <a href="mailto:campusvirtual@correounivalle.edu.co" className="hover:text-white break-all">
                campusvirtual@correounivalle.edu.co
              </a>
            </li>
            <li className="flex items-start gap-2 text-white/70"><Icon name="pin" className="w-4 h-4 mt-0.5"/> Edificio E18, oficina 2004 · Campus Meléndez, Cali</li>
            <li className="flex items-start gap-2 text-white/70"><Icon name="clock" className="w-4 h-4 mt-0.5"/> Lunes a viernes, 8 a.m. – 5 p.m.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">Universidad</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ['Sobre Univalle', '#sobre'],
              ['Sedes regionales', '#sedes'],
              ['Programas académicos', '#programas'],
              ['Investigación', '#investigacion'],
            ].map(([label, href]) => (
              <li key={label}><a className="text-white/70 hover:text-white" href={href}>{label}</a></li>
            ))}
          </ul>

          <div className="mt-6 p-4 rounded-2xl border border-white/10 bg-white/5">
            <p className="text-xs uppercase tracking-wider text-univalle-gold font-bold">Accesibilidad</p>
            <p className="text-sm text-white/85 mt-1.5 leading-relaxed">
              Cumple con WCAG 2.1 AA. ¿Encontraste una barrera?{' '}
              <a href="#accesibilidad" className="underline text-white">Cuéntanos</a>.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Universidad del Valle · Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <a href="#privacidad" className="hover:text-white">Política de privacidad</a>
            <a href="#cookies" className="hover:text-white">Aviso de cookies</a>
            <a href="#tyc" className="hover:text-white">Términos de uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
