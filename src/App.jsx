import { useEffect, useState } from 'react'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

import { translations } from './data/translations'

const LANGUAGE_KEY = 'language'

function readLanguage() {
  try {
    return localStorage.getItem(LANGUAGE_KEY) === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

function App() {
  const [language, setLanguage] = useState(readLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem(LANGUAGE_KEY, language)
    } catch {
      // Sin almacenamiento disponible, el idioma solo dura esta visita
    }
  }, [language])

  const t = translations[language]

  return (
    <div className="page">
      <a href="#about" className="skip-link">{t.nav.skip}</a>
      <Navbar t={t} language={language} setLanguage={setLanguage} />
      <main>
        <Hero t={t} />
        <About t={t} />
        <Experience t={t} />
        <Skills t={t} />
        <Contact t={t} />
      </main>
      <Footer t={t} />
    </div>
  )
}

export default App
