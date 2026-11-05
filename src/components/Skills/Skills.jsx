import './Skills.css'

function Skills({ t }) {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">{t.skills.title}</h2>
      <dl className="skills-list">
        {t.skills.groups.map((group) => (
          <div key={group.label}>
            <dt>{group.label}</dt>
            <dd>{group.items}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export default Skills
