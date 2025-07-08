import styles from './hero.module.css'
import profileImage from '../../assets/react.svg'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img 
        src={profileImage} 
        alt="Profile" 
        className={styles.profileImage} 
      />
      <h1 className={styles.title}>Hey, I'm Mia Carter.</h1>
      <h2 className={styles.subtitle}>Dreamer & Designer</h2>
      <p className={styles.description}>
        Crafting seamless experiences and bold visuals. High school student by day, creative thinker, and aspiring innovator by night.
      </p>
      <div className={styles.buttons}>
        <button className={styles.primaryButton}>
          Get this Template
        </button>
        <div className={styles.availabilityTag}>
          <span className={styles.availabilityDot}></span>
          Available for new project
        </div>
      </div>
    </section>
  )
}

export default Hero 