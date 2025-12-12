import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const LINKS = ['Home', 'Features', 'Heatmap', 'Cases', 'Login / Signup']
const ACCENT = '#98D2C0'

function AnimatedNavbar() {
  const wrapperRef = useRef(null)
  const iconRef = useRef(null)
  const linksRef = useRef([])
  const tlRef = useRef(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (!wrapper) return undefined

    linksRef.current = linksRef.current.slice(0, LINKS.length)

    const ctx = gsap.context(() => {
      tlRef.current = gsap
        .timeline({ paused: true, defaults: { ease: 'power3.out' } })
        .to(wrapper, {
          width: 320,
          paddingLeft: 16,
          paddingRight: 16,
          duration: 0.6,
        })
        .to(
          iconRef.current,
          {
            x: 2,
            duration: 0.45,
          },
          '<'
        )
        .from(
          linksRef.current,
          {
            autoAlpha: 0,
            y: 10,
            stagger: 0.08,
            duration: 0.35,
          },
          '-=0.2'
        )
    }, wrapper)

    return () => ctx.revert()
  }, [])

  const handleEnter = () => {
    tlRef.current?.play()
  }

  const handleLeave = () => {
    tlRef.current?.reverse()
  }

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="fixed left-6 top-6 z-50 flex h-10 w-10 items-center gap-4 overflow-hidden rounded-full bg-white/80 text-slate-800 shadow-xl backdrop-blur-lg"
      style={{
        backgroundColor: 'rgba(255,255,255,0.85)',
        border: '1px solid rgba(0,0,0,0.04)',
      }}
    >
      <button
        ref={iconRef}
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded-full text-base font-semibold text-white shadow-lg"
        style={{ backgroundColor: ACCENT }}
        aria-label="Open navigation"
      >
        CW
      </button>

      <nav className="flex items-center gap-4 text-sm font-semibold text-slate-700">
        {LINKS.map((item, idx) => (
          <a
            key={item}
            href="#"
            ref={(el) => {
              linksRef.current[idx] = el
            }}
            className="whitespace-nowrap transition-colors hover:text-[color:var(--accent)]"
          >
            {item}
          </a>
        ))}
      </nav>
    </div>
  )
}

export default AnimatedNavbar

