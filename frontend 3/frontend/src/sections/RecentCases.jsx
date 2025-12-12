import { useRef } from 'react'
import useGsapHorizontalFullPageCases from '../hooks/useGsapHorizontalFullPageCases'
import image1 from '../assets/recent-cases/manipur.jpeg'
import image2 from '../assets/recent-cases/aarushi.jpeg'
import image3 from '../assets/recent-cases/ssr.jpeg'
import image4 from '../assets/recent-cases/bhima.jpeg'
import image5 from '../assets/recent-cases/sl.jpeg'

const cases = [
  {
    id: 'c1',
    title: 'Manipur Violence (2023-2025) - Under-reporting & Bias',
    summary:
      'Early ethnic clashes in Manipur went massively underreported. Many mainstream outlets ignored brutal incidents until viral videos forced coverage, while narratives aligned with political angles rather than balanced reporting.',
    image: image1,
  },
  {
    id: 'c2',
    title: 'Aarushi Talwar Case (2008) - Sensationalism & Trial by Media',
    summary:
      "One of India's worst cases of yellow journalism - TV channels pushed unverified theories, character assassinations, and family scandals long before the courts spoke. The Supreme Court later condemned this coverage.",
    image: image2,
  },
  {
    id: 'c3',
    title: 'SSR & Rhea Media Circus (2020-2025)',
    summary:
      "Sushant Singh Rajput's death turned into a media frenzy full of conspiracy theories, moral policing, and character attacks. Years later, official CBI reports rejected most claims - but public damage was irreversible.",
    image: image3,
  },
  {
    id: 'c4',
    title: 'Bhima Koregaon - Ignored Evidence Planting Investigations',
    summary:
      'A major Wired investigation exposed alleged police hacking and evidence planting against activists - yet mainstream Indian media almost completely ignored the story, leaving serious civil liberties issues unreported.',
    image: image4,
  },
  {
    id: 'c5',
    title: 'Badaun Case (2014) - Misleading Early Reporting',
    summary:
      'The case was initially reported as a gang-rape and murder. Months later, CBI found no evidence - but this correction received far less coverage than the sensational original narrative.',
    image: image5,
  },
]

function RecentCases() {
  const containerRef = useRef(null)
  const scrollerRef = useRef(null)

  useGsapHorizontalFullPageCases(containerRef, scrollerRef)

  return (
    <section
      id="recent-cases"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-[#f7fff8] to-white px-0 py-0"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(152,210,192,0.16),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(152,210,192,0.16),transparent_32%)]" />
      <div
        ref={containerRef}
        className="relative mx-auto max-w-[100vw] overflow-hidden"
      >
        <div
          ref={scrollerRef}
          className="flex h-screen w-max flex-row"
        >
          {cases.map((item) => (
            <article
              key={item.id}
              className="case-screen relative flex h-screen w-screen flex-col items-center justify-center gap-5 overflow-hidden px-10 text-center"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-10 opacity-90"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="relative z-10 flex max-w-3xl flex-col items-center justify-center gap-4 backdrop-blur-lg bg-white/65 rounded-2xl p-8 shadow-xl">
                <h3 className="text-4xl font-bold tracking-tight text-slate-800 md:text-5xl">
                  {item.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                  {item.summary}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentCases

