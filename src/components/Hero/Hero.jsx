import styles from './hero.module.css'
import profileImage from '../../assets/profile.png'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img 
        src={profileImage} 
        alt="Profile" 
        className={styles.profileImage} 
      />
      <h1 className={styles.title}>Hey, I'm Madhan.</h1>
      <h2 className={styles.subtitle}>Devops & Designer</h2>
      <p className={styles.description}>
      Engineer by degree. Designer by passion. DevOps by drive.
      I build, automate, and design systems that just work — and look good doing it.
      </p>
      <div className={styles.buttons}>
        <button className={styles.primaryButton}>
          Get Resume
        </button>
        <div className={styles.availabilityTag}>
          <span className={styles.availabilityDot}></span>
          Learning
        </div>
      </div>
    </section>
  )
}

export default Hero 