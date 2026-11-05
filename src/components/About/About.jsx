import Reveal from '../Reveal/Reveal'
import './About.css'

function About({ t }) {
  return (
    <section id="about" className="section">
      <h2 className="section-title">{t.about.title}</h2>
      <div className="about-body">
        {t.about.paragraphs.map((paragraph) => (
          <Reveal as="p" key={paragraph}>{paragraph}</Reveal>
        ))}
        <dl className="about-facts">
          {t.about.facts.map((fact, index) => (
            <Reveal key={fact.label} delay={index * 80}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default About
