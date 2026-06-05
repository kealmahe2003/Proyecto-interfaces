import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import PublicHeader from '../components/PublicHeader.jsx';
import Footer from '../components/Footer.jsx';
import Icon from '../components/Icon.jsx';

// Pantalla 2 — Login (versión pulida)
// Correcciones aplicadas:
//  - F3 (H1 Visibilidad): Banner de bienvenida, aviso proactivo de sesión expirada,
//    errores empáticos con acción de salida clara.
//  - F5 (H2 Lenguaje): Labels visibles permanentes, hint con formato, botón
//    "Ingresar al Campus" (no "Entrar"), enlace en tuteo "¿La olvidaste?".

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const sessionExpired = location.state?.expired === true;

  const [code, setCode] = useState('2060071-3743');
  const [password, setPassword] = useState('');
  const [showPwd, setShowPwd] = useState(false);
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!code.trim()) {
      setError({
        title: 'Falta tu código de estudiante',
        message: 'Escribe tu código (por ejemplo, 2060071-3743) para continuar.',
        focus: 'code',
      });
      return;
    }
    if (!password.trim()) {
      setError({
        title: 'Falta tu contraseña',
        message: 'Escribe la contraseña que usas en tu correo institucional.',
        focus: 'pwd',
      });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (password.length < 4) {
        setError({
          title: 'No reconocemos esa combinación',
          message:
            'Revisa que tu código de estudiante y tu contraseña sean correctos. Si la olvidaste, podemos ayudarte a recuperarla.',
        });
        return;
      }
      navigate('/dashboard');
    }, 450);
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <PublicHeader />

      <main id="contenido" tabIndex={-1} className="flex-1 relative overflow-hidden bg-univalle-cream">
        <div className="absolute -top-32 -left-32 w-[460px] h-[460px] rounded-full bg-univalle-red-100 blur-3xl opacity-60" aria-hidden="true"/>
        <div className="absolute -bottom-40 -right-40 w-[460px] h-[460px] rounded-full bg-univalle-gold-soft blur-3xl opacity-70" aria-hidden="true"/>

        <div className="container-page relative py-14 lg:py-20 grid lg:grid-cols-12 gap-10 items-center">
          {/* Columna izquierda: storytelling */}
          <section className="hidden lg:block lg:col-span-6 animate-slide-up">
            <span className="eyebrow">
              <span className="w-1.5 h-1.5 rounded-full bg-univalle-red"/> Inicia tu sesión
            </span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-univalle-ink leading-[1.05] text-balance font-display">
              Bienvenido de vuelta al{' '}
              <span className="bg-gradient-to-r from-univalle-red to-univalle-red-deep bg-clip-text text-transparent">Campus Virtual</span>.
            </h1>
            <p className="mt-5 text-lg text-univalle-ink-soft max-w-md">
              Ingresa con tu código de estudiante para continuar con tus materias, entregas y notas.
            </p>

            <ul className="mt-9 space-y-5 max-w-md">
              {[
                ['Tus entregas, siempre a la mano', 'Sube archivos en PDF o DOCX hasta 50 MB.', 'upload'],
                ['Notificaciones cuando algo vence', 'Recibe avisos antes de que cierre un plazo.', 'bell'],
              ].map(([t, d, ic]) => (
                <li key={t} className="flex gap-4">
                  <span className="w-11 h-11 rounded-2xl bg-white border border-univalle-line text-univalle-red-deep flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Icon name={ic}/>
                  </span>
                  <div>
                    <p className="font-bold text-univalle-ink">{t}</p>
                    <p className="text-sm text-univalle-ink-soft mt-0.5">{d}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 inline-flex items-center gap-3 bg-white rounded-2xl border border-univalle-line shadow-soft px-4 py-3">
              <Icon name="shield" className="w-5 h-5 text-state-success-text"/>
              <p className="text-sm text-univalle-ink-soft">
                <strong className="text-univalle-ink">Tu información viaja cifrada.</strong> Nunca compartas tu contraseña por correo o redes.
              </p>
            </div>
          </section>

          {/* Columna derecha: tarjeta de login */}
          <section className="lg:col-span-6 animate-pop-in">
            <div className="bg-white rounded-3xl shadow-card-hover border border-univalle-line p-7 md:p-10 max-w-md w-full mx-auto lg:mx-auto relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 chip bg-univalle-ink text-white border-univalle-ink">
                <Icon name="lock" className="w-3 h-3"/> Acceso seguro
              </div>

              <div className="flex flex-col items-center text-center mb-6">
                <div className="w-16 h-16 rounded-2xl bg-white border border-univalle-line shadow-pop p-1.5 flex items-center justify-center mb-4">
                  <img src="/univalle.png" alt="Escudo Universidad del Valle" className="w-full h-full object-contain"/>
                </div>
                <h2 className="text-2xl md:text-[26px] font-extrabold text-univalle-ink font-display">
                  Hola, qué bueno verte
                </h2>
                <p className="text-univalle-ink-soft text-sm mt-1.5">
                  Ingresa con tu código de estudiante para continuar.
                </p>
              </div>

              {sessionExpired && (
                <div
                  role="status"
                  className="mb-5 rounded-xl border border-state-warn-text/20 bg-state-warn-bg text-state-warn-text p-3.5 text-sm flex gap-3 items-start animate-fade-in"
                >
                  <Icon name="clock" className="w-5 h-5 mt-0.5 flex-shrink-0"/>
                  <div>
                    <p className="font-bold">Tu sesión cerró por inactividad</p>
                    <p className="mt-0.5">Si estabas enviando un formulario, puede que necesites repetir ese paso. Vuelve a ingresar para continuar.</p>
                  </div>
                </div>
              )}

              {error && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-state-danger-text/20 bg-state-danger-bg text-state-danger-text p-3.5 text-sm flex gap-3 items-start animate-fade-in"
                >
                  <Icon name="bell" className="w-5 h-5 mt-0.5 flex-shrink-0"/>
                  <div>
                    <p className="font-bold">{error.title}</p>
                    <p className="mt-0.5">{error.message}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Código de estudiante */}
                <div>
                  <label htmlFor="code" className="block text-sm font-semibold text-univalle-ink mb-1.5">
                    Código de estudiante
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-univalle-muted pointer-events-none">
                      <Icon name="user" className="w-4 h-4"/>
                    </span>
                    <input
                      id="code"
                      name="code"
                      type="text"
                      inputMode="numeric"
                      autoComplete="username"
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      aria-describedby="code-hint"
                      aria-invalid={error?.focus === 'code'}
                      className="w-full rounded-xl border border-univalle-line bg-univalle-cream/40 pl-10 pr-3.5 py-3 text-univalle-ink placeholder:text-univalle-subtle focus:bg-white focus:border-univalle-red focus:ring-4 focus:ring-univalle-red/10"
                      placeholder="2060071-3743"
                    />
                  </div>
                  <p id="code-hint" className="mt-1.5 text-xs text-univalle-muted">
                    Formato: 7 dígitos, guion, 4 dígitos (ej. 2060071-3743).
                  </p>
                </div>

                {/* Contraseña */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label htmlFor="pwd" className="block text-sm font-semibold text-univalle-ink">
                      Contraseña
                    </label>
                    <a href="#recuperar" className="text-sm font-semibold text-univalle-red-deep hover:underline">
                      ¿La olvidaste?
                    </a>
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-univalle-muted pointer-events-none">
                      <Icon name="lock" className="w-4 h-4"/>
                    </span>
                    <input
                      id="pwd"
                      name="password"
                      type={showPwd ? 'text' : 'password'}
                      autoComplete="current-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-invalid={error?.focus === 'pwd'}
                      className="w-full rounded-xl border border-univalle-line bg-univalle-cream/40 pl-10 pr-12 py-3 text-univalle-ink focus:bg-white focus:border-univalle-red focus:ring-4 focus:ring-univalle-red/10"
                      placeholder="Escribe tu contraseña"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPwd((v) => !v)}
                      className="absolute inset-y-0 right-2 my-1 px-2 rounded-lg text-univalle-muted hover:text-univalle-ink hover:bg-univalle-surface"
                      aria-pressed={showPwd}
                      aria-label={showPwd ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    >
                      <Icon name={showPwd ? 'eyeOff' : 'eye'} className="w-4 h-4"/>
                    </button>
                  </div>
                  <p className="mt-1.5 text-xs text-univalle-muted">Es la misma que usas en tu correo institucional.</p>
                </div>

                <label className="flex items-center gap-2 text-sm text-univalle-ink-soft select-none">
                  <input
                    type="checkbox"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                    className="rounded border-univalle-line-strong text-univalle-red focus:ring-univalle-red/30"
                  />
                  Mantenerme conectado en este equipo
                </label>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full text-base py-3"
                >
                  {loading ? (
                    <>
                      <span className="animate-pulse">Entrando…</span>
                    </>
                  ) : (
                    <>
                      Ingresar al Campus
                      <Icon name="arrowRight" className="w-4 h-4"/>
                    </>
                  )}
                </button>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-1 text-sm">
                  <button type="button" className="inline-flex items-center gap-1.5 text-univalle-ink-soft hover:text-univalle-ink underline underline-offset-4">
                    <Icon name="globe" className="w-4 h-4"/> Español – Internacional (es)
                  </button>
                  <a href="#cookies" className="inline-flex items-center gap-1.5 text-univalle-ink-soft hover:text-univalle-ink underline underline-offset-4">
                    <Icon name="shield" className="w-4 h-4"/> Aviso de cookies
                  </a>
                </div>
              </form>

              <div className="mt-7 pt-5 border-t border-univalle-line text-center text-sm text-univalle-ink-soft">
                ¿Eres aspirante o invitado?{' '}
                <Link to="/" className="font-semibold text-univalle-red-deep hover:underline">
                  Vuelve al inicio público
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
