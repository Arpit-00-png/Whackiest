import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ShowcaseCarousel = ({ slides = [], interval = 6500 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    if (isHovered || slides.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length)
    }, interval)

    return () => clearInterval(timer)
  }, [currentIndex, isHovered, interval, slides.length])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  if (slides.length === 0) {
    return null
  }

  return (
    <div
      className="group relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Carousel Container */}
      <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl bg-slate-900/5">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => {
            if (index !== currentIndex) return null

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0"
              >
                {/* Image */}
                <motion.img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="h-full w-full object-cover"
                  initial={{ opacity: 0, x: 6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Text Overlay */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6 sm:p-8 md:p-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="rounded-2xl bg-black/30 px-6 py-4 backdrop-blur-md sm:px-8 sm:py-5 md:px-10 md:py-6">
                    <motion.p
                      className="text-center text-lg font-medium leading-relaxed text-white sm:text-xl md:text-2xl"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {slide.quote}
                    </motion.p>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className={`absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Previous slide"
        >
          <svg
            className="h-5 w-5 text-white sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 hover:scale-110 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
          aria-label="Next slide"
        >
          <svg
            className="h-5 w-5 text-white sm:h-6 sm:w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Navigation Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'h-3 w-3 bg-[color:var(--accent)] opacity-100 shadow-[0_4px_12px_rgba(152,210,192,0.5)]'
                : 'h-2.5 w-2.5 bg-slate-300 opacity-60 hover:opacity-80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ShowcaseCarousel

