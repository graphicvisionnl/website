import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FadeIn, AnimatedWords } from './AnimatedText'

export function MeerDanEenWebsite() {
  return (
    <section style={{ background: '#080808', borderTop: '1px solid #111' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(4rem, 7vw, 6rem) 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="content-grid">
          {/* Left */}
          <div>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                  Onze visie
                </span>
              </div>
            </FadeIn>

            <h2 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3.5vw, 3rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 1.25rem',
            }}>
              <AnimatedWords text="Meer dan een website" delay={0.1} />
            </h2>

            <FadeIn delay={0.4}>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: '0 0 1rem' }}>
                Jouw website is het eerste wat een potentiële klant ziet — en die eerste indruk telt. Wij bouwen websites die niet alleen mooi zijn, maar ook écht iets doen. Met doordachte animaties, interactieve elementen en een design dat aansluit bij jouw merk, zorg je dat bezoekers blijven hangen en terugkomen.
              </p>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: 0 }}>
                Of je nu net begint of al jaren actief bent — wij tillen jouw online aanwezigheid naar een niveau dat past bij waar jij naartoe wilt.
              </p>
            </FadeIn>
          </div>

          {/* Right — image */}
          <FadeIn delay={0.2} direction="left">
            <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3', position: 'relative' }}>
              <img
                src="/resultaten.webp"
                alt="Meer dan een website"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(255,121,79,0.12) 0%, transparent 60%)',
              }} />
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(8,8,8,0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid #222',
                  borderRadius: '10px',
                  padding: '0.85rem 1.1rem',
                }}
              >
                <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.6rem', color: '#ff794f', lineHeight: 1 }}>5.000+</div>
                <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#666', marginTop: '3px' }}>tevreden eindgebruikers</div>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .content-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}

export function JouwIdeeOnsWerk() {
  return (
    <section style={{ background: '#f8f8f6', borderTop: '1px solid #e8e8e6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(4rem, 7vw, 6rem) 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="content-grid-rev">
          {/* Left — image */}
          <FadeIn delay={0.1}>
            <div style={{ borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="/jouw-idee-ons-werk.webp"
                alt="Jouw idee, ons werk"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </FadeIn>

          {/* Right — text */}
          <div>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                  Ons proces
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
              <AnimatedWords text="Jouw idee, ons werk" delay={0.1} />
            </h2>

            <FadeIn delay={0.4}>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: '0 0 1rem' }}>
                Van eerste gesprek tot live website — wij nemen je mee in elke stap. We beginnen altijd met een kennismakingsgesprek om jouw wensen, doelen en doelgroep goed te begrijpen.
              </p>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: '0 0 1.75rem' }}>
                Daarna werken we een ontwerp uit, bouwen we de website en testen we alles grondig voordat hij live gaat. Geen verrassingen, geen gedoe. Gewoon een helder en transparant proces waarbij jij altijd weet waar je aan toe bent en waarbij het eindresultaat echt van jou voelt.
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: '#0a0a0a',
                  color: '#ffffff',
                  padding: '12px 22px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontFamily: 'Syne',
                  fontWeight: 700,
                  fontSize: '14px',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = '#ff794f' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = '#0a0a0a' }}
              >
                Plan een kennismaking →
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .content-grid-rev { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}

export function WebsitesDieKlantenOpleveren() {
  return (
    <section style={{ background: '#ffffff', borderTop: '1px solid #e8e8e6', borderBottom: '1px solid #e8e8e6' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: 'clamp(4rem, 7vw, 6rem) 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }} className="content-grid-3">
          {/* Left — text */}
          <div>
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.5rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                  Conversie & groei
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
              <AnimatedWords text="Websites die klanten opleveren" delay={0.1} />
            </h2>

            <FadeIn delay={0.4}>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: '0 0 1rem' }}>
                Een mooie website is een goed begin — maar een website die bezoekers omzet in echte klanten is het echte doel. Wij bouwen altijd met conversie in gedachten. Dat betekent duidelijke call-to-actions, een logische structuur en een ontwerp dat vertrouwen uitstraalt vanaf de eerste seconde.
              </p>
              <p style={{ color: '#666', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'Inter', margin: 0 }}>
                Of je nu meer offerteaanvragen wilt, meer producten wil verkopen of gewoon beter gevonden wil worden — wij zorgen dat jouw website voor je werkt, ook als jij slaapt.
              </p>
            </FadeIn>
          </div>

          {/* Right — image with overlay */}
          <FadeIn delay={0.2} direction="left">
            <div style={{ position: 'relative', borderRadius: '12px', overflow: 'hidden', aspectRatio: '4/3' }}>
              <img
                src="/resultaten.webp"
                alt="Websites die klanten opleveren"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              {/* Stats overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(8,8,8,0.65) 0%, transparent 50%)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '1.25rem',
                left: '1.25rem',
                right: '1.25rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '0.5rem',
              }}>
                {[
                  { n: '5.000+', l: 'Klanten' },
                  { n: '100%', l: 'Maatwerk' },
                  { n: '<24u', l: 'Reactie' },
                ].map((s) => (
                  <div key={s.n} style={{
                    background: 'rgba(8,8,8,0.85)',
                    backdropFilter: 'blur(6px)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    textAlign: 'center',
                    border: '1px solid rgba(255,255,255,0.07)',
                  }}>
                    <div style={{ fontFamily: 'Syne', fontWeight: 800, fontSize: '1.1rem', color: '#fff', lineHeight: 1 }}>{s.n}</div>
                    <div style={{ fontFamily: 'Inter', fontSize: '11px', color: '#777', marginTop: '3px' }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .content-grid-3 { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
