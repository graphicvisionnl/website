import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import { FadeIn } from '../components/AnimatedText'
import Footer from '../components/Footer'

export default function PortfolioDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/portfolio" replace />

  const currentIndex = projects.findIndex((p) => p.slug === slug)
  const prev = projects[currentIndex - 1]
  const next = projects[currentIndex + 1]

  return (
    <main style={{ background: '#ffffff' }}>
      {/* Hero */}
      <section style={{ background: '#080808', padding: 'clamp(6rem, 12vw, 9rem) 2rem clamp(2.5rem, 5vw, 3.5rem)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <FadeIn>
            <Link
              to="/portfolio"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#555',
                textDecoration: 'none',
                fontFamily: 'Inter',
                fontSize: '13px',
                marginBottom: '2rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#fff' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#555' }}
            >
              ← Terug naar portfolio
            </Link>
          </FadeIn>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <FadeIn delay={0.1}>
                <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      background: '#ff794f15',
                      border: '1px solid #ff794f33',
                      color: '#ff794f',
                      padding: '4px 12px',
                      borderRadius: '100px',
                      fontSize: '12px',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </FadeIn>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  fontFamily: 'Syne, sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  lineHeight: 1.0,
                  letterSpacing: '-0.03em',
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                {project.name}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.6 }}
                style={{ color: '#555', fontFamily: 'Inter', fontSize: '1rem', margin: '0.75rem 0 0', maxWidth: '500px', lineHeight: 1.6 }}
              >
                {project.intro}
              </motion.p>
            </div>

            <motion.a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: '#ff794f',
                color: '#080808',
                padding: '13px 24px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontFamily: 'Syne',
                fontWeight: 700,
                fontSize: '15px',
                flexShrink: 0,
                transition: 'background 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e06035' }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#ff794f' }}
            >
              Bekijk live website ↗
            </motion.a>
          </div>
        </div>
      </section>

      {/* Full-width screenshot */}
      <div style={{ background: '#0a0a0a' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid #1a1a1a',
              boxShadow: '0 40px 80px rgba(0,0,0,0.5)',
              transform: 'translateY(40px)',
            }}
          >
            <img
              src={project.image}
              alt={`${project.name} website`}
              style={{ width: '100%', display: 'block', height: 'auto', maxHeight: '600px', objectFit: 'cover', objectPosition: 'top' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(4rem, 8vw, 7rem) 2rem clamp(3rem, 6vw, 5rem)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', alignItems: 'start' }} className="detail-grid">
          {/* Sidebar info */}
          <FadeIn>
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ marginBottom: '2rem' }}>
                <div style={{ color: '#999', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Diensten
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '1rem', color: '#0a0a0a', lineHeight: 1.6 }}>
                  {project.category}
                </div>
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <div style={{ color: '#999', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Categorieën
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{
                      background: '#f4f4f4',
                      color: '#444',
                      padding: '3px 10px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontFamily: 'Inter',
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <div style={{ color: '#999', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  Live website
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: '#ff794f',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    wordBreak: 'break-all',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'underline' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.textDecoration = 'none' }}
                >
                  {project.url.replace('https://', '')} ↗
                </a>
              </div>
            </div>
          </FadeIn>

          {/* Main text */}
          <div>
            <FadeIn delay={0.1}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  color: '#0a0a0a',
                  margin: '0 0 0.85rem',
                  letterSpacing: '-0.02em',
                }}>
                  Over dit project
                </h2>
                <p style={{ color: '#555', fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}>
                  {project.description}
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div style={{ marginBottom: '2.5rem' }}>
                <h2 style={{
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.7rem)',
                  color: '#0a0a0a',
                  margin: '0 0 0.85rem',
                  letterSpacing: '-0.02em',
                }}>
                  Wat wij hebben gedaan
                </h2>
                <p style={{ color: '#555', fontFamily: 'Inter', fontSize: '1.05rem', lineHeight: 1.75, margin: 0 }}>
                  {project.what}
                </p>
              </div>
            </FadeIn>

            {project.result && (
              <FadeIn delay={0.3}>
                <div style={{
                  background: '#f8f8f6',
                  borderLeft: '3px solid #ff794f',
                  borderRadius: '0 10px 10px 0',
                  padding: '1.25rem 1.5rem',
                }}>
                  <div style={{ color: '#ff794f', fontSize: '12px', fontFamily: 'Inter', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                    Resultaat
                  </div>
                  <p style={{ color: '#0a0a0a', fontFamily: 'Inter', fontSize: '1rem', lineHeight: 1.65, margin: 0 }}>
                    {project.result}
                  </p>
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.4}>
              <div style={{ marginTop: '2.5rem' }}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: '#0a0a0a',
                    color: '#ffffff',
                    padding: '13px 24px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontFamily: 'Syne',
                    fontWeight: 700,
                    fontSize: '15px',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#ff794f' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a' }}
                >
                  Bekijk {project.name} live ↗
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Prev / Next */}
      <div style={{ borderTop: '1px solid #e8e8e6', background: '#f8f8f6' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            {prev ? (
              <Link
                to={`/portfolio/${prev.slug}`}
                style={{
                  display: 'block',
                  padding: '1.75rem 0',
                  textDecoration: 'none',
                  borderRight: '1px solid #e8e8e6',
                  paddingRight: '2rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >
                <div style={{ color: '#aaa', fontSize: '11px', fontFamily: 'Inter', marginBottom: '0.35rem', letterSpacing: '0.06em' }}>← Vorig project</div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a' }}>{prev.name}</div>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                to={`/portfolio/${next.slug}`}
                style={{
                  display: 'block',
                  padding: '1.75rem 0',
                  textDecoration: 'none',
                  textAlign: 'right',
                  paddingLeft: '2rem',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = '0.7' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = '1' }}
              >
                <div style={{ color: '#aaa', fontSize: '11px', fontFamily: 'Inter', marginBottom: '0.35rem', letterSpacing: '0.06em' }}>Volgend project →</div>
                <div style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.1rem', color: '#0a0a0a' }}>{next.name}</div>
              </Link>
            ) : <div />}
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
