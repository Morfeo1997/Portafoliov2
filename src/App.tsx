import { useState } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import AboutMe from './components/about-me-components/about-me'
import Skills from './components/skills-components/Skills'
import Projects from './components/projects-components/projects'
import Contact from './components/contact-components/contact'
import Certifications from './components/Certifications'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LanguageProvider>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </LanguageProvider>
  )
}

export default App
