import Reveal from '../Reveal/Reveal'
import './Skills.css'

function Skills({ t }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t.skills.title}</h2>
      <dl className="skills-list">
        {t.skills.groups.map((group, index) => (
          <Reveal key={group.label} delay={index * 60}>
            <dt>{group.label}</dt>
            <dd>{group.items}</dd>
          </Reveal>
        ))}
      </dl>
    </section>
  )
}

export default Skills
