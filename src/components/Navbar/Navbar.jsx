import './Navbar.css'

const SECTIONS = ['about', 'experience', 'skills', 'contact']

function Navbar({ t, language, setLanguage }) {
  return (
    <header className="navbar">
      <a href="#top" className="navbar-name">Marvyn Harryson</a>
      <nav className="navbar-links">
        {SECTIONS.map((section) => (
          <a key={section} href={`#${section}`}>{t.nav[section]}</a>
        ))}
      </nav>
      <div className="language-switch" role="group" aria-label={t.nav.language}>
        {['en', 'es'].map((code) => (
          <button
            key={code}
            type="button"
            aria-pressed={language === code}
            onClick={() => setLanguage(code)}
          >
            {code.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Navbar
