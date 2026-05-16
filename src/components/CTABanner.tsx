import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import MagneticButton from './MagneticButton'

export default function CTABanner() {
  return (
    <section
      style={{
        background: '#080808',
        borderTop: '1px solid #111',
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
        position: 'relative',
        overflow: 'hidden',
        textAlign: 'center',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(255,121,79,0.08) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '1.5rem' }}
        >
          <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
          <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
            Start vandaag
          </span>
          <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.04em',
            color: '#ffffff',
            margin: '0 0 1.25rem',
          }}
        >
          Klaar om te groeien?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25, duration: 0.6 }}
          style={{
            color: '#555',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            fontFamily: 'Inter',
            lineHeight: 1.7,
            margin: '0 0 2.5rem',
          }}
        >
          Plan een gratis kennismakingsgesprek en ontdek wat wij voor jouw merk kunnen doen. Geen verplichtingen, geen gedoe. Gewoon een eerlijk gesprek.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.6 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}
        >
          <MagneticButton>
            <Link
              to="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: '#ff794f',
                color: '#080808',
                padding: '18px 38px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                fontWeight: 700,
                fontFamily: 'Syne',
                transition: 'background 0.2s, transform 0.15s',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#e06035'
                el.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#ff794f'
                el.style.transform = 'translateY(0)'
              }}
            >
              Start jouw project →
            </Link>
          </MagneticButton>

          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['✓ Gratis gesprek', '✓ Reactie binnen 24 uur', '✓ Geen verplichtingen'].map((t) => (
              <span key={t} style={{ color: '#333', fontSize: '13px', fontFamily: 'Inter' }}>{t}</span>
            ))}
          </div>

          <a
            href="mailto:hello@graphicvision.nl"
            style={{
              color: '#333',
              fontFamily: 'Inter',
              fontSize: '14px',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#333' }}
          >
            Of mail ons direct: hello@graphicvision.nl
          </a>
        </motion.div>
      </div>
    </section>
  )
}
