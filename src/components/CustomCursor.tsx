import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const [clicking, setClicking] = useState(false)
  const [hovering, setHovering] = useState(false)

  const springConfig = { damping: 28, stiffness: 300, mass: 0.5 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const dotSpringConfig = { damping: 50, stiffness: 500, mass: 0.2 }
  const dotX = useSpring(cursorX, dotSpringConfig)
  const dotY = useSpring(cursorY, dotSpringConfig)

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    const down = () => setClicking(true)
    const up = () => setClicking(false)

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement
      const isLink = el.closest('a') || el.closest('button') || el.closest('[data-cursor-hover]')
      setHovering(!!isLink)
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mousemove', checkHover)
    window.addEventListener('mousedown', down)
    window.addEventListener('mouseup', up)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mousemove', checkHover)
      window.removeEventListener('mousedown', down)
      window.removeEventListener('mouseup', up)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? '#ff794f' : 'rgba(255,255,255,0.5)'}`,
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'difference',
          scale: clicking ? 0.8 : 1,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
      {/* Inner dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: dotX,
          top: dotY,
          x: '-50%',
          y: '-50%',
          width: hovering ? 6 : 5,
          height: hovering ? 6 : 5,
          borderRadius: '50%',
          background: hovering ? '#ff794f' : '#ffffff',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <style>{`
        body { cursor: none; }
        a, button, [data-cursor-hover] { cursor: none; }
        @media (pointer: coarse) {
          body { cursor: auto; }
          a, button { cursor: auto; }
        }
      `}</style>
    </>
  )
}
