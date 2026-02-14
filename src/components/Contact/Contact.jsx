import { useState } from 'react'
import './Contact.css'

function Contact({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }

    // Crear el mailto link
    const mailtoLink = `mailto:marvyn@example.com?subject=${encodeURIComponent(formData.subject || 'Contacto desde Portfolio')}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`

    window.location.href = mailtoLink

    // Limpiar formulario
    setFormData({ name: '', email: '', subject: '', message: '' })
    setFormStatus('success')

    setTimeout(() => setFormStatus(''), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-label">{t.contact.label}</span>
          <h2 className="section-title">{t.contact.title}</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>{t.contact.subtitle}</h3>
            <p>{t.contact.description}</p>

            <div className="contact-cards">
              <a href="mailto:marvyn@example.com" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4>{t.contact.cards[0].title}</h4>
                  <p>{t.contact.cards[0].value}</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/marvynharry/" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <h4>{t.contact.cards[1].title}</h4>
                  <p>{t.contact.cards[1].value}</p>
                </div>
              </a>

              <a href="https://github.com/marvynharry" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <h4>{t.contact.cards[2].title}</h4>
                  <p>{t.contact.cards[2].value}</p>
                </div>
              </a>
{/* 
              <a href="https://twitter.com/marvynharry" target="_blank" rel="noopener noreferrer" className="contact-card">
                <div className="contact-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </div>
                <div>
                  <h4>{t.contact.cards[3].title}</h4>
                  <p>{t.contact.cards[3].value}</p>
                </div>
              </a> */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-section">
            <h3>{t.contact.form?.title || 'Envíame un mensaje'}</h3>
            <p>{t.contact.form?.description || 'Completa el formulario y me pondré en contacto contigo pronto.'}</p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">{t.contact.form?.name || 'Nombre'}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.form?.namePlaceholder || 'Tu nombre'}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">{t.contact.form?.email || 'Email'}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.form?.emailPlaceholder || 'tu@email.com'}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">{t.contact.form?.subject || 'Asunto'}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.form?.subjectPlaceholder || 'Asunto del mensaje'}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">{t.contact.form?.message || 'Mensaje'}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.form?.messagePlaceholder || 'Escribe tu mensaje aquí...'}
                  rows="6"
                  required
                ></textarea>
              </div>

              {formStatus === 'success' && (
                <div className="form-message success">
                  {t.contact.form?.successMessage || '¡Mensaje enviado con éxito!'}
                </div>
              )}

              {formStatus === 'error' && (
                <div className="form-message error">
                  {t.contact.form?.errorMessage || 'Por favor completa todos los campos requeridos.'}
                </div>
              )}

              <button type="submit" className="submit-btn">
                <span>{t.contact.form?.submit || 'Enviar Mensaje'}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
