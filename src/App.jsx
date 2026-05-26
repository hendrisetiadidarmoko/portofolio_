
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className='relative overflow-hidden'>
      <div className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_32%),radial-gradient(circle_at_top_right,rgba(37,99,235,0.15),transparent_28%),linear-gradient(180deg,#020617_0%,#08111f_45%,#020617_100%)]' />
      <div className='pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.04),transparent)] blur-3xl' />

      <div className='relative scroll-smooth'>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  )
}

export default App
