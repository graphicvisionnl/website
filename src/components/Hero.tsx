import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton'

const words = ['Websites', 'die', 'je', 'merk', 'laten', 'groeien.']

export default function Hero() {
  const videoRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  const { scrollYProgress } = useScroll({
    target: videoRef,
    offset: ['start end', 'end center'],
  })

  const width = useTransform(scrollYProgress, [0, 1], ['75%', '100%'])
  const borderRadius = useTransform(scrollYProgress, [0, 0.7], [20, 0])
  const videoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1])

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      style={{
        background: '#080808',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}
    >
      {/* Mouse-follow gradient glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(255,121,79,0.07) 0%, transparent 60%)`,
          pointerEvents: 'none',
          transition: 'background 0.1s ease',
          zIndex: 0,
        }}
      />

      {/* Top text section */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(3rem, 6vw, 5rem) 2rem clamp(3rem, 5vw, 4rem)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}
        >
          <span style={{ display: 'inline-block', width: '28px', height: '2px', background: '#ff794f' }} />
          <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
            Web Design & Development Studio
          </span>
        </motion.div>

        {/* Headline */}
        <h1 style={{
          fontFamily: 'Syne, sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(2.6rem, 5.5vw, 5rem)',
          lineHeight: 1.0,
          letterSpacing: '-0.03em',
          color: '#ffffff',
          margin: '0 0 1.5rem',
          maxWidth: '820px',
        }}>
          {words.map((word, i) => (
            <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom', marginRight: '0.22em' }}>
              <motion.span
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.75, delay: 0.35 + i * 0.07, ease: [0.76, 0, 0.24, 1] as never }}
                style={{ display: 'inline-block' }}
              >
                {word === 'groeien.' ? (
                  <>{word.slice(0, -1)}<span style={{ color: '#ff794f' }}>.</span></>
                ) : word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Bottom row: sub + CTAs */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            style={{
              color: '#777',
              fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
              fontFamily: 'Inter',
              lineHeight: 1.7,
              maxWidth: '380px',
              margin: 0,
            }}
          >
            Van strategie tot lancering — wij bouwen de digitale aanwezigheid die jouw merk verdient.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}
          >
            <MagneticButton>
              <Link
                to="/portfolio"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  padding: '12px 22px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 600,
                  fontFamily: 'Syne',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.4)'
                  el.style.background = 'rgba(255,255,255,0.04)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'rgba(255,255,255,0.15)'
                  el.style.background = 'transparent'
                }}
              >
                Bekijk ons werk
              </Link>
            </MagneticButton>

            <MagneticButton>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#ff794f',
                  color: '#080808',
                  padding: '12px 22px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: 700,
                  fontFamily: 'Syne',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#e06035' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#ff794f' }}
              >
                Gratis gesprek →
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Trustpilot badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <a
            href="https://www.trustpilot.com/review/graphicvision.nl"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
            }}
          >
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1,2,3,4,5].map((s) => (
                <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#00b67a">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span style={{ color: '#555', fontSize: '12px', fontFamily: 'Inter' }}>
              Uitstekend op <span style={{ color: '#00b67a', fontWeight: 600 }}>Trustpilot</span>
            </span>
          </a>
          <span style={{ color: '#2a2a2a', fontSize: '12px' }}>·</span>
          <span style={{ color: '#555', fontSize: '12px', fontFamily: 'Inter' }}>Amsterdam, NL</span>
        </motion.div>
      </div>

      {/* Scroll-expanding video */}
      <div ref={videoRef} style={{ display: 'flex', justifyContent: 'center', position: 'relative', zIndex: 2 }}>
        <motion.div
          style={{
            width,
            borderRadius,
            overflow: 'hidden',
            maxHeight: '70vh',
            position: 'relative',
          }}
        >
          <motion.video
            autoPlay
            muted
            loop
            playsInline
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              scale: videoScale,
            }}
          >
            <source src="/hero-video.webm" type="video/webm" />
          </motion.video>

          {/* Subtle gradient on top of video */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,8,0.3) 0%, transparent 40%)',
            pointerEvents: 'none',
          }} />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div style={{
        height: '3rem',
        background: 'linear-gradient(to bottom, transparent, #080808)',
        marginTop: '-1px',
        position: 'relative',
        zIndex: 2,
      }} />
    </section>
  )
}
