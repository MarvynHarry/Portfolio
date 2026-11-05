import './About.css'

function About({ t }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-body">
        {t.about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <dl className="about-facts">
          {t.about.facts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About
