import styles from './hero.module.css'
import profileImage from '../../assets/profile.png'
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText'
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Hero = () => {
  return (
    <section className={styles.hero}>
      <img 
        src={profileImage} 
        alt="Profile" 
        className={styles.profileImage} 
      />
      <h1 className={styles.title}>Hey, I'm Madhan.</h1>
      <h2 className={styles.subtitle}><BlurText
        text="Devops & Designer"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      /></h2>
      <p className={styles.description}>
      <ShinyText text="Engineer by degree. Designer by passion. DevOps by drive.
      I build, automate, and design systems that just work — and look good doing it." disabled={false} speed={3} className='custom-class' />
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