export default function Marquee() {
  const items = [
    'Webdesign', 'Webshop', 'Redesign', 'Strategie', 'Branding', 'UX Design',
    'Webdesign', 'Webshop', 'Redesign', 'Strategie', 'Branding', 'UX Design',
  ]

  return (
    <div
      style={{
        background: '#0f0f0f',
        borderTop: '1px solid #1d1d1d',
        borderBottom: '1px solid #1d1d1d',
        padding: '1.2rem 0',
        overflow: 'hidden',
      }}
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
            <span
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
                color: '#444444',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                padding: '0 2rem',
              }}
            >
              {item}
            </span>
            <span style={{ color: '#ff794f', fontSize: '0.5rem' }}>●</span>
          </span>
        ))}
      </div>
    </div>
  )
}
