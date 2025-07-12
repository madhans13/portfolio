import styles from './navigation.module.css'

const Navigation = () => {
  return (
    // The header now uses its own class and is no longer a flex container
    <header className={styles.header}>
      {/* 1. The main container is now the <nav> element itself */}
      <nav className={styles.expandableNav}>

        <a href="#home" className={styles.navIconLink}>
          <i className="fas fa-home"></i>
          {/* 2. CRITICAL: Added a span for the text label */}
          <span className={styles.linkText}>Home</span>
        </a>
        
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.navIconLink}>
          <i className="fab fa-twitter"></i>
          <span className={styles.linkText}>Twitter</span>
        </a>

        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.navIconLink}>
          <i className="fab fa-instagram"></i>
          <span className={styles.linkText}>Instagram</span>
        </a>

        <a href="#contact" className={styles.navIconLink}>
          <i className="fas fa-phone"></i>
          <span className={styles.linkText}>Contact</span>
        </a>
        
        {/* 3. The button is now an <a> tag for consistency */}
        <a href="#booking" className={styles.navCta}>
          <i className="fas fa-calendar-check"></i>
          <span className={styles.linkText}>Book a Call</span>
        </a>

      </nav>
    </header>
  )
}

export default Navigation;