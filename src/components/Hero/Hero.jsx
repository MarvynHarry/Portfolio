import './Hero.css'

const FLOATING_LOGOS = Object.values(
  import.meta.glob('../../assets/tech/*.svg', { eager: true, query: '?url', import: 'default' })
)

function Hero({ t }) {
  return (
    <section id="top" className="hero">
      <div className="hero-backdrop" aria-hidden="true">
        <span className="hero-glow hero-glow-1"></span>
        <span className="hero-glow hero-glow-2"></span>
        {FLOATING_LOGOS.map((logo) => (
          <img key={logo} src={logo} alt="" className="hero-tech" width="44" height="44" loading="lazy" decoding="async" />
        ))}
      </div>

      <div className="hero-text">
        <p className="hero-role">
          <span style={{ '--chars': t.hero.role.length }}>{t.hero.role}</span>
        </p>
        <h1>Marvyn Harryson</h1>
        <p className="hero-lead">{t.hero.lead}</p>
        <p className="hero-availability">{t.hero.availability}</p>
        <p className="hero-location">{t.hero.location}</p>
        <div className="hero-links">
          <a href="mailto:marvynharry@gmail.com" className="hero-cta">{t.hero.email}</a>
          <a href="/Marvyn Harryson CV.pdf" download="Marvyn_Harryson_CV.pdf">{t.hero.downloadCV}</a>
          <a href="https://www.linkedin.com/in/marvynharry/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/marvynharry" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
      <picture className="hero-photo">
        <source srcSet="/profile.webp" type="image/webp" />
        <img src="/profile.jpg" alt={t.hero.photoAlt} width="800" height="1000" fetchPriority="high" />
      </picture>
    </section>
  )
}

export default Hero
