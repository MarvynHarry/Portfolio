import { useState } from 'react'
import Reveal from '../Reveal/Reveal'
import './Contact.css'

// Clave gratuita de https://web3forms.com (definir VITE_WEB3FORMS_KEY en .env o en el secret del workflow)
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || ''
const SUBJECT = 'Contacto desde Portfolio'

const EMPTY_FORM = { name: '', email: '', message: '' }

function Contact({ t }) {
  const [formData, setFormData] = useState(EMPTY_FORM)
  const [formStatus, setFormStatus] = useState('')
  const form = t.contact.form

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error')
      return
    }

    // Sin clave de Web3Forms: abrir el cliente de correo como respaldo
    if (!WEB3FORMS_KEY) {
      window.location.href = `mailto:marvynharry@gmail.com?subject=${encodeURIComponent(SUBJECT)}&body=${encodeURIComponent(`Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`)}`
      return
    }

    setFormStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: SUBJECT,
          from_name: 'Portfolio',
          ...formData
        })
      })
      const data = await res.json()
      if (!data.success) throw new Error(data.message)

      setFormData(EMPTY_FORM)
      setFormStatus('success')
    } catch {
      setFormStatus('sendError')
    }
  }

  const statusMessages = {
    success: form.successMessage,
    error: form.errorMessage,
    sendError: form.sendError
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">{t.contact.title}</h2>
      <Reveal className="contact-body">
        <div>
          <h3>{t.contact.heading}</h3>
          <p className="contact-direct">{t.contact.direct}</p>
          <p className="contact-email">
            <a href="mailto:marvynharry@gmail.com">marvynharry@gmail.com</a>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <label>
            {form.name}
            <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            {form.email}
            <input type="email" name="email" autoComplete="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            {form.message}
            <textarea name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>
          </label>

          <p className={`form-status ${formStatus}`} role="status">
            {statusMessages[formStatus]}
          </p>

          <button type="submit" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? form.sending : form.submit}
          </button>
        </form>
      </Reveal>
    </section>
  )
}

export default Contact
