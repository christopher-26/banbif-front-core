/**
 * Logo BanBif — isotipo rectangular con gradiente marino-violeta
 * y wordmark "BanBif" con acento verde lima.
 */
export default function Logo({ size = 44, wordmark = true, variant = 'dark' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#7b2d8b'
  const subColor  = variant === 'light' ? 'rgba(255,255,255,.8)' : '#6b5c7b'
  const nameSize  = Math.round(size * 0.5)
  const subSize   = Math.max(9, Math.round(size * 0.22))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      {/* Isotipo: rectángulo redondeado con degradado y "B" */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="BanBif"
        role="img"
      >
        <defs>
          <linearGradient id="bb-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#1a0533" />
            <stop offset="55%"  stopColor="#7b2d8b" />
            <stop offset="100%" stopColor="#9c27b0" />
          </linearGradient>
          {/* acento verde lima en esquina */}
          <linearGradient id="bb-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"   stopColor="#00c853" />
            <stop offset="100%" stopColor="#00e676" />
          </linearGradient>
        </defs>

        {/* Fondo degradado */}
        <rect x="2" y="2" width="44" height="44" rx="10" fill="url(#bb-grad)" />

        {/* Acento verde esquina superior derecha */}
        <circle cx="38" cy="10" r="7" fill="url(#bb-green)" opacity="0.9" />

        {/* Letras "Bb" en blanco */}
        <text
          x="24"
          y="32"
          textAnchor="middle"
          fontFamily="'Segoe UI', system-ui, sans-serif"
          fontWeight="900"
          fontSize="22"
          fill="#ffffff"
          letterSpacing="-1"
        >
          Bb
        </text>
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: nameSize,
              color: textColor,
              letterSpacing: '-0.5px',
            }}
          >
            BanBif
          </span>
          <span
            style={{
              fontSize: subSize,
              fontWeight: 700,
              color: subColor,
              letterSpacing: '1px',
            }}
          >
            CORE FINANCIERO
          </span>
        </span>
      )}
    </span>
  )
}
