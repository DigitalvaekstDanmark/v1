'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#ydelser', label: 'Ydelser' },
    { href: '#om-os', label: 'Om os' },
    { href: '#processen', label: 'Processen' },
    { href: '#kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 nav-backdrop border-b border-[#E4E1D9] transition-shadow duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="font-display font-extrabold text-[17px] text-navy tracking-tight no-underline">
            Digital <span className="text-accent">Vækst</span> Danmark
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-8 list-none">
            {links.map(l => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-[#5A6880] no-underline hover:text-accent transition-colors duration-200">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href="#kontakt"
              className="hidden md:inline-block bg-accent text-white px-5 py-2.5 rounded-[8px] text-sm font-medium no-underline hover:bg-[#1459CC] transition-all duration-200 hover:-translate-y-px"
            >
              Få et tilbud
            </a>
            <button
              onClick={() => setMenuOpen(v => !v)}
              className="md:hidden flex flex-col gap-[5px] p-1 bg-transparent border-none cursor-pointer"
              aria-label="Menu"
            >
              <span className={`block w-[22px] h-[2px] bg-navy rounded-sm transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block w-[22px] h-[2px] bg-navy rounded-sm transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[22px] h-[2px] bg-navy rounded-sm transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-[68px] left-0 right-0 z-40 bg-white border-b border-[#E4E1D9] px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-base text-[#5A6880] no-underline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#kontakt"
            onClick={() => setMenuOpen(false)}
            className="bg-accent text-white text-center px-5 py-3 rounded-[8px] text-sm font-medium no-underline"
          >
            Få et tilbud
          </a>
        </div>
      )}
    </>
  )
}
