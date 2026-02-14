import { useState, useEffect } from 'react'
import './App.css'

// Import components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

// Import data
import { translations } from './data/translations'
import { skills } from './data/skills'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollY, setScrollY] = useState(0)
  const [language, setLanguage] = useState('en')

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)

      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Update page title when language changes
  useEffect(() => {
    const titles = {
      en: 'Marvyn Harryson - Full Stack Developer',
      es: 'Marvyn Harryson - Desarrollador Full Stack'
    }
    document.title = titles[language]
  }, [language])

  const t = translations[language]

  return (
    <div className="portfolio">
      <Navbar
        activeSection={activeSection}
        scrollY={scrollY}
        language={language}
        setLanguage={setLanguage}
        translations={translations}
      />

      <Hero scrollY={scrollY} t={t} />

      <About t={t} />

      <Experience t={t} />

      <Projects t={t} />

      <Skills t={t} skills={skills} />

      <Contact t={t} />

      <Footer t={t} />
    </div>
  )
}

export default App
