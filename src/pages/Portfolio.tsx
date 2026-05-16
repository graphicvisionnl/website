import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { AnimatedWords, FadeIn } from '../components/AnimatedText'
import CTABanner from '../components/CTABanner'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

const categories = ['Alle', 'Webshop', 'Webdesign']

function TiltCard({ children }: { children: React.ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 20 })
  const sy = useSpring(y, { stiffness: 200, damping: 20 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5])

  return (
    <motion.div
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

export default function Portfolio() {
  const [active, setActive] = useState('Alle')

  const filtered = active === 'Alle' ? projects : projects.filter(p => p.tags.includes(active))

  return (
    <main style={{ background: '#080808' }}>
      {/* Page hero */}
      <section style={{ padding: 'clamp(7rem, 14vw, 10rem) 2rem clamp(2.5rem, 5vw, 4rem)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: 0, left: '40%', width: '500px', height: '400px',
          background: 'radial-gradient(ellipse, rgba(255,121,79,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
          <FadeIn>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
              <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
              <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                Portfolio
              </span>
            </div>
          </FadeIn>

          <h1 style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
            lineHeight: 1.0,
            letterSpacing: '-0.03em',
            color: '#ffffff',
            margin: '0 0 1rem',
            maxWidth: '700px',
          }}>
            <AnimatedWords text="Projecten die spreken voor zich." delay={0} />
          </h1>

          <FadeIn delay={0.4}>
            <p style={{ color: '#555', fontSize: '1rem', fontFamily: 'Inter', lineHeight: 1.7, maxWidth: '460px', margin: 0 }}>
              Van webshops tot persoonlijke portfolio's — elk project is maatwerk, gebouwd met strategie en oog voor detail.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter + grid */}
      <section style={{ padding: '0 2rem clamp(3.5rem, 7vw, 6rem)', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
        <FadeIn>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '7px 18px',
                  borderRadius: '100px',
                  border: `1px solid ${active === cat ? '#ff794f' : '#222'}`,
                  background: active === cat ? '#ff794f' : 'transparent',
                  color: active === cat ? '#080808' : '#666',
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 600,
                  fontSize: '13px',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeIn>

        <motion.div layout style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }} className="portfolio-full-grid">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <TiltCard>
                  <div style={{ background: '#0e0e0e', borderRadius: '12px', overflow: 'hidden', border: '1px solid #1a1a1a' }}>
                    {/* Screenshot — links naar detail pagina */}
                    <Link to={`/portfolio/${project.slug}`} style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', height: '240px' }}>
                      <img
                        src={project.image}
                        alt={project.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform 0.5s ease' }}
                        onMouseEnter={(e) => { (e.target as HTMLElement).style.transform = 'scale(1.04)' }}
                        onMouseLeave={(e) => { (e.target as HTMLElement).style.transform = 'scale(1)' }}
                      />
                      {/* Tags */}
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.4rem' }}>
                        {project.tags.slice(0, 2).map((tag) => (
                          <span key={tag} style={{
                            background: 'rgba(8,8,8,0.85)',
                            border: '1px solid #333',
                            color: '#aaa',
                            padding: '3px 10px',
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            backdropFilter: 'blur(4px)',
                          }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </Link>

                    {/* Content */}
                    <div style={{ padding: '1.25rem 1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                        <div>
                          <div style={{ color: '#444', fontSize: '11px', fontFamily: 'Inter', marginBottom: '0.2rem' }}>
                            {project.category}
                          </div>
                          <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.15rem', color: '#ffffff', margin: 0, letterSpacing: '-0.01em' }}>
                            <Link to={`/portfolio/${project.slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                              {project.name}
                            </Link>
                          </h3>
                        </div>
                        <div style={{ display: 'flex', gap: '0.5rem', flexShrink: 0 }}>
                          <Link
                            to={`/portfolio/${project.slug}`}
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              color: '#888',
                              textDecoration: 'none',
                              fontFamily: 'Inter',
                              fontWeight: 500,
                              fontSize: '12px',
                              border: '1px solid #222',
                              padding: '5px 10px',
                              borderRadius: '5px',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.color = '#fff'
                              el.style.borderColor = '#444'
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.color = '#888'
                              el.style.borderColor = '#222'
                            }}
                          >
                            Meer info
                          </Link>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '4px',
                              color: '#ff794f',
                              textDecoration: 'none',
                              fontFamily: 'Inter',
                              fontWeight: 500,
                              fontSize: '12px',
                              border: '1px solid #ff794f33',
                              padding: '5px 10px',
                              borderRadius: '5px',
                              transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.background = '#ff794f15'
                            }}
                            onMouseLeave={(e) => {
                              const el = e.currentTarget as HTMLElement
                              el.style.background = 'transparent'
                            }}
                          >
                            Live ↗
                          </a>
                        </div>
                      </div>
                      <p style={{ color: '#444', fontSize: '0.85rem', fontFamily: 'Inter', lineHeight: 1.6, margin: 0 }}>
                        {project.intro}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      <CTABanner />
      <Footer />

      <style>{`
        @media (max-width: 640px) {
          .portfolio-full-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
