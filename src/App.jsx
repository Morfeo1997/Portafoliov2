import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import AboutMe from './components/about-me-components/about-me.jsx'
import Skills from './components/skills-components/Skills.jsx'
import Projects from './components/projects-components/projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <AboutMe />
      <Skills />
      <Projects />
    </>
  )
}

export default App
