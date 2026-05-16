import { AnimatedWords, FadeIn } from './AnimatedText'
import GrowthAnimation from './GrowthAnimation'

export default function Mission() {
  return (
    <section style={{ background: '#f8f8f6', borderTop: '1px solid #e8e8e6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6rem) 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="mission-grid">
          <div>
            <FadeIn delay={0}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                  Onze aanpak
                </span>
              </div>
            </FadeIn>

            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#0a0a0a',
              margin: '0 0 1.25rem',
            }}>
              <AnimatedWords text="Wij verkopen geen diensten." delay={0.1} />
              <br />
              <AnimatedWords text="Wij transformeren merken." delay={0.3} style={{ color: '#ff794f' }} />
            </h2>

            <FadeIn delay={0.5}>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: '0 0 1rem' }}>
                Veel bureaus verkopen losse diensten: een webdesign hier, een webshop daar. Wij denken anders. Jouw website is het hart van je merk. Het eerste wat mensen zien, het laatste wat ze onthouden.
              </p>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: 0 }}>
                Daarom bouwen wij niet alleen een website. We bouwen een fundament voor jouw online groei. Op maat, met strategie en met oog voor detail.
              </p>
            </FadeIn>
          </div>

          <FadeIn delay={0.2} direction="left">
            <GrowthAnimation />
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mission-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
