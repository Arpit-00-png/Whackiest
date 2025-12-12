import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

const ACCENT = '#98D2C0'

const leftLinks = [
  { id: 'home', label: 'Home', href: '#hero' },
  { id: 'features', label: 'Features', href: '#features' },
  { id: 'heatmap', label: 'Heatmap', href: '#heatmap' },
  { id: 'cases', label: 'Cases', href: '#cases' },
]

const rightLinks = [
  { id: 'login', label: 'Login', href: '#login' },
  { id: 'signup', label: 'Signup', href: '#signup' },
]

function CustomCursor({ variant }) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const smoothX = useSpring(cursorX, { stiffness: 320, damping: 30, mass: 0.4 })
  const smoothY = useSpring(cursorY, { stiffness: 320, damping: 30, mass: 0.4 })

  useEffect(() => {
    const handleMove = (event) => {
      cursorX.set(event.clientX)
      cursorY.set(event.clientY)
    }

    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50 hidden -translate-x-1/2 -translate-y-1/2 rounded-full md:block"
      style={{
        x: smoothX,
        y: smoothY,
        width: variant === 'link' ? 44 : 30,
        height: variant === 'link' ? 44 : 30,
      }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={
        variant === 'link'
          ? {
              opacity: 1,
              scale: 1.1,
              backgroundColor: ACCENT,
              borderColor: ACCENT,
              boxShadow: `0 10px 35px ${ACCENT}55`,
            }
          : {
              opacity: 0.9,
              scale: 1,
              backgroundColor: 'rgba(255,255,255,0.12)',
              borderColor: 'rgba(255,255,255,0.45)',
              boxShadow: '0 12px 35px rgba(15,23,42,0.12)',
            }
      }
      transition={{
        type: 'spring',
        stiffness: 220,
        damping: 18,
        mass: 0.6,
      }}
    >
      <div className="h-full w-full rounded-full border" />
    </motion.div>
  )
}

function NavLink({ link, hoveredId, onHover, onLeave }) {
  const isHovered = hoveredId === link.id

  return (
    <motion.a
      href={link.href}
      className="relative text-sm font-semibold tracking-tight text-slate-900 transition-colors hover:text-slate-900/80"
      onMouseEnter={() => onHover(link.id)}
      onMouseLeave={onLeave}
      whileHover={{ y: -1 }}
    >
      {link.label}
      <motion.span
        className="absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-[color:var(--accent)]"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
      />
    </motion.a>
  )
}

function Navbar() {
  const [hoveredId, setHoveredId] = useState(null)
  const [cursorVariant, setCursorVariant] = useState('default')

  const handleHover = (id) => {
    setHoveredId(id)
    setCursorVariant('link')
  }

  const handleLeave = () => {
    setHoveredId(null)
    setCursorVariant('default')
  }

  return (
    <>
      <CustomCursor variant={cursorVariant} />
      <motion.header
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
        className="sticky top-0 z-30 border-b border-white/40 bg-white/70 backdrop-blur-lg supports-[backdrop-filter]:bg-white/55"
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-8">
          <div className="flex items-center gap-9">
            <span className="text-lg font-semibold tracking-tight text-slate-900">
              Lumen
            </span>
            <div className="hidden items-center gap-7 md:flex">
              {leftLinks.map((link) => (
                <NavLink
                  key={link.id}
                  link={link}
                  hoveredId={hoveredId}
                  onHover={handleHover}
                  onLeave={handleLeave}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            {rightLinks.map((link) => (
              <NavLink
                key={link.id}
                link={link}
                hoveredId={hoveredId}
                onHover={handleHover}
                onLeave={handleLeave}
              />
            ))}
          </div>
        </nav>
      </motion.header>
    </>
  )
}

export default Navbar

