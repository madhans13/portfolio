import styles from './navigation.module.css'

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <a href="#" className={styles.link}>
            <i className="fas fa-home"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.link}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#contact" className={styles.link}>
            <i className="fas fa-phone"></i>
          </a>
          <button className={styles.bookCall}>Book a Call</button>
        </div>
      </nav>
    </header>
  )
}

export default Navigation 