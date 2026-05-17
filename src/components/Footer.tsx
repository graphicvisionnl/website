import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      style={{
        borderTop: '1px solid #1a1a1a',
        background: '#080808',
        padding: 'clamp(3rem, 6vw, 5rem) 2rem 2rem',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '4rem' }} className="footer-grid">
          {/* Brand */}
          <div>
            <Link to="/">
              <img src="/logo-white.png" alt="Graphic Vision" style={{ height: '28px', marginBottom: '1.25rem' }} />
            </Link>
            <p style={{ color: '#555', fontSize: '14px', fontFamily: 'Inter', lineHeight: 1.7, margin: '0 0 1.25rem', maxWidth: '280px' }}>
              Wij bouwen websites die merken transformeren. Van strategie tot lancering.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/graphicvision.nl/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid #1d1d1d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                  fontSize: '16px',
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#ff794f'; el.style.color = '#ff794f' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#1d1d1d'; el.style.color = '#555' }}
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/graphic-vision-nl/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  border: '1px solid #1d1d1d',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#555',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, color 0.2s',
                  fontSize: '16px',
                }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#ff794f'; el.style.color = '#ff794f' }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#1d1d1d'; el.style.color = '#555' }}
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '13px', color: '#ffffff', margin: '0 0 1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Pagina's
            </h4>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {[
                { label: 'Home', path: '/' },
                { label: 'Portfolio', path: '/portfolio' },
                { label: 'Offerte aanvragen', path: '/contact' },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  style={{ color: '#555', fontSize: '14px', fontFamily: 'Inter', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ffffff' }}
                  onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#555' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Diensten */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '13px', color: '#ffffff', margin: '0 0 1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Diensten
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['Webdesign', 'Webshop', 'Redesign', 'Strategie'].map((s) => (
                <span key={s} style={{ color: '#555', fontSize: '14px', fontFamily: 'Inter' }}>{s}</span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '13px', color: '#ffffff', margin: '0 0 1rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <a href="mailto:hello@graphicvision.nl" style={{ color: '#555', fontSize: '14px', fontFamily: 'Inter', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ffffff' }}
                onMouseLeave={(e) => { (e.target as HTMLElement).style.color = '#555' }}
              >
                hello@graphicvision.nl
              </a>
              <span style={{ color: '#555', fontSize: '14px', fontFamily: 'Inter' }}>Amsterdam, Nederland</span>
              <a
                href="https://www.trustpilot.com/review/graphicvision.nl"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#555', fontSize: '14px', fontFamily: 'Inter', textDecoration: 'none', transition: 'color 0.2s', display: 'flex', alignItems: 'center', gap: '4px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00b67a' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                Trustpilot reviews
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: '#333', fontSize: '13px', fontFamily: 'Inter', margin: 0 }}>
            © {year} Graphic Vision. KvK: 88860973
          </p>
          <p style={{ color: '#333', fontSize: '13px', fontFamily: 'Inter', margin: 0 }}>
            Gebouwd door Graphic Vision
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
