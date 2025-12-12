import ShowcaseCarousel from '../components/ShowcaseCarousel'
import slide1 from '../assets/live-cases/WhatsApp Image 2025-12-12 at 20.19.11.jpeg'
import slide2 from '../assets/live-cases/WhatsApp Image 2025-12-12 at 20.21.54.jpeg'
import slide3 from '../assets/live-cases/WhatsApp Image 2025-12-12 at 20.27.43.jpeg'

const slides = [
  {
    image: slide1,
    quote: 'Every story deserves to be seen, not buried.',
  },
  {
    image: slide2,
    quote: 'Truth becomes visible when signals align.',
  },
  {
    image: slide3,
    quote: 'Support pathways emerge when information flows freely.',
  },
]

function Showcase() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-6 sm:pt-10 lg:px-12">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-white to-[color:var(--accent)]/10" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 flex flex-col gap-2">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            Spotlight
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Live Cases Showcase
          </h2>
        </div>
        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-white/85 p-4 shadow-[0_26px_70px_rgba(15,23,42,0.1)] backdrop-blur-xl sm:p-5">
          <ShowcaseCarousel slides={slides} interval={6500} />
        </div>
      </div>
    </section>
  )
}

export default Showcase

