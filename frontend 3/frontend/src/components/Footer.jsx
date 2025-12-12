import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Footer() {
  const footerRef = useRef(null)
  const vantaRef = useRef(null)
  const [vantaEffect, setVantaEffect] = useState(null)

  useEffect(() => {
    if (!footerRef.current) return undefined

    const ctx = gsap.context(() => {
      gsap.from(footerRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  // Vanta WAVES background effect
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.ripple.min.js'
    script.async = true

    script.onload = () => {
      if (!vantaEffect && window.VANTA && vantaRef.current) {
        setVantaEffect(
          window.VANTA.WAVES({
            el: vantaRef.current,
            THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            color: 0x98d2c0, // mint accent
            shininess: 20,
            waveHeight: 15,
            waveSpeed: 0.9,
            zoom: 0.9,
            backgroundColor: 0xffffff, // keep footer white, waves show softly
          }),
        )
      }
    }

    document.body.appendChild(script)

    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        vantaEffect.destroy()
      }
    }
  }, [vantaEffect])

  return (
    <footer ref={footerRef} className="relative overflow-hidden">
      {/* Vanta WAVES background container - behind the footer */}
      <div ref={vantaRef} className="absolute inset-0 -z-10 overflow-hidden" />

      {/* Footer card - positioned above Vanta background */}
      <div className="relative z-10 border-t border-gray-200 bg-white px-6 py-16 text-gray-600">
        <div className="mx-auto flex max-w-7xl flex-col gap-10">
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#98D2C0]/25 text-lg font-semibold text-[#235347] shadow-sm">
                CW
              </div>
              <div>
                <p className="text-base font-semibold text-[#235347]">CrimeWatch</p>
                <p className="text-sm text-gray-500">Making invisible stories impossible to ignore.</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              We surface underreported district-level incidents, verify them with AI, and connect
              people to real support.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-2 text-sm font-semibold text-gray-600 sm:grid-cols-1">
              {['Home', 'Features', 'Heatmap', 'Cases', 'Support'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="transition hover:text-[#98D2C0]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Follow
            </p>
            <div className="flex items-center gap-3">
              {[
                {
                  id: 'twitter',
                  label: 'Twitter',
                  path: 'M19.633 7.997c.013.181.013.363.013.544 0 5.54-4.216 11.92-11.92 11.92-2.37 0-4.57-.693-6.422-1.888.33.038.648.05.991.05a8.4 8.4 0 0 0 5.21-1.794 4.2 4.2 0 0 1-3.92-2.91c.257.038.514.063.784.063.38 0 .759-.05 1.112-.144a4.194 4.194 0 0 1-3.362-4.118v-.05c.546.304 1.18.487 1.853.513a4.187 4.187 0 0 1-1.868-3.49c0-.784.206-1.508.567-2.139a11.91 11.91 0 0 0 8.645 4.384 4.73 4.73 0 0 1-.104-.961 4.193 4.193 0 0 1 7.257-2.866 8.254 8.254 0 0 0 2.657-1.012 4.18 4.18 0 0 1-1.842 2.317 8.39 8.39 0 0 0 2.409-.649 9.013 9.013 0 0 1-2.094 2.165Z',
                },
                {
                  id: 'linkedin',
                  label: 'LinkedIn',
                  path: 'M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2ZM8.338 17.338H6.169V10.25h2.169v7.088ZM7.253 9.28a1.255 1.255 0 1 1 0-2.51 1.255 1.255 0 0 1 0 2.51Zm10.084 8.058h-2.168v-3.554c0-.848-.015-1.94-1.183-1.94-1.185 0-1.366.925-1.366 1.878v3.616h-2.168V10.25h2.082v.966h.03c.29-.55 1-.985 2.056-.985 2.2 0 2.607 1.45 2.607 3.335v3.772Z',
                },
                {
                  id: 'instagram',
                  label: 'Instagram',
                  path: 'M12 7.35a4.65 4.65 0 1 0 0 9.3 4.65 4.65 0 0 0 0-9.3Zm0 7.65a3 3 0 1 1 0-6.001 3 3 0 0 1 0 6Zm5.85-7.89a1.085 1.085 0 1 1-2.17 0 1.085 1.085 0 0 1 2.17 0ZM12 4.5c1.808 0 2.02.007 2.73.04.66.03 1.02.14 1.258.233.317.123.544.27.783.508.238.239.385.466.508.783.093.238.202.599.233 1.258.033.71.04.922.04 2.73s-.007 2.02-.04 2.73c-.031.659-.14 1.02-.233 1.257a2.18 2.18 0 0 1-.508.784 2.18 2.18 0 0 1-.784.508c-.237.093-.598.202-1.257.233-.71.033-.922.04-2.73.04s-2.02-.007-2.73-.04c-.659-.031-1.02-.14-1.257-.233a2.18 2.18 0 0 1-.784-.508 2.18 2.18 0 0 1-.508-.784c-.093-.237-.202-.598-.233-1.257C7.5 14.02 7.493 13.808 7.493 12s.007-2.02.04-2.73c.031-.659.14-1.02.233-1.258.123-.317.27-.544.508-.783.239-.238.466-.385.784-.508.237-.093.598-.202 1.257-.233.71-.033.922-.04 2.73-.04Zm0-1.5c-1.84 0-2.073.008-2.795.041-.72.033-1.213.147-1.64.315a3.677 3.677 0 0 0-1.33.867 3.677 3.677 0 0 0-.868 1.33c-.168.427-.282.92-.315 1.64-.033.722-.04.955-.04 2.795 0 1.84.007 2.073.04 2.795.033.72.147 1.213.315 1.64.18.47.42.89.868 1.33.44.447.86.687 1.33.867.427.168.92.282 1.64.315.722.033.955.041 2.795.041s2.073-.008 2.795-.041c.72-.033 1.213-.147 1.64-.315a3.677 3.677 0 0 0 1.33-.867 3.677 3.677 0 0 0 .868-1.33c.168-.427.282-.92.315-1.64.033-.722.041-.955.041-2.795 0-1.84-.008-2.073-.041-2.795-.033-.72-.147-1.213-.315-1.64a3.677 3.677 0 0 0-.867-1.33 3.677 3.677 0 0 0-1.33-.867c-.427-.168-.92-.282-1.64-.315C14.073 3.008 13.84 3 12 3Z',
                },
              ].map((icon) => (
                <a
                  key={icon.id}
                  href="#"
                  aria-label={icon.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#98D2C0]/10 text-[#235347] transition hover:bg-[#98D2C0]/20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path d={icon.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          </div>

          <div className="border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
            © 2025 CrimeWatch. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

