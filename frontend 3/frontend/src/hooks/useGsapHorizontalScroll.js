import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Pins a section and maps vertical scroll to horizontal movement.
 * Also applies subtle card entrance scaling within the container animation.
 */
function useGsapHorizontalScroll(containerRef, scrollerRef) {
  useLayoutEffect(() => {
    if (!containerRef?.current || !scrollerRef?.current) return undefined

    const container = containerRef.current
    const scroller = scrollerRef.current

    const onResize = () => {
      ScrollTrigger.refresh()
    }

    const ctx = gsap.context(() => {
      const horizontalTimeline = gsap.to(scroller, {
        x: () => -(scroller.scrollWidth - window.innerWidth),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: () => '+=' + scroller.scrollWidth,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      })

      gsap.utils.toArray('.case-card').forEach((card) => {
        gsap.from(card, {
          opacity: 0,
          scale: 0.92,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'left 80%',
            containerAnimation: horizontalTimeline,
          },
        })
      })

      ScrollTrigger.refresh()
    }, container)

    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      ctx.revert()
    }
  }, [containerRef, scrollerRef])
}

export default useGsapHorizontalScroll

