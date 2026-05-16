import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
  once?: boolean
}

export function AnimatedWords({ text, className, style, delay = 0, once = true }: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ display: 'inline-block', marginRight: '0.28em' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function AnimatedChars({ text, className, style, delay = 0, once = true }: AnimatedTextProps) {
  const chars = text.split('')

  return (
    <span className={className} style={{ display: 'inline-block', ...style }}>
      {chars.map((char, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.03,
              ease: [0.76, 0, 0.24, 1],
            }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? ' ' : char}
          </motion.span>
        </span>
      ))}
    </span>
  )
}

export function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  once = true,
  className,
  style,
}: {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  once?: boolean
  className?: string
  style?: React.CSSProperties
}) {
  const directions = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
    none: {},
  }

  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
