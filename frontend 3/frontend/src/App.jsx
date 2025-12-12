import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Bento from './sections/Bento'
import RecentCases from './sections/RecentCases'
import Footer from './components/Footer'
import Showcase from './sections/Showcase'
import CitiesHeatmapSection from './sections/CitiesHeatmapSection'

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(152,210,192,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(152,210,192,0.16),transparent_30%)]" />
      <main className="relative z-10 flex flex-col gap-16 pb-20 lg:gap-24">
        <Navbar />
        <Hero />
        <Showcase />
        <Bento />
        <CitiesHeatmapSection />
        <RecentCases />
        <Footer />
      </main>
    </div>
  )
}

export default App
