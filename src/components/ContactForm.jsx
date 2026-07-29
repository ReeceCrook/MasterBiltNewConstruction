import { useState } from 'react'
import { CONTACT } from '../data/content'
import './ContactForm.css'

// FormSubmit form ID — keeps the real destination address out of the public bundle.
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/cc448b7dcb295cdc92049a29597ece3d'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const initialFields = { name: '', email: '', phone: '', message: '', _honey: '' }
const initialErrors = { name: '', email: '', message: '' }

function validate(fields) {
  const errors = { ...initialErrors }
  if (!fields.name.trim()) errors.name = 'Name is required.'
  if (!fields.email.trim()) errors.email = 'Email is required.'
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = 'Enter a valid email address.'
  if (!fields.message.trim()) errors.message = 'Message is required.'
  return errors
}

export default function ContactForm() {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState(initialErrors)
  const [status, setStatus] = useState('idle')
  const [submittedName, setSubmittedName] = useState('')

  function handleChange(event) {
    const { name, value } = event.target
    setFields((prev) => ({ ...prev, [name]: value }))
  }

  function handleBlur(event) {
    const { name } = event.target
    if (name !== 'name' && name !== 'email' && name !== 'message') return
    setErrors((prev) => ({ ...prev, [name]: validate(fields)[name] }))
  }

  async function handleSubmit(event) {
    event.preventDefault()
    if (fields._honey) return

    const nextErrors = validate(fields)
    setErrors(nextErrors)
    if (nextErrors.name || nextErrors.email || nextErrors.message) return

    setStatus('submitting')

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          phone: fields.phone,
          message: fields.message,
          _subject: `New inquiry from ${fields.name} via 10126alamarway.com`,
        }),
      })

      if (!response.ok) throw new Error('Request failed')

      setSubmittedName(fields.name)
      setStatus('success')
      setFields(initialFields)
      setErrors(initialErrors)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <p className="contact-form__success" role="status">
        Thanks, {submittedName}! Your message is on its way &mdash; we&rsquo;ll be in touch soon.
      </p>
    )
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <input
        type="text"
        name="_honey"
        value={fields._honey}
        onChange={handleChange}
        className="contact-form__honey"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="contact-form__row">
        <label className="contact-form__field">
          <span>Name *</span>
          <input
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-form-name-error' : undefined}
            autoComplete="name"
          />
          {errors.name && (
            <span id="contact-form-name-error" className="contact-form__field-error">
              {errors.name}
            </span>
          )}
        </label>

        <label className="contact-form__field">
          <span>Phone</span>
          <input
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            autoComplete="tel"
          />
        </label>
      </div>

      <label className="contact-form__field">
        <span>Email *</span>
        <input
          type="email"
          name="email"
          value={fields.email}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-form-email-error' : undefined}
          autoComplete="email"
        />
        {errors.email && (
          <span id="contact-form-email-error" className="contact-form__field-error">
            {errors.email}
          </span>
        )}
      </label>

      <label className="contact-form__field">
        <span>Message *</span>
        <textarea
          name="message"
          value={fields.message}
          onChange={handleChange}
          onBlur={handleBlur}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-form-message-error' : undefined}
          rows={4}
        />
        {errors.message && (
          <span id="contact-form-message-error" className="contact-form__field-error">
            {errors.message}
          </span>
        )}
      </label>

      <button type="submit" className="contact-form__submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'error' && (
        <p className="contact-form__error" role="alert">
          Something went wrong sending your message. Please try again, or call{' '}
          {CONTACT.phone} instead.
        </p>
      )}
    </form>
  )
}
