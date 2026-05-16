import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Contact', path: '/contact' },
]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const menuVariants: any = {
  closed: { opacity: 0, y: '-100%' },
  open: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } },
  exit: { opacity: 0, y: '-100%', transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const linkVariants: any = {
  closed: { y: 60, opacity: 0 },
  open: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  }),
}

function NavCTA() {
  const [hovered, setHovered] = useState(false)
  const ref = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 14 })
  const sy = useSpring(my, { stiffness: 180, damping: 14 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.3)
    my.set((e.clientY - rect.top - rect.height / 2) * 0.3)
  }

  const handleMouseLeave = () => {
    setHovered(false)
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.a
      ref={ref}
      href="/contact"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ff794f',
        color: '#080808',
        padding: '10px 22px',
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '14px',
        fontWeight: 700,
        fontFamily: 'Syne, sans-serif',
        letterSpacing: '0.03em',
        overflow: 'hidden',
        position: 'relative',
        x: sx,
        y: sy,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileTap={{ scale: 0.93 }}
    >
      {/* Shimmer layer */}
      <motion.span
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.35) 50%, transparent 70%)',
          backgroundSize: '200% 100%',
        }}
        animate={hovered ? { backgroundPosition: ['200% 0', '-50% 0'] } : { backgroundPosition: '200% 0' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
      />

      {/* Text row — slides up on hover, "Start nu →" slides in */}
      <span style={{ position: 'relative', overflow: 'hidden', display: 'inline-flex', flexDirection: 'column', height: '1.2em' }}>
        <motion.span
          animate={{ y: hovered ? '-110%' : '0%' }}
          transition={{ duration: 0.28, ease: [0.76, 0, 0.24, 1] as never }}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
        >
          Offerte aanvragen
        </motion.span>
        <motion.span
          animate={{ y: hovered ? '-110%' : '0%' }}
          transition={{ duration: 0.28, ease: [0.76, 0, 0.24, 1] as never }}
          style={{
            display: 'inline-block',
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '110%',
            left: 0,
          }}
        >
          Start jouw project →
        </motion.span>
      </span>
    </motion.a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 2rem',
          height: '72px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background 0.3s ease, backdrop-filter 0.3s ease',
          background: scrolled || open ? 'rgba(8,8,8,0.95)' : 'transparent',
          backdropFilter: scrolled || open ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid #1d1d1d' : '1px solid transparent',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <img
            src="/logo-white.png"
            alt="Graphic Vision"
            style={{ height: '32px', width: 'auto' }}
          />
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }} className="hidden-mobile">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                color: location.pathname === link.path ? '#ff794f' : '#aaaaaa',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: 500,
                letterSpacing: '0.02em',
                fontFamily: 'Inter, sans-serif',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { if (location.pathname !== link.path) (e.target as HTMLElement).style.color = '#ffffff' }}
              onMouseLeave={(e) => { if (location.pathname !== link.path) (e.target as HTMLElement).style.color = '#aaaaaa' }}
            >
              {link.label}
            </Link>
          ))}
          <NavCTA />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menu sluiten' : 'Menu openen'}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
            zIndex: 200,
          }}
          className="show-mobile"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'block', width: '24px', height: '2px', background: '#ffffff', borderRadius: '2px' }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'block', width: '24px', height: '2px', background: '#ffffff', borderRadius: '2px' }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: 'block', width: '24px', height: '2px', background: '#ffffff', borderRadius: '2px' }}
          />
        </button>
      </nav>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="exit"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 90,
              background: '#080808',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '2rem',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '3rem' }}>
              {navLinks.map((link, i) => (
                <div key={link.path} style={{ overflow: 'hidden' }}>
                  <motion.div custom={i} variants={linkVariants} initial="closed" animate="open">
                    <Link
                      to={link.path}
                      style={{
                        display: 'block',
                        fontSize: 'clamp(3rem, 12vw, 6rem)',
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 800,
                        color: location.pathname === link.path ? '#ff794f' : '#ffffff',
                        textDecoration: 'none',
                        lineHeight: 1.1,
                        letterSpacing: '-0.02em',
                        transition: 'color 0.2s',
                      }}
                      onMouseEnter={(e) => { (e.target as HTMLElement).style.color = '#ff794f' }}
                      onMouseLeave={(e) => { (e.target as HTMLElement).style.color = location.pathname === link.path ? '#ff794f' : '#ffffff' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div
              custom={3}
              variants={linkVariants}
              initial="closed"
              animate="open"
              style={{ overflow: 'hidden' }}
            >
              <Link
                to="/contact"
                style={{
                  display: 'inline-block',
                  background: '#ff794f',
                  color: '#080808',
                  padding: '14px 28px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: 700,
                  fontFamily: 'Syne, sans-serif',
                }}
              >
                Offerte aanvragen →
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              variants={linkVariants}
              initial="closed"
              animate="open"
              style={{ position: 'absolute', bottom: '2.5rem', left: '2rem', color: '#555' }}
            >
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', margin: 0 }}>
                hello@graphicvision.nl
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}
