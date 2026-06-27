import { useState } from 'react'
import { ShieldCheck, User, Lock, LogIn } from 'lucide-react'
import Logo from '../components/ui/Logo.jsx'
import Carrusel from '../components/ui/Carrusel.jsx'
import { useAuth } from '../hooks/useAuth.js'
import '../styles/home.css'

const chips = (arr) => (
  <div className="carrusel__chips">
    {arr.map((v) => (
      <span className="carrusel__chip" key={v}>{v}</span>
    ))}
  </div>
)

/* Orbe BanBif — decoración del panel login */
const Orb = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" aria-hidden="true">
    <defs>
      <radialGradient id="orb-g" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#00c853" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#7b2d8b" stopOpacity="0" />
      </radialGradient>
    </defs>
    <circle cx="100" cy="100" r="100" fill="url(#orb-g)" />
  </svg>
)

/* ── SVGs de slides con paleta BanBif ── */
const SvgMensaje = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-msg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1a0533" />
        <stop offset="0.6" stopColor="#7b2d8b" />
        <stop offset="1" stopColor="#9c27b0" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-msg)" />
    <circle cx="840" cy="150" r="175" fill="#ffffff" opacity="0.05" />
    <circle cx="900" cy="560" r="120" fill="#00c853" opacity="0.1" />
    <g transform="translate(660,250)" fill="#ffffff" opacity="0.9">
      <path d="M120 0 C134 70 170 106 240 120 C170 134 134 170 120 240 C106 170 70 134 0 120 C70 106 106 70 120 0 Z" />
      <path d="M250 160 c6 28 22 44 50 50 c-28 6 -44 22 -50 50 c-6 -28 -22 -44 -50 -50 c28 -6 44 -22 50 -50 Z" opacity="0.7" />
    </g>
    <circle cx="750" cy="500" r="60" fill="#00c853" opacity="0.15" />
  </svg>
)

const SvgMision = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-mis" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1a0533" />
        <stop offset="1" stopColor="#7b2d8b" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-mis)" />
    <circle cx="840" cy="150" r="170" fill="#9c27b0" opacity="0.2" />
    <g transform="translate(650,200)">
      <circle cx="130" cy="130" r="125" fill="none" stroke="#ffffff" strokeWidth="16" opacity="0.85" />
      <circle cx="130" cy="130" r="80"  fill="none" stroke="#00c853"  strokeWidth="16" opacity="0.9" />
      <circle cx="130" cy="130" r="34"  fill="#00c853" />
      <path d="M-10 290 L150 130" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" />
      <path d="M120 130 h34 v34" fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

const SvgVision = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-vis" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#2d1250" />
        <stop offset="1" stopColor="#7b2d8b" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-vis)" />
    <circle cx="850" cy="540" r="150" fill="#00c853" opacity="0.08" />
    <g transform="translate(620,230)">
      <path d="M0 90 C90 -12 270 -12 360 90 C270 192 90 192 0 90 Z" fill="#ffffff" opacity="0.92" />
      <circle cx="180" cy="90" r="54" fill="#1a0533" />
      <circle cx="180" cy="90" r="26" fill="#00c853" />
      <circle cx="198" cy="74" r="9"  fill="#ffffff" />
    </g>
  </svg>
)

const SvgValores = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-val" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1a0533" />
        <stop offset="1" stopColor="#9c27b0" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-val)" />
    <circle cx="840" cy="150" r="170" fill="#00c853" opacity="0.08" />
    <g transform="translate(660,210)" fill="#ffffff">
      <path d="M40 60 H200 L230 120 L120 250 L10 120 Z" opacity="0.92" />
      <path d="M40 60 L70 120 H10 Z" opacity="0.55" />
      <path d="M200 60 L170 120 H230 Z" opacity="0.55" />
      <path d="M70 120 H170 L120 250 Z" fill="#00c853" opacity="0.7" />
    </g>
  </svg>
)

const SvgLavado = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-lav" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0d1f3c" />
        <stop offset="1" stopColor="#2d1250" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-lav)" />
    <circle cx="800" cy="120" r="150" fill="#7b2d8b" opacity="0.18" />
    <g transform="translate(700,360)">
      <path d="M85 0 L160 30 V96 C160 150 128 176 85 192 C42 176 10 150 10 96 V30 Z" fill="#ffffff" opacity="0.92" />
      <path d="M52 98 l24 24 l44 -56" fill="none" stroke="#00c853" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

const SvgPadre = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-pad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0"    stopColor="#1a0533" />
        <stop offset="0.55" stopColor="#7b2d8b" />
        <stop offset="1"    stopColor="#9c27b0" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-pad)" />
    <circle cx="820" cy="130" r="150" fill="#00c853" opacity="0.1" />
    <g transform="translate(700,360)">
      <rect x="10"  y="70"  width="170" height="120" rx="10" fill="#ffffff" opacity="0.92" />
      <rect x="80"  y="70"  width="30"  height="120" fill="#00c853" />
      <rect x="-4"  y="48"  width="198" height="34"  rx="8" fill="#ffffff" />
      <rect x="80"  y="48"  width="30"  height="34"  fill="#00c853" />
      <circle cx="78"  cy="40" r="20" fill="none" stroke="#ffffff" strokeWidth="12" />
      <circle cx="112" cy="40" r="20" fill="none" stroke="#ffffff" strokeWidth="12" />
    </g>
  </svg>
)

const SvgBandera = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-ban" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1a0533" />
        <stop offset="1" stopColor="#4a1060" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-ban)" />
    <circle cx="850" cy="520" r="140" fill="#7b2d8b" opacity="0.15" />
    <g transform="translate(700,250)">
      <rect x="0" y="0" width="10" height="230" rx="5" fill="#00c853" />
      <circle cx="5" cy="0" r="9" fill="#00c853" />
      <path d="M10 14 h70 v120 h-70 Z" fill="#7b2d8b" />
      <path d="M80 14 h70 v120 h-70 Z" fill="#ffffff" />
      <path d="M150 14 h70 v120 h-70 Z" fill="#7b2d8b" />
    </g>
  </svg>
)

const SvgMetas = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-met" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#1a0533" />
        <stop offset="1" stopColor="#2d1250" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-met)" />
    <circle cx="800" cy="130" r="150" fill="#9c27b0" opacity="0.15" />
    <g transform="translate(700,360)">
      <rect x="0"   y="80"  width="40" height="80"  rx="6" fill="#9c27b0" opacity="0.85" />
      <rect x="60"  y="50"  width="40" height="110" rx="6" fill="#7b2d8b" opacity="0.9" />
      <rect x="120" y="20"  width="40" height="140" rx="6" fill="#ffffff" opacity="0.92" />
      <path d="M10 70 L80 40 L140 12" fill="none" stroke="#00c853" strokeWidth="8" strokeLinecap="round" />
      <path d="M120 12 h26 v26" fill="none" stroke="#00c853" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

const FRASES_DIA = [
  'El mejor servicio empieza con una sonrisa. ¡Hagamos crecer al Perú emprendedor!',
  'Cada crédito bien evaluado es un sueño que despega. ¡Excelente semana!',
  'Tu cercanía con el cliente es nuestra mayor fortaleza. ¡A por las metas!',
  'Disciplina y constancia: así se construye una cartera sana.',
  'Hoy es un gran día para superar tus objetivos. ¡Vamos con todo!',
  'Trabajo en equipo: juntos llegamos más lejos. ¡Gracias por tu compromiso!',
  'Cierra la semana con orgullo: tu esfuerzo transforma vidas.',
]
const fraseDelDia = FRASES_DIA[new Date().getDay()]

const VALORES = ['Integridad', 'Compromiso', 'Trabajo en equipo', 'Innovación', 'Cercanía', 'Responsabilidad']

const SLIDES = [
  { badge: 'Mensaje del día', titulo: 'Hoy es un buen día', subtitulo: fraseDelDia, svg: SvgMensaje },
  {
    badge: 'Nuestra esencia', titulo: 'Misión',
    subtitulo: 'Impulsar el desarrollo de los emprendedores del Perú con soluciones financieras inclusivas, ágiles y responsables.',
    svg: SvgMision, extra: chips(['Inclusión', 'Agilidad', 'Responsabilidad']),
  },
  {
    badge: 'Nuestra esencia', titulo: 'Visión',
    subtitulo: 'Ser el core financiero de referencia en microfinanzas, reconocido por su tecnología, cercanía y solidez.',
    svg: SvgVision, extra: chips(['Tecnología', 'Cercanía', 'Solidez']),
  },
  {
    badge: 'Nuestra esencia', titulo: 'Valores',
    subtitulo: 'Los principios que guían cada decisión.',
    svg: SvgValores, extra: chips(VALORES),
  },
  { badge: 'Hoy', titulo: 'Capacitación: Prevención de Lavado de Activos', subtitulo: 'Sesión obligatoria para asesores y administradores. Revisa tu correo institucional.', svg: SvgLavado },
  { badge: 'Campaña', titulo: 'Campaña Día del Padre', subtitulo: 'Impulsa los créditos de consumo y microempresa durante todo junio.', svg: SvgPadre },
  { badge: 'Junio', titulo: 'Junio, Mes de la Bandera', subtitulo: 'Orgullosos de servir al Perú emprendedor. ¡Feliz mes patrio!', svg: SvgBandera },
  { badge: 'Productividad', titulo: 'Metas del mes', subtitulo: 'Revisa tu avance de colocaciones y cumplimiento en el dashboard.', svg: SvgMetas },
]

export default function HomePage() {
  const { loading, error, iniciarSesion } = useAuth()
  const [dni, setDni]         = useState('')
  const [password, setPassword] = useState('')
  const [recordar, setRecordar] = useState(true)
  const [olvido, setOlvido]   = useState(false)

  function submit(e) {
    e.preventDefault()
    iniciarSesion(dni.trim(), password)
  }

  return (
    <div className="home">
      <div className="home__franja" />

      <header className="home-header">
        <Logo size={56} />
        <span className="home-header__chip">Sistema interno · Uso exclusivo del personal</span>
      </header>

      <div className="home-split">
        {/* Izquierda: carrusel */}
        <div className="split-info">
          <Carrusel slides={SLIDES} intervalo={6000} fill />
        </div>

        {/* Derecha: login */}
        <aside className="split-login">
          <Orb className="split-login__flor split-login__flor--1" />
          <Orb className="split-login__flor split-login__flor--2" />
          <div className="split-login__inner">
            <span className="split-login__secure">
              <ShieldCheck size={14} strokeWidth={2.6} /> Conexión segura
            </span>
            <h2>Inicia sesión</h2>
            <p className="split-login__sub">Acceso del personal · ingresa con tu DNI.</p>

            <form onSubmit={submit}>
              <div className="lp-field">
                <label htmlFor="dni">Número de DNI</label>
                <div className="lp-input">
                  <User className="lp-input__icon" size={18} />
                  <input id="dni" type="text" value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="Ej. 12345678" autoComplete="username" required />
                </div>
              </div>
              <div className="lp-field">
                <label htmlFor="pwd">Contraseña</label>
                <div className="lp-input">
                  <Lock className="lp-input__icon" size={18} />
                  <input id="pwd" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="(en desarrollo: tu DNI)" autoComplete="current-password" required />
                </div>
              </div>

              <div className="lp-row">
                <label>
                  <input type="checkbox" checked={recordar} onChange={(e) => setRecordar(e.target.checked)} />
                  Recordarme
                </label>
                <button type="button" className="lp-link" onClick={() => setOlvido((v) => !v)}>
                  ¿Olvidó su contraseña?
                </button>
              </div>

              {olvido && (
                <div className="lp-hint">
                  Contacta al administrador de tu agencia para restablecer tu contraseña.
                </div>
              )}
              {error && <div className="lp-error">{error}</div>}

              <button className="btn-login" type="submit" disabled={loading}>
                <LogIn size={18} strokeWidth={2.4} />
                {loading ? 'Ingresando…' : 'Iniciar sesión'}
              </button>
            </form>
          </div>
        </aside>
      </div>

      <footer className="home-footer-bar">
        <span>© 2026 BanBif · Core Financiero — Sistema interno</span>
        <span>
          <a href="#terminos">Términos</a> · <a href="#privacidad">Privacidad</a> ·{' '}
          <a href="#soporte">Soporte</a>
        </span>
      </footer>
    </div>
  )
}
