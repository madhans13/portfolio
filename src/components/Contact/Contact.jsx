import styles from './contact.module.css'
import { FaEnvelope, FaUser } from 'react-icons/fa'

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section className={styles.contact}>
      <h2 className="section-title">Get in touch</h2>
      <p className={styles.description}>
        I'm always interested in exploring new opportunities and collaborating on exciting projects.
        Feel free to reach out if you'd like to discuss potential collaborations or just say hello!
      </p>
      
      <div className={styles.formContainer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <div className={styles.inputWrapper}>
              <FaUser className={styles.inputIcon} />
              <input
                type="text"
                placeholder="Full Name"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.inputWrapper}>
              <FaEnvelope className={styles.inputIcon} />
              <input
                type="email"
                placeholder="Email Address"
                className={styles.input}
                required
              />
            </div>
          </div>
          <div className={styles.inputWrapper}>
            <textarea
              placeholder="Write your message here..."
              className={styles.textarea}
              required
              rows="5"
            ></textarea>
          </div>
          <button type="submit" className={styles.submit}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact 