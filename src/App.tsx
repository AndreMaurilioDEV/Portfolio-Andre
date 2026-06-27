
import { Hero } from './components/portfolio/Hero'
import { About } from './components/portfolio/About'
import { Skills } from './components/portfolio/Skills'
import { Projects } from './components/portfolio/Projects'
import { Contact } from './components/portfolio/Contact'
import { Footer } from './components/portfolio/Footer'
import { Navbar } from './components/portfolio/Navbar'

import './App.css'

function App() {

  return (
    <>
    <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
