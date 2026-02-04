'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface ContactFormProps {
  compact?: boolean
  title?: string
}

const ContactForm = ({ compact = false, title = "How Can We Help You?" }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  if (submitted) {
    return (
      <div className={`bg-white p-8 ${compact ? '' : 'shadow-xl'}`}>
        <div className="text-center py-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-serif font-semibold mb-2">Thank You!</h3>
          <p className="text-primary-600">
            We have received your message and will get back to you shortly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white ${compact ? '' : 'p-8 shadow-xl'}`}>
      {title && (
        <h3 className="text-2xl font-serif font-semibold mb-6">{title}</h3>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            value={formData.name}
            onChange={handleChange}
            className="input-field"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address *"
            required
            value={formData.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>
        <div className={compact ? 'space-y-4' : 'grid md:grid-cols-2 gap-4'}>
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="input-field"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Select a Service</option>
            <option value="corporate">Corporate Law</option>
            <option value="individuals">Individual Services</option>
            <option value="real-estate">Real Estate</option>
            <option value="technology">Technology & IP</option>
            <option value="finlex">FINLEX - Financial Recovery</option>
            <option value="medlex">MEDLEX - Medical Negligence</option>
            <option value="other">Other</option>
          </select>
        </div>
        <textarea
          name="message"
          placeholder="Tell us about your legal needs *"
          required
          rows={compact ? 3 : 5}
          value={formData.message}
          onChange={handleChange}
          className="input-field resize-none"
        />
        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center"
        >
          Send Message
          <Send className="ml-2 w-4 h-4" />
        </button>
      </form>
    </div>
  )
}

export default ContactForm
