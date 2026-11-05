import Reveal from '../Reveal/Reveal'
import './Experience.css'

function Experience({ t }) {
  return (
    <section id="experience" className="section">
      <h2 className="section-title">{t.experience.title}</h2>
      <div className="experience-list">
        {t.experience.jobs.map((job) => (
          <Reveal as="article" key={job.company} className="job">
            <header className="job-header">
              <h3>{job.company}</h3>
              <p className="job-period">{job.period}</p>
            </header>
            <p className="job-role">{job.role} · {job.location}</p>
            <ul>
              {job.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="job-stack">{job.stack}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Experience
