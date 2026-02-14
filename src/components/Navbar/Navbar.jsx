import './Navbar.css'

function Navbar({ activeSection, scrollY, language, setLanguage, translations }) {
  const t = translations[language]

  return (
    <nav className={`navbar ${scrollY > 50 ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="logo">
          <span className="logo-text">MH</span>
          <span className="logo-dot"></span>
        </a>
        <div className="nav-links">
          {Object.entries(t.nav).map(([key, value]) => (
            <a
              key={key}
              href={`#${key}`}
              className={activeSection === key ? 'active' : ''}
            >
              {value}
            </a>
          ))}
        </div>

        {/* Language Switch */}
        <div className="language-switch">
          <button
            className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <div className="switch-slider" style={{ transform: language === 'es' ? 'translateX(100%)' : 'translateX(0)' }}></div>
          <button
            className={`lang-btn ${language === 'es' ? 'active' : ''}`}
            onClick={() => setLanguage('es')}
          >
            ES
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
