import { motion } from 'framer-motion'
import { FadeIn } from './AnimatedText'

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < count ? '#00b67a' : '#333'}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  )
}

const reviews = [
  {
    name: 'Thomas B.',
    company: 'SequenceFlow',
    rating: 5,
    text: 'Graphic Vision heeft ons complexe AI-product perfect vertaald naar een helder en professioneel website. Snelle communicatie, scherp design, echt meedenken.',
  },
  {
    name: 'Laura M.',
    company: 'Sustana',
    rating: 5,
    text: 'Precies wat we zochten. Een strakke website die uitstraalt waar wij voor staan. De samenwerking was fijn en alles werd op tijd opgeleverd.',
  },
  {
    name: 'Mark V.',
    company: 'Noctis Essentials',
    rating: 5,
    text: 'Onze webshop is volledig nieuw leven ingeblazen. Professioneel, snel en echt oog voor detail. Al meer dan 5.000 bestellingen na de relaunch.',
  },
]

export default function TrustSection() {
  return (
    <section style={{ background: '#080808', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(3.5rem, 7vw, 6rem) 2rem' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'clamp(2rem, 4vw, 3rem)', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                  Klantervaringen
                </span>
              </div>
            </FadeIn>
            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: 0,
            }}>
              Onze klanten zijn enthousiast
            </h2>
          </div>

          <FadeIn delay={0.2}>
            <a
              href="https://www.trustpilot.com/review/graphicvision.nl"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                background: '#111',
                border: '1px solid #1d1d1d',
                borderRadius: '10px',
                padding: '0.75rem 1.25rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#333' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#1d1d1d' }}
            >
              <div style={{ display: 'flex', gap: '2px' }}>
                {[1,2,3,4,5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#00b67a">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                ))}
              </div>
              <span style={{ color: '#888', fontSize: '13px', fontFamily: 'Inter' }}>
                <span style={{ color: '#fff', fontWeight: 600 }}>Uitstekend</span> op Trustpilot ↗
              </span>
            </a>
          </FadeIn>
        </div>

        {/* Reviews */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }} className="reviews-grid">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              style={{
                background: '#0e0e0e',
                border: '1px solid #1a1a1a',
                borderRadius: '10px',
                padding: '1.25rem',
              }}
            >
              <Stars count={review.rating} />
              <p style={{
                color: '#bbb',
                fontFamily: 'Inter',
                fontSize: '0.9rem',
                lineHeight: 1.65,
                margin: '0.75rem 0 1rem',
                fontStyle: 'italic',
              }}>
                "{review.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  background: '#ff794f22', border: '1px solid #ff794f44',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#ff794f', fontFamily: 'Syne', fontWeight: 700, fontSize: '13px',
                }}>
                  {review.name[0]}
                </div>
                <div>
                  <div style={{ color: '#fff', fontFamily: 'Inter', fontWeight: 600, fontSize: '13px' }}>{review.name}</div>
                  <div style={{ color: '#444', fontFamily: 'Inter', fontSize: '11px' }}>{review.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
