import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/**
 * Animates a list of case cards sliding horizontally on scroll.
 * @param {React.RefObject<HTMLElement>} containerRef - parent container to observe
 * @param {string} cardSelector - selector to collect cards inside the container
 */
function useGsapCasesSlide(containerRef, cardSelector = '.case-card') {
  useEffect(() => {
    if (!containerRef?.current) return undefined

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(cardSelector)

      if (!cards.length) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
        },
      })

      cards.forEach((card, index) => {
        tl.from(card, {
          x: 60 * index,
          opacity: 0,
          duration: 1.1,
          ease: 'power3.out',
        })
      })
    }, containerRef)

    return () => ctx.revert()
  }, [containerRef, cardSelector])
}

export default useGsapCasesSlide

