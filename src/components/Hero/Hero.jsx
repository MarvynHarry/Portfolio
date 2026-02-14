import './Hero.css'

function Hero({ scrollY, t }) {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="grid-pattern"></div>

        {/* Floating Tech Icons */}
        <i className="tech-float tech-1 devicon-csharp-plain colored"></i>
        <i className="tech-float tech-2 devicon-dotnetcore-plain colored"></i>
        <i className="tech-float tech-3 devicon-react-original colored"></i>
        <i className="tech-float tech-4 devicon-angularjs-plain colored"></i>
        <i className="tech-float tech-5 devicon-typescript-plain colored"></i>
        <i className="tech-float tech-6 devicon-javascript-plain colored"></i>
        <i className="tech-float tech-7 devicon-nodejs-plain colored"></i>
        <i className="tech-float tech-8 devicon-python-plain colored"></i>
        <i className="tech-float tech-9 devicon-amazonwebservices-plain-wordmark colored"></i>
        <i className="tech-float tech-10 devicon-azure-plain colored"></i>
        <i className="tech-float tech-11 devicon-docker-plain colored"></i>
        <i className="tech-float tech-12 devicon-kubernetes-plain colored"></i>
        <i className="tech-float tech-13 devicon-microsoftsqlserver-plain colored"></i>
        <i className="tech-float tech-14 devicon-mysql-original colored"></i>
        <i className="tech-float tech-15 devicon-postgresql-plain colored"></i>
        <i className="tech-float tech-16 devicon-oracle-original colored"></i>
        <i className="tech-float tech-17 devicon-mongodb-plain colored"></i>
        <i className="tech-float tech-18 devicon-redis-plain colored"></i>
        <i className="tech-float tech-19 devicon-git-plain colored"></i>
        <i className="tech-float tech-20 devicon-azuredevops-plain colored"></i>
        <i className="tech-float tech-21 devicon-vuejs-plain colored"></i>
        <i className="tech-float tech-22 devicon-html5-plain colored"></i>
        <i className="tech-float tech-23 devicon-css3-plain colored"></i>
        <i className="tech-float tech-24 devicon-tailwindcss-original colored"></i>
        <i className="tech-float tech-25 devicon-firebase-plain colored"></i>
        <i className="tech-float tech-26 devicon-express-original"></i>
        <i className="tech-float tech-27 devicon-swagger-plain colored"></i>
        <i className="tech-float tech-28 devicon-jira-plain colored"></i>
        <i className="tech-float tech-29 devicon-githubactions-plain"></i>
        <i className="tech-float tech-30 devicon-vscode-plain colored"></i>
      </div>

      <div className="hero-content" style={{ transform: `translateY(${scrollY * 0.3}px)` }}>
        <div className="hero-badge">
          <span className="badge-dot"></span>
          {t.hero.badge}
        </div>

        <h1 className="hero-title">
          {t.hero.greeting}
          <span className="gradient-text animate-gradient"> {t.hero.name}</span>
        </h1>

        <p className="hero-subtitle">
          <span className="typing-text">{t.hero.role}</span>
        </p>

        <p className="hero-description">
          {t.hero.description}
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            <span>{t.hero.viewProjects}</span>
            <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href={`${import.meta.env.BASE_URL}Marvyn Harryson CV.pdf`} download="Marvyn_Harryson_CV.pdf" className="btn btn-secondary">
            <span>{t.hero.downloadCV}</span>
            <svg className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </a>
          <a href="#contact" className="btn btn-outline">
            <span>{t.hero.contactMe}</span>
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">3+</div>
            <div className="stat-label">{t.hero.stats.years}</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">25+</div>
            <div className="stat-label">{t.hero.stats.projects}</div>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">{t.hero.stats.clients}</div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  )
}

export default Hero
