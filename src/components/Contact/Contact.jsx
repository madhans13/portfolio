import { useState } from 'react'
import styles from './contact.module.css'
import { FaEnvelope, FaUser, FaSpinner } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const Contact = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  // EmailJS configuration - Replace with your actual IDs
  const EMAILJS_SERVICE_ID = 'service_9bdnj29' // You have this one
  const EMAILJS_TEMPLATE_ID = 'template_hz02g5c' // Get from Templates section
  const EMAILJS_PUBLIC_KEY = 'iGTSwNFj7vtTByEld' // Get from Account → General

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Madhan', // Replace with your name
        },
        EMAILJS_PUBLIC_KEY
      )

      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id={id} className={styles.contact}>
      <h2 className="section-title">Get in touch</h2>
      <p className={styles.description}>
        I'm always interested in exploring new opportunities and collaborating on exciting projects.
        Feel free to reach out if you'd like to discuss potential collaborations or just say hello!
      </p>
      
      {submitStatus === 'success' && (
        <div className={styles.successMessage}>
          Message sent successfully!
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className={styles.errorMessage}>
          Failed to send message. Please try again.
        </div>
      )}

      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className={styles.input}
                value={formData.name}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
            <div className={styles.inputWrapper}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={styles.input}
                value={formData.email}
                onChange={handleInputChange}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <textarea
              name="message"
              placeholder="Write your message here..."
              className={styles.textarea}
              value={formData.message}
              onChange={handleInputChange}
              required
              rows="5"
              disabled={isSubmitting}
            />
          </div>
          <button 
            type="submit" 
            className={styles.submit}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <FaSpinner className={styles.spinner} />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact