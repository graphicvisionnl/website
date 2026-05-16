import { motion } from 'framer-motion'
import { AnimatedWords, FadeIn } from './AnimatedText'

const steps = [
  {
    number: '01',
    title: 'Kennismaking',
    description: 'We beginnen met een gratis gesprek. We leren jouw bedrijf, doelen en doelgroep kennen — zodat we écht begrijpen wat jij nodig hebt.',
  },
  {
    number: '02',
    title: 'Strategie & Ontwerp',
    description: 'Op basis van jouw input bouwen we een visuele strategie. Design is communicatie — elk element heeft een reden.',
  },
  {
    number: '03',
    title: 'Bouwen & Testen',
    description: 'Wij bouwen jouw website snel, schoon en mobiel-vriendelijk. Alles wordt grondig getest op alle apparaten voor we live gaan.',
  },
  {
    number: '04',
    title: 'Launch & Groei',
    description: 'We gaan live — maar stoppen daar niet. We staan klaar voor aanpassingen en advies zodat jouw merk blijft groeien.',
  },
]

export default function Process() {
  return (
    <section style={{ background: '#ffffff', borderTop: '1px solid #e8e8e6', borderBottom: '1px solid #e8e8e6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6rem) 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(2rem, 4vw, 3.5rem)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                  Hoe wij werken
                </span>
              </div>
            </FadeIn>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#0a0a0a',
              margin: 0,
            }}>
              <AnimatedWords text="Van idee naar impact in 4 stappen." delay={0.1} />
            </h2>
          </div>
        </div>

        {/* Steps in a row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', position: 'relative' }} className="process-grid">
          {/* Connecting line */}
          <div style={{
            position: 'absolute',
            top: '28px',
            left: '12%',
            right: '12%',
            height: '1px',
            background: 'linear-gradient(to right, #e0e0e0, #ff794f, #e0e0e0)',
            zIndex: 0,
          }} className="process-line" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{ padding: '0 1.5rem 0 0', position: 'relative', zIndex: 1 }}
            >
              {/* Step number circle */}
              <div style={{
                width: '52px',
                height: '52px',
                borderRadius: '50%',
                background: i === 0 ? '#ff794f' : '#ffffff',
                border: `2px solid ${i === 0 ? '#ff794f' : '#e0e0e0'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Syne',
                fontWeight: 800,
                fontSize: '14px',
                color: i === 0 ? '#ffffff' : '#aaa',
                marginBottom: '1.5rem',
                transition: 'all 0.3s',
              }}>
                {step.number}
              </div>

              <h3 style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: '#0a0a0a',
                margin: '0 0 0.6rem',
              }}>
                {step.title}
              </h3>

              <p style={{
                color: '#888',
                fontSize: '0.875rem',
                lineHeight: 1.7,
                fontFamily: 'Inter',
                margin: 0,
              }}>
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mockup video showcase */}
        <FadeIn delay={0.3}>
          <div style={{ marginTop: '3.5rem', borderRadius: '12px', overflow: 'hidden', border: '1px solid #e8e8e6', background: '#f8f8f6' }}>
            <div style={{ padding: '1rem 1.25rem', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #e8e8e6' }}>
              {['#ff5f57', '#febc2e', '#28c840'].map((c) => (
                <div key={c} style={{ width: '10px', height: '10px', borderRadius: '50%', background: c }} />
              ))}
              <div style={{ flex: 1, height: '24px', background: '#e8e8e6', borderRadius: '4px', marginLeft: '8px' }} />
            </div>
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ width: '100%', display: 'block', maxHeight: '400px', objectFit: 'cover' }}
            >
              <source src="/mockup-video.mp4" type="video/mp4" />
            </video>
          </div>
        </FadeIn>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; gap: 2rem !important; }
          .process-line { display: none !important; }
        }
        @media (max-width: 480px) {
          .process-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
