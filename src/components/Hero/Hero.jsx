import styles from './hero.module.css'
import profileImage from '../../assets/Profile.png'
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText'
import BlurText from "../../blocks/TextAnimations/BlurText/BlurText";
import FuzzyText from '../../blocks/TextAnimations/FuzzyText/FuzzyText';
import StarBorder from '../../blocks/Animations/StarBorder/StarBorder'
const handleAnimationComplete = () => {
  console.log('Animation completed!');
};
const Hero = ({ id }) => {
  return (
    <section id={id} className={styles.hero}>
       
      <img 
        src={profileImage} 
        alt="Profile" 
        className={styles.profileImage} 
      />
      <h1 className={styles.subtitle}><BlurText
        text="Hey I'm Madhan"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      /></h1>
      <h2 className={styles.subtitle}><FuzzyText
      baseIntensity={0.2}
      hoverIntensity={0.5}
      enableHover={true}
    >
      DevOps & Designer
    </FuzzyText></h2>
     
      <p className={styles.description}>
      <ShinyText text="Engineer by degree. Designer by passion. DevOps by drive.
      I build, automate, and design systems that just work — and look good doing it." disabled={false} speed={3} className='custom-class' />
      </p>
      <div className={styles.buttons}>
        <StarBorder
          as="button"
          className="custom-class"
          color="cyan"
          speed="5s"
        >
        Get Resume
        </StarBorder>
        
        <div className={styles.availabilityTag}>
          <span className={styles.availabilityDot}></span>
          Learning
        </div>
      </div>
    </section>
  )
}

export default Hero 