import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AnimatedWords, FadeIn } from './AnimatedText'

const featured = [
  {
    slug: 'noctis',
    name: 'Noctis',
    category: 'E-commerce & Webdesign',
    sub: 'Meer dan 5.000 klanten bediend.',
    image: '/portfolio/noctis.webp',
  },
  {
    slug: 'sequenceflow',
    name: 'SequenceFlow',
    category: 'Webdesign & Webdevelopment',
    sub: 'AI automation platform, helder vertaald.',
    image: '/portfolio/sequenceflow.webp',
  },
  {
    slug: 'batavia-wonen',
    name: 'Batavia Wonen',
    category: 'Webdesign & Webdevelopment',
    sub: 'Exclusief woonproject in Lelystad.',
    image: '/portfolio/batavia-wonen.webp',
  },
]

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6])

  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 800 }}
      onMouseMove={(e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect()
        x.set((e.clientX - rect.left) / rect.width - 0.5)
        y.set((e.clientY - rect.top) / rect.height - 0.5)
      }}
      onMouseLeave={() => { x.set(0); y.set(0) }}
      whileHover="hover"
    >
      {children}
    </motion.div>
  )
}

export default function PortfolioPreview() {
  return (
    <section style={{ background: '#080808', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(2.5rem, 5vw, 4rem) 2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.85rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>Portfolio</span>
              </div>
            </FadeIn>
            <h2 style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', lineHeight: 1.05, letterSpacing: '-0.03em', color: '#ffffff', margin: 0 }}>
              <AnimatedWords text="Ons werk spreekt voor zich." delay={0.1} />
            </h2>
          </div>
          <FadeIn delay={0.3}>
            <Link to="/portfolio" style={{ color: '#555', textDecoration: 'none', fontFamily: 'Inter', fontSize: '14px', fontWeight: 500, transition: 'color 0.2s', flexShrink: 0 }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555' }}>
              Bekijk alle 6 projecten →
            </Link>
          </FadeIn>
        </div>

        {/* Large featured + 2 smaller */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1rem' }} className="portfolio-preview-grid">
          {/* Large left */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <TiltCard>
              <Link to={`/portfolio/${featured[0].slug}`} style={{ display: 'block', textDecoration: 'none', borderRadius: '12px', overflow: 'hidden', background: '#111' }}>
                <div style={{ overflow: 'hidden', height: '320px' }}>
                  <img src={featured[0].image} alt={featured[0].name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.6s ease' }}
                    onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.04)' }}
                    onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)' }} />
                </div>
                <div style={{ padding: '1.1rem 1.4rem', background: '#111', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ color: '#555', fontSize: '12px', fontFamily: 'Inter', marginBottom: '0.15rem' }}>{featured[0].category}</div>
                    <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.25rem', color: '#ffffff', margin: '0 0 0.2rem', letterSpacing: '-0.01em' }}>{featured[0].name}</h3>
                    <p style={{ color: '#555', fontSize: '13px', fontFamily: 'Inter', margin: 0 }}>{featured[0].sub}</p>
                  </div>
                  <span style={{ color: '#ff794f', fontSize: '20px', lineHeight: 1 }}>↗</span>
                </div>
              </Link>
            </TiltCard>
          </motion.div>

          {/* Right: 2 stacked */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {featured.slice(1).map((project, i) => (
              <motion.div key={project.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.1, duration: 0.7 }} style={{ flex: 1 }}>
                <TiltCard>
                  <Link to={`/portfolio/${project.slug}`} style={{ display: 'block', textDecoration: 'none', borderRadius: '12px', overflow: 'hidden', background: '#111', height: '100%' }}>
                    <div style={{ overflow: 'hidden', height: '148px' }}>
                      <img src={project.image} alt={project.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.6s ease' }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.05)' }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)' }} />
                    </div>
                    <div style={{ padding: '0.9rem 1.1rem', background: '#111', borderTop: '1px solid #1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ color: '#444', fontSize: '11px', fontFamily: 'Inter', marginBottom: '0.1rem' }}>{project.category}</div>
                        <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1rem', color: '#ffffff', margin: 0 }}>{project.name}</h3>
                      </div>
                      <span style={{ color: '#ff794f', fontSize: '16px' }}>↗</span>
                    </div>
                  </Link>
                </TiltCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .portfolio-preview-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
