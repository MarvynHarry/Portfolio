import './Skills.css'

function Skills({ t, skills }) {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.skills.label}</span>
          <h2 className="section-title">{t.skills.title}</h2>
        </div>

        <div className="skills-container">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="skill-category">
              <div className="category-header">
                <div className="category-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.548 20.938h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1zM3.548 18.938h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1zM3.548 16.938h16.9a.5.5 0 0 0 0-1h-16.9a.5.5 0 0 0 0 1z"/>
                  </svg>
                </div>
                <h3>{t.skills.categories[category]}</h3>
              </div>
              <div className="skill-items">
                {items.map((skill, i) => (
                  <div key={i} className="skill-item" style={{ animationDelay: `${i * 0.05}s` }}>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
