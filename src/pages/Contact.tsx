import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { AnimatedWords, FadeIn } from '../components/AnimatedText'
import Footer from '../components/Footer'

const EJS_SERVICE = 'service_fea84g2'
const EJS_TEMPLATE = 'template_oafirq9'
const EJS_PUBLIC_KEY = 'NJJIAsc8GHNEDg1-5'

type Step = 1 | 2 | 3 | 4

const serviceOptions = [
  { label: 'Nieuwe website', icon: '◇', desc: 'Van nul naar een professionele online aanwezigheid' },
  { label: 'Webshop', icon: '◈', desc: 'Een webshop die converteert en groeit' },
  { label: 'Redesign', icon: '◎', desc: 'Jouw bestaande website moderniseren' },
  { label: 'Weet ik nog niet', icon: '◉', desc: 'We denken graag met je mee' },
]

interface FormData {
  service: string
  firstName: string
  lastName: string
  company: string
  email: string
  phone: string
  message: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stepVariants: any = {
  enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } },
  exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, transition: { duration: 0.3 } }),
}

export default function Contact() {
  const [step, setStep] = useState<Step>(1)
  const [direction, setDirection] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [sendError, setSendError] = useState(false)
  const [form, setForm] = useState<FormData>({
    service: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  })

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const next = () => {
    setDirection(1)
    setStep((s) => Math.min(s + 1, 4) as Step)
  }

  const back = () => {
    setDirection(-1)
    setStep((s) => Math.max(s - 1, 1) as Step)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSendError(false)
    try {
      await emailjs.send(EJS_SERVICE, EJS_TEMPLATE, {
        from_name: `${form.firstName} ${form.lastName}`.trim(),
        from_email: form.email,
        company: form.company || 'Niet opgegeven',
        phone: form.phone || 'Niet opgegeven',
        service: form.service,
        message: form.message,
      }, EJS_PUBLIC_KEY)
      setSubmitted(true)
    } catch {
      setSendError(true)
    } finally {
      setSending(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#111',
    border: '1px solid #222',
    borderRadius: '8px',
    padding: '14px 16px',
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
    fontSize: '15px',
    transition: 'border-color 0.2s',
    outline: 'none',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#888',
    fontSize: '13px',
    fontFamily: 'Inter',
    fontWeight: 500,
    marginBottom: '6px',
    letterSpacing: '0.02em',
  }

  return (
    <main>
      <section
        style={{
          minHeight: '100vh',
          padding: 'clamp(8rem, 15vw, 10rem) 2rem clamp(4rem, 8vw, 6rem)',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: '10%',
            width: '500px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(255,121,79,0.05) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '5rem', alignItems: 'start', position: 'relative' }} className="contact-grid">
          {/* Left info */}
          <div style={{ position: 'sticky', top: '120px' }} className="contact-sticky">
            <FadeIn>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
                <span style={{ display: 'inline-block', width: '24px', height: '2px', background: '#ff794f' }} />
                <span style={{ color: '#ff794f', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
                  Contact
                </span>
              </div>
            </FadeIn>

            <h1 style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              margin: '0 0 1.25rem',
            }}>
              <AnimatedWords text="Laten we jouw project bespreken." delay={0.1} />
            </h1>

            <FadeIn delay={0.4}>
              <p style={{ color: '#666', fontSize: '1rem', fontFamily: 'Inter', lineHeight: 1.75, margin: '0 0 2.5rem' }}>
                Vul het formulier in. Wij nemen binnen 24 uur contact op voor een gratis en vrijblijvend gesprek.
              </p>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a
                  href="mailto:hello@graphicvision.nl"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#888',
                    textDecoration: 'none',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ffffff' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#888' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff794f', flexShrink: 0 }}>
                    @
                  </div>
                  hello@graphicvision.nl
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#666', fontFamily: 'Inter', fontSize: '15px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ff794f', flexShrink: 0, fontSize: '18px' }}>
                    ◎
                  </div>
                  Amsterdam, Nederland
                </div>

                <a
                  href="https://www.trustpilot.com/review/graphicvision.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#888',
                    textDecoration: 'none',
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#00b67a' }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#888' }}
                >
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00b67a', flexShrink: 0 }}>
                    ★
                  </div>
                  Uitstekend op Trustpilot
                </a>
              </div>
            </FadeIn>
          </div>

          {/* Right — form */}
          <FadeIn delay={0.2} direction="left">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  background: '#0f0f0f',
                  border: '1px solid #1d1d1d',
                  borderRadius: '16px',
                  padding: '4rem',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                <h2 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.75rem', color: '#ffffff', margin: '0 0 0.75rem' }}>
                  Bericht ontvangen!
                </h2>
                <p style={{ color: '#666', fontFamily: 'Inter', lineHeight: 1.7, margin: 0 }}>
                  Bedankt voor je bericht. We nemen binnen 24 uur contact met je op voor een gratis kennismakingsgesprek.
                </p>
              </motion.div>
            ) : (
              <div
                style={{
                  background: '#0f0f0f',
                  border: '1px solid #1d1d1d',
                  borderRadius: '16px',
                  overflow: 'hidden',
                }}
              >
                {/* Progress */}
                <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {[1, 2, 3, 4].map((s) => (
                      <div
                        key={s}
                        style={{
                          width: s === step ? '32px' : '8px',
                          height: '8px',
                          borderRadius: '100px',
                          background: s <= step ? '#ff794f' : '#222',
                          transition: 'all 0.4s ease',
                        }}
                      />
                    ))}
                  </div>
                  <span style={{ color: '#444', fontSize: '13px', fontFamily: 'Inter' }}>
                    Stap {step} van 4
                  </span>
                </div>

                {/* Steps */}
                <div style={{ padding: '2.5rem', minHeight: '420px', position: 'relative', overflow: 'hidden' }}>
                  <AnimatePresence mode="wait" custom={direction}>
                    {step === 1 && (
                      <motion.div key="step1" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit">
                        <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.4rem', color: '#ffffff', margin: '0 0 0.5rem' }}>
                          Wat zoek je?
                        </h3>
                        <p style={{ color: '#555', fontFamily: 'Inter', fontSize: '14px', margin: '0 0 2rem' }}>
                          Selecteer de optie die het best bij jou past.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                          {serviceOptions.map((opt) => (
                            <button
                              key={opt.label}
                              onClick={() => {
                                update('service', opt.label)
                                setTimeout(next, 300)
                              }}
                              style={{
                                background: form.service === opt.label ? '#ff794f10' : '#111',
                                border: `1px solid ${form.service === opt.label ? '#ff794f' : '#222'}`,
                                borderRadius: '10px',
                                padding: '1.25rem',
                                cursor: 'pointer',
                                textAlign: 'left',
                                transition: 'all 0.2s',
                              }}
                              onMouseEnter={(e) => {
                                if (form.service !== opt.label) {
                                  (e.currentTarget as HTMLElement).style.borderColor = '#333'
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (form.service !== opt.label) {
                                  (e.currentTarget as HTMLElement).style.borderColor = '#222'
                                }
                              }}
                            >
                              <div style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: form.service === opt.label ? '#ff794f' : '#444' }}>
                                {opt.icon}
                              </div>
                              <div style={{ fontFamily: 'Syne', fontWeight: 600, fontSize: '14px', color: '#ffffff', marginBottom: '0.25rem' }}>
                                {opt.label}
                              </div>
                              <div style={{ fontFamily: 'Inter', fontSize: '12px', color: '#555', lineHeight: 1.4 }}>
                                {opt.desc}
                              </div>
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div key="step2" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit">
                        <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.4rem', color: '#ffffff', margin: '0 0 0.5rem' }}>
                          Vertel ons over jezelf
                        </h3>
                        <p style={{ color: '#555', fontFamily: 'Inter', fontSize: '14px', margin: '0 0 2rem' }}>
                          Wie zijn we het geluk mee te werken?
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div>
                              <label style={labelStyle}>Voornaam *</label>
                              <input
                                style={inputStyle}
                                value={form.firstName}
                                onChange={(e) => update('firstName', e.target.value)}
                                placeholder="Jan"
                                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#ff794f' }}
                                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#222' }}
                              />
                            </div>
                            <div>
                              <label style={labelStyle}>Achternaam *</label>
                              <input
                                style={inputStyle}
                                value={form.lastName}
                                onChange={(e) => update('lastName', e.target.value)}
                                placeholder="Jansen"
                                onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#ff794f' }}
                                onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#222' }}
                              />
                            </div>
                          </div>
                          <div>
                            <label style={labelStyle}>Bedrijfsnaam</label>
                            <input
                              style={inputStyle}
                              value={form.company}
                              onChange={(e) => update('company', e.target.value)}
                              placeholder="Jouw Bedrijf B.V."
                              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#ff794f' }}
                              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#222' }}
                            />
                          </div>
                        </div>
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                          <button
                            onClick={next}
                            disabled={!form.firstName || !form.lastName}
                            style={{
                              background: form.firstName && form.lastName ? '#ff794f' : '#222',
                              color: form.firstName && form.lastName ? '#080808' : '#444',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '12px 24px',
                              fontFamily: 'Syne',
                              fontWeight: 700,
                              fontSize: '15px',
                              cursor: form.firstName && form.lastName ? 'pointer' : 'not-allowed',
                              transition: 'all 0.2s',
                            }}
                          >
                            Volgende →
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 3 && (
                      <motion.div key="step3" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit">
                        <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.4rem', color: '#ffffff', margin: '0 0 0.5rem' }}>
                          Hoe kunnen we je bereiken?
                        </h3>
                        <p style={{ color: '#555', fontFamily: 'Inter', fontSize: '14px', margin: '0 0 2rem' }}>
                          We nemen contact met je op via e-mail of telefoon.
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <div>
                            <label style={labelStyle}>E-mailadres *</label>
                            <input
                              type="email"
                              style={inputStyle}
                              value={form.email}
                              onChange={(e) => update('email', e.target.value)}
                              placeholder="jan@bedrijf.nl"
                              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#ff794f' }}
                              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#222' }}
                            />
                          </div>
                          <div>
                            <label style={labelStyle}>Telefoonnummer</label>
                            <input
                              type="tel"
                              style={inputStyle}
                              value={form.phone}
                              onChange={(e) => update('phone', e.target.value)}
                              placeholder="+31 6 12345678"
                              onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#ff794f' }}
                              onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#222' }}
                            />
                          </div>
                        </div>
                        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                          <button
                            onClick={back}
                            style={{
                              background: 'transparent',
                              color: '#555',
                              border: '1px solid #222',
                              borderRadius: '8px',
                              padding: '12px 24px',
                              fontFamily: 'Inter',
                              fontWeight: 500,
                              fontSize: '14px',
                              cursor: 'pointer',
                              transition: 'all 0.2s',
                            }}
                          >
                            ← Terug
                          </button>
                          <button
                            onClick={next}
                            disabled={!form.email}
                            style={{
                              background: form.email ? '#ff794f' : '#222',
                              color: form.email ? '#080808' : '#444',
                              border: 'none',
                              borderRadius: '8px',
                              padding: '12px 24px',
                              fontFamily: 'Syne',
                              fontWeight: 700,
                              fontSize: '15px',
                              cursor: form.email ? 'pointer' : 'not-allowed',
                              transition: 'all 0.2s',
                            }}
                          >
                            Volgende →
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {step === 4 && (
                      <motion.div key="step4" custom={direction} variants={stepVariants} initial="enter" animate="center" exit="exit">
                        <h3 style={{ fontFamily: 'Syne', fontWeight: 700, fontSize: '1.4rem', color: '#ffffff', margin: '0 0 0.5rem' }}>
                          Vertel ons over jouw project
                        </h3>
                        <p style={{ color: '#555', fontFamily: 'Inter', fontSize: '14px', margin: '0 0 2rem' }}>
                          Hoe meer detail, hoe beter we je kunnen helpen.
                        </p>
                        <form onSubmit={handleSubmit}>
                          <textarea
                            style={{
                              ...inputStyle,
                              minHeight: '180px',
                              resize: 'vertical',
                            }}
                            value={form.message}
                            onChange={(e) => update('message', e.target.value)}
                            placeholder="Vertel ons over jouw idee, doelen, budget of deadline. Alles is welkom."
                            onFocus={(e) => { (e.target as HTMLElement).style.borderColor = '#ff794f' }}
                            onBlur={(e) => { (e.target as HTMLElement).style.borderColor = '#222' }}
                          />

                          {/* Summary */}
                          <div style={{ marginTop: '1rem', background: '#111', border: '1px solid #1d1d1d', borderRadius: '8px', padding: '0.75rem 1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                            <span style={{ color: '#444', fontSize: '12px', fontFamily: 'Inter' }}>
                              <span style={{ color: '#ff794f' }}>Dienst:</span> {form.service}
                            </span>
                            <span style={{ color: '#444', fontSize: '12px', fontFamily: 'Inter' }}>
                              <span style={{ color: '#ff794f' }}>Naam:</span> {form.firstName} {form.lastName}
                            </span>
                            <span style={{ color: '#444', fontSize: '12px', fontFamily: 'Inter' }}>
                              <span style={{ color: '#ff794f' }}>Email:</span> {form.email}
                            </span>
                          </div>

                          <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <button
                              type="button"
                              onClick={back}
                              style={{
                                background: 'transparent',
                                color: '#555',
                                border: '1px solid #222',
                                borderRadius: '8px',
                                padding: '12px 24px',
                                fontFamily: 'Inter',
                                fontWeight: 500,
                                fontSize: '14px',
                                cursor: 'pointer',
                              }}
                            >
                              ← Terug
                            </button>
                            <button
                              type="submit"
                              disabled={sending}
                              style={{
                                background: sending ? '#555' : '#ff794f',
                                color: '#080808',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '14px 28px',
                                fontFamily: 'Syne',
                                fontWeight: 700,
                                fontSize: '15px',
                                cursor: sending ? 'not-allowed' : 'pointer',
                                transition: 'background 0.2s',
                              }}
                              onMouseEnter={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = '#e06035' }}
                              onMouseLeave={(e) => { if (!sending) (e.currentTarget as HTMLElement).style.background = '#ff794f' }}
                            >
                              {sending ? 'Versturen...' : 'Verstuur bericht →'}
                            </button>
                          </div>
                          {sendError && (
                            <p style={{ color: '#ff6b6b', fontFamily: 'Inter', fontSize: '13px', margin: '1rem 0 0', textAlign: 'center' }}>
                              Er ging iets mis. Probeer het opnieuw of mail ons op hello@graphicvision.nl
                            </p>
                          )}
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .contact-sticky { position: static !important; }
        }
      `}</style>
    </main>
  )
}
