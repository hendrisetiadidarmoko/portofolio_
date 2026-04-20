import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full px-6 py-4 z-50 transition-all duration-300 
      ${scrolled ? 'bg-blue/70 backdrop-blur-md text-white shadow-lg' : 'bg-transparent text-blue-200'}`}>
      
      <div className="flex justify-between items-center px-10">

        <h1 className="text-2xl font-bold">Portofolio</h1>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li><a href="#beranda" className="hover:text-gray-400">Beranda</a></li>
          <li><a href="#about" className="hover:text-gray-400">About</a></li>
          <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
        </ul>

        
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-blue/80 backdrop-blur-md rounded-xl p-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><a href="#beranda" onClick={() => setIsOpen(false)}>Beranda</a></li>
            <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar