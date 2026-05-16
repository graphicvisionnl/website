import { useRef } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { useEffect, useState } from 'react'

function useCountUp(end: number, duration = 2, start = false) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!start) return
    const controls = animate(0, end, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setCount(Math.round(v)),
    })
    return controls.stop
  }, [start, end, duration])
  return count
}

function Stat({ number, suffix, label, delay }: { number: number; suffix: string; label: string; delay: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCountUp(number, 2, inView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      style={{ textAlign: 'center' }}
    >
      <div style={{
        fontFamily: 'Inter, sans-serif',
        fontWeight: 700,
        fontSize: '1.6rem',
        letterSpacing: '-0.02em',
        lineHeight: 1,
        color: '#0a0a0a',
        marginBottom: '0.3rem',
      }}>
        {count}{suffix}
      </div>
      <div style={{ color: '#aaa', fontSize: '12px', fontFamily: 'Inter', letterSpacing: '0.02em' }}>
        {label}
      </div>
    </motion.div>
  )
}

function AnimatedBars() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const bars = [
    { h: 35, delay: 0 },
    { h: 55, delay: 0.1 },
    { h: 45, delay: 0.2 },
    { h: 70, delay: 0.3 },
    { h: 60, delay: 0.4 },
    { h: 85, delay: 0.5 },
    { h: 100, delay: 0.6 },
  ]

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        alignItems: 'flex-end',
        gap: '10px',
        height: '80px',
        padding: '0 8px',
      }}
    >
      {bars.map((bar, i) => (
        <motion.div
          key={i}
          initial={{ height: 0 }}
          animate={inView ? { height: `${bar.h}%` } : { height: 0 }}
          transition={{ delay: bar.delay, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            flex: 1,
            background: i === bars.length - 1
              ? '#ff794f'
              : `rgba(255, 121, 79, ${0.15 + (i / bars.length) * 0.35})`,
            borderRadius: '4px 4px 0 0',
            minWidth: 0,
          }}
        />
      ))}
    </div>
  )
}

export default function GrowthAnimation() {
  return (
    <div>
      <div style={{
        background: '#f0f0ee',
        borderRadius: '16px',
        padding: '2rem',
        marginBottom: '2rem',
        border: '1px solid #e8e8e6',
      }}>
        <div style={{ fontSize: '11px', fontFamily: 'Inter', color: '#aaa', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Online groei na lancering
        </div>
        <AnimatedBars />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '8px' }}>
          {['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun', 'Jul'].map((m) => (
            <span key={m} style={{ fontSize: '10px', color: '#aaa', fontFamily: 'Inter', flex: 1, textAlign: 'center' }}>{m}</span>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
        <Stat number={5000} suffix="+" label="Eindgebruikers" delay={0.1} />
        <Stat number={100} suffix="%" label="Maatwerk" delay={0.2} />
        <Stat number={6} suffix="+" label="Projecten" delay={0.3} />
      </div>
    </div>
  )
}
