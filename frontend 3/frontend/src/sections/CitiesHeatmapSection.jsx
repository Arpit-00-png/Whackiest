import { useState } from 'react'
import { motion } from 'framer-motion'
import CityHeatmap from '../components/CityHeatmap'

// TODO: Uncomment and update these imports when city PNG files are uploaded to assets/cities/
import bengaluruMap from '../assets/cities/bengaluru.png'
import mumbaiMap from '../assets/cities/mumbai.png'
import delhiMap from '../assets/cities/delhi.png'

// Placeholder image (will be replaced when actual PNGs are uploaded)
const placeholderImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2U1ZTdlYiIgc3Ryb2tlPSIjYzJjN2QxIiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+Q2l0eSBNYXA8L3RleHQ+PC9zdmc+'

const CitiesHeatmapSection = () => {
  const [hoveredCity, setHoveredCity] = useState(null)

  const cities = [
    {
      id: 'bengaluru',
      name: 'Bengaluru',
      // Update this to: imagePath: bengaluruMap when PNG is uploaded
      imagePath: bengaluruMap,
      stats: {
        crimeRate: '12.4%',
        missingPersons: '234',
        violentCrimes: '89',
      },
    },
    {
      id: 'mumbai',
      name: 'Mumbai',
      // Update this to: imagePath: mumbaiMap when PNG is uploaded
      imagePath: mumbaiMap,
      stats: {
        crimeRate: '15.8%',
        missingPersons: '456',
        violentCrimes: '156',
      },
    },
    {
      id: 'delhi',
      name: 'Delhi',
      // Update this to: imagePath: delhiMap when PNG is uploaded
      imagePath: delhiMap,
      stats: {
        crimeRate: '18.2%',
        missingPersons: '678',
        violentCrimes: '234',
      },
    },
  ]

  const handleHover = (cityId) => {
    setHoveredCity(cityId)
  }

  const handleLeave = () => {
    setHoveredCity(null)
  }

  return (
    <section className="relative py-24 px-6 lg:px-12 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            City Crime Heatmap
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore crime statistics across major cities. Hover over a city to see detailed insights.
          </p>
        </motion.div>

        {/* Cities grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <CityHeatmap
                city={city.name}
                imagePath={city.imagePath}
                stats={city.stats}
                isHovered={hoveredCity === city.id}
                onHover={() => handleHover(city.id)}
                onLeave={handleLeave}
              />
            </motion.div>
          ))}
        </div>

        {/* Info text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          Data updated monthly • Hover to explore
        </motion.p>
      </div>
    </section>
  )
}

export default CitiesHeatmapSection

