import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Pins a section and maps vertical scroll to horizontal, full-screen case slides.
 * Adds per-case crossfade as they enter the viewport.
 */
function useGsapHorizontalFullPageCases(containerRef, scrollerRef) {
  useLayoutEffect(() => {
    if (!containerRef?.current || !scrollerRef?.current) return undefined

    const container = containerRef.current
    const scroller = scrollerRef.current

    const handleResize = () => ScrollTrigger.refresh()

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => '+=' + (scroller.scrollWidth - window.innerWidth),
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      })

      tl.to(scroller, {
        x: () => -(scroller.scrollWidth - window.innerWidth),
        ease: 'none',
      })

      gsap.utils.toArray('.case-screen').forEach((panel, i) => {
        gsap.fromTo(
          panel,
          { opacity: i === 0 ? 1 : 0 },
          {
            opacity: 1,
            ease: 'power3.out',
            scrollTrigger: {
              containerAnimation: tl,
              trigger: panel,
              start: 'left center',
              end: 'right center',
              scrub: true,
            },
          },
        )
      })
    }, container)

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      ctx.revert()
    }
  }, [containerRef, scrollerRef])
}

export default useGsapHorizontalFullPageCases

