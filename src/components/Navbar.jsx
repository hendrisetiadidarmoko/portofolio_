import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-slate-950/80 shadow-[0_20px_50px_rgba(2,6,23,0.45)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10">
        <a href="#home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 text-sm font-bold text-white shadow-[0_0_30px_rgba(34,211,238,0.15)] transition group-hover:border-cyan-300/60 group-hover:bg-white/10">
            HS
          </span>
          <div>
            <h1 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
              Portofolio
            </h1>
            <p className="text-xs text-slate-400">Web Developer</p>
          </div>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium md:flex">
          <li><a href="#home" className="text-slate-300 transition hover:text-cyan-300">Beranda</a></li>
          <li><a href="#about" className="text-slate-300 transition hover:text-cyan-300">About</a></li>
          <li><a href="#skills" className="text-slate-300 transition hover:text-cyan-300">Skills</a></li>
          <li><a href="#projects" className="text-slate-300 transition hover:text-cyan-300">Projects</a></li>
          <li><a href="#contact" className="text-slate-300 transition hover:text-cyan-300">Contact</a></li>
        </ul>

        <button
          className="rounded-full border border-white/10 bg-white/5 p-3 text-white transition hover:border-cyan-300/50 hover:bg-white/10 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span className="block text-xl leading-none">{isOpen ? '✕' : '☰'}</span>
        </button>
      </div>

      {isOpen && (
        <div className="mx-5 mb-4 rounded-3xl border border-white/10 bg-slate-950/90 p-4 shadow-2xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium">
            <li><a href="#home" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-cyan-300">Beranda</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-cyan-300">About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-cyan-300">Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-cyan-300">Projects</a></li>
            <li><a href="#contact" onClick={() => setIsOpen(false)} className="block rounded-2xl px-4 py-3 text-slate-200 transition hover:bg-white/5 hover:text-cyan-300">Contact</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
