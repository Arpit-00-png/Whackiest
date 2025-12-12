import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { motion } from "framer-motion"

function Hero() {
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js"
    script.async = true

    script.onload = () => {
      if (!vantaEffect && window.VANTA) {
        setVantaEffect(
          window.VANTA.GLOBE({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,

            color: 0x68b3a0,
            color2: 0xffffff,
            backgroundColor: 0xffffff,
          })
        )
      }
    }

    document.body.appendChild(script)

    return () => vantaEffect?.destroy?.()
  }, [vantaEffect])

  return (
    <div className="relative h-screen w-full overflow-hidden">

      {/* 🔥 FULLSCREEN VANTA BACKGROUND */}
      <div
        ref={vantaRef}
        className="absolute inset-0 -z-20 w-full h-full"
      />

      {/* MAIN CONTENT */}
      <section
        id="hero"
        className="relative z-10 flex items-center justify-center px-6 lg:px-12"
        style={{ height: "100%" }}
      >
        {/* ❗ CARD FLOATS ABOVE THE VANTA BACKGROUND */}
        <div className="relative w-full max-w-6xl rounded-[42px] p-12 bg-white/20 backdrop-blur-xl shadow-[0_32px_90px_rgba(15,23,42,0.15)] border border-white/30">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-7 lg:gap-8"
          >
            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/60 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 backdrop-blur">
              HUMAN SIGNAL INTELLIGENCE
            </div>

            {/* Title */}
            <h1 className="text-4xl font-semibold leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
              Making Invisible Stories Impossible to Ignore.
            </h1>

            {/* Description */}
            <p className="text-lg leading-relaxed text-slate-700 sm:text-xl">
              Every day, thousands of district-level crime reports disappear without reaching the public.
              <br />
              Our platform uncovers these stories, verifies them with AI, and connects victims to real support.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <button className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-slate-900 shadow-md hover:shadow-lg transition">
                Explore Cases
              </button>
              <button className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:border-[color:var(--accent)] transition">
                How It Works
              </button>
            </div>

            {/* Features */}
            <div className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/70 px-4 py-3 backdrop-blur shadow">
                Verified sources, traced to district records.
              </div>
              <div className="rounded-2xl bg-white/70 px-4 py-3 backdrop-blur shadow">
                Survivor-safe workflows with rapid escalation paths.
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  )
}

export default Hero
