import React from 'react';
import styles from './about.module.css';
import ScrollReveal from '../../blocks/TextAnimations/ScrollReveal/ScrollReveal';
const About = () => {
  return (
    
    <section className={styles.about}>
      
    <div>
      <h2 className="section-title">About</h2>
      <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={15}
  >
        I'm Mia Carter, a curious designer, coder, and storyteller. Currently a
        student at Springfield High School, but always exploring the limitless
        possibilities of creativity and technology.
        </ScrollReveal>
      
      <div className={styles.photos}>
        <img 
          src="https://placehold.co/400x300" 
          alt="Photography sample 1" 
          className={styles.photo}
        />
        <img 
          src="https://placehold.co/400x300" 
          alt="Photography sample 2" 
          className={styles.photo}
        />
      </div>
      </div>
    
    </section>
  )
}

export default About