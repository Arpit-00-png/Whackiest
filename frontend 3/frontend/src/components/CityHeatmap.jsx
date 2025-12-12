import { useState, useRef } from 'react'
import { motion } from 'framer-motion'

const CityHeatmap = ({ city, imagePath, stats, isHovered, onHover, onLeave }) => {
  const [showTooltip, setShowTooltip] = useState(false)
  const containerRef = useRef(null)

  const handleMouseEnter = () => {
    setShowTooltip(true)
    onHover()
  }

  const handleMouseLeave = () => {
    setShowTooltip(false)
    onLeave()
  }

  return (
    <div className="relative flex flex-col items-center gap-4">
      <motion.div
        ref={containerRef}
        className="relative w-full max-w-sm cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        initial={false}
        animate={{
          scale: isHovered ? 1.1 : 1,
          opacity: isHovered ? 1 : 0.4,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 25,
        }}
      >
        {/* Background blur overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl backdrop-blur-md"
          initial={false}
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Heat glow gradient overlay */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          initial={false}
          animate={{
            opacity: isHovered ? 0.6 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: isHovered
              ? 'radial-gradient(circle at center, rgba(255,200,0,0.4) 0%, rgba(255,100,0,0.3) 50%, rgba(255,0,0,0.2) 100%)'
              : 'transparent',
          }}
        />

        {/* City map container */}
        <div className="relative overflow-hidden rounded-3xl bg-white/80 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/50">
          <div className="relative w-full aspect-square">
            {/* Heat overlay directly on top of the map */}
            <motion.div
              className="absolute inset-4 rounded-2xl mix-blend-screen pointer-events-none"
              initial={false}
              animate={{ opacity: isHovered ? 0.7 : 0.15, scale: isHovered ? 1.03 : 1 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                background:
                  'radial-gradient(circle at 50% 45%, rgba(255,200,0,0.45), rgba(255,120,0,0.32) 40%, rgba(255,0,0,0.18) 70%)',
              }}
            />

            <img
              src={imagePath}
              alt={`${city} map`}
              className="relative z-10 h-full w-full object-contain"
              style={{
                filter: isHovered ? 'drop-shadow(0 0 20px rgba(255,150,0,0.55))' : 'none',
                transition: 'filter 0.3s ease-out',
              }}
              onError={(e) => {
                // Fallback if image fails to load
                e.target.style.display = 'none'
              }}
            />
          </div>
        </div>

        {/* Floating tooltip */}
        {showTooltip && isHovered && (
          <motion.div
            className="pointer-events-none absolute left-1/2 -bottom-6 z-40 w-full max-w-xs -translate-x-1/2 sm:max-w-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mx-auto bg-white/95 backdrop-blur-lg rounded-2xl p-4 shadow-2xl border border-white/50">
              <h3 className="text-sm font-bold text-slate-900 mb-3 text-center">{city}</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">Crime Rate</span>
                  <span className="text-sm font-semibold text-red-600">{stats.crimeRate}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">Missing Persons</span>
                  <span className="text-sm font-semibold text-orange-600">{stats.missingPersons}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-600">Violent Crimes</span>
                  <span className="text-sm font-semibold text-red-700">{stats.violentCrimes}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* City title */}
      <motion.h3
        className="text-lg font-semibold text-slate-800"
        animate={{
          opacity: isHovered ? 1 : 0.6,
        }}
        transition={{ duration: 0.3 }}
      >
        {city}
      </motion.h3>
    </div>
  )
}

export default CityHeatmap

