import img1 from '../assets/bento/WhatsApp Image 2025-12-12 at 19.38.42 (1).png'
import img2 from '../assets/bento/WhatsApp Image 2025-12-12 at 19.38.42 (2).png'
import img3 from '../assets/bento/WhatsApp Image 2025-12-12 at 19.38.42 (3).png'
import img4 from '../assets/bento/WhatsApp Image 2025-12-12 at 19.38.42 (4).png'
import img5 from '../assets/bento/WhatsApp Image 2025-12-12 at 19.38.42 (5).png'
import img6 from '../assets/bento/WhatsApp Image 2025-12-12 at 19.45.04.png'

const cards = [
  {
    id: 'feeds',
    title: 'Smart District Feeds',
    subtitle: 'City-filtered, verified sources',
    gradient: {
      from: 'rgba(152,210,192,0.35)',
      via: 'rgba(255,255,255,0.95)',
      to: 'rgba(255,255,255,1)',
    },
    span: 'lg:row-span-2',
    copy: 'City-filtered feeds that pull verified crime and local news from trusted sources, refreshed continuously in real-time.',
    image: img1,
  },
  {
    id: 'watchlist',
    title: 'Story Watchlist',
    subtitle: 'Auto-track updates',
    gradient: {
      from: 'rgba(255,255,255,1)',
      via: 'rgba(152,210,192,0.24)',
      to: 'rgba(255,255,255,1)',
    },
    span: 'lg:col-span-2',
    copy: 'Follow any developing story with one tap and let the system handle the rest.',
    image: img2,
  },
  {
    id: 'credibility',
    title: 'Credibility Engine',
    subtitle: 'AI-scored reliability',
    gradient: {
      from: 'rgba(152,210,192,0.32)',
      via: 'rgba(255,255,255,0.96)',
      to: 'rgba(255,255,255,1)',
    },
    span: '',
    copy: 'An AI-powered scoring system that evaluates every article using source history, timestamp consistency, duplication checks, and cross-verification. Y.',
    image: img3,
  },
  {
    id: 'heat',
    title: 'Event Heatmap',
    subtitle: 'Live clusters',
    gradient: {
      from: 'rgba(255,255,255,1)',
      via: 'rgba(255,255,255,1)',
      to: 'rgba(152,210,192,0.22)',
    },
    span: '',
    copy: 'A live visual heatmap that highlights rising clusters, sudden spikes, and district-level activity patterns.',
    image: img4,
  },
  {
    id: 'timeline',
    title: 'Narrative Timeline',
    subtitle: 'End-to-end view',
    gradient: {
      from: 'rgba(152,210,192,0.28)',
      via: 'rgba(255,255,255,0.95)',
      to: 'rgba(255,255,255,1)',
    },
    span: 'lg:row-span-2',
    copy: 'All updates, sources, and developments from across the web are stitched into a single clear timeline. F',
    image: img5,
  },
  {
    id: 'api',
    title: 'API & Integrations',
    subtitle: 'Plug-and-play',
    gradient: {
      from: 'rgba(255,255,255,1)',
      via: 'rgba(152,210,192,0.2)',
      to: 'rgba(255,255,255,1)',
    },
    span: '',
    copy: 'Simple REST APIs and plug-and-play integrations that let you sync district signals, story updates, and alerts directly into your own apps, dashboards, or workflows.',
    image: img6,
  },
]

function Bento() {
  return (
    <section
      id="features"
      className="relative isolate px-6 lg:px-12"
      aria-labelledby="bento-heading"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white/60 via-white to-[rgba(152,210,192,0.16)]" />
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center gap-3">
          <span className="h-9 w-9 rounded-2xl bg-[color:var(--accent)]/20 text-center text-sm font-semibold leading-9 text-slate-900 shadow-sm">
            •
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Intelligence grid
            </p>
            <h2
              id="bento-heading"
              className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
            >
              All the signals in one calm bento.
            </h2>
          </div>
        </div>

        <div className="grid auto-rows-[15rem] grid-cols-1 gap-5 sm:gap-6 md:auto-rows-[16rem] md:grid-cols-2 lg:auto-rows-[18rem] lg:grid-cols-3">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`group relative overflow-hidden rounded-3xl border border-white/80 bg-white/80 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] ${card.span}`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0  group-hover:opacity-100">
                <img
                  src={card.image}
                  alt=""
                  className="h-full w-full object-cover"
                  loading="lazy"
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/30 to-white/60" />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-br opacity-0  group-hover:opacity-100"
                style={{
                  '--tw-gradient-from': card.gradient.from,
                  '--tw-gradient-via': card.gradient.via,
                  '--tw-gradient-to': card.gradient.to,
                  '--tw-gradient-stops':
                    'var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)',
                }}
              />
              <div className="relative flex h-full flex-col justify-between p-6 sm:p-7 lg:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                      {card.subtitle}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold leading-tight text-slate-900">
                      {card.title}
                    </h3>
                  </div>
                  <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold text-slate-700 shadow-sm">
                    Live
                  </span>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-slate-700 sm:text-base">
                  {card.copy}
                </p>
                <div className="flex items-center justify-between pt-3 text-sm font-semibold text-slate-900">
                  
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-800 shadow-sm transition group-hover:translate-x-1">
                    
                  </span>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-4 rounded-[26px] border border-white/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]" />
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--accent)]/35 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-[color:var(--accent)]/30 blur-3xl" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Bento

