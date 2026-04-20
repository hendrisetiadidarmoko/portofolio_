
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
function App() {
  return (
    <>
      <div className='relative scroll-smooth md:scroll-auto'>
        <Navbar />
        <Home />
        <About/>
        <Skills/>
        <Projects/> 
        <Footer/>
      </div>
      
      <h1>Hello World</h1>
    </>
  )
}

export default App