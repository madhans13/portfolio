import React from 'react';
import styles from './about.module.css';
import ScrollReveal from '../../blocks/TextAnimations/ScrollReveal/ScrollReveal';
import ScrollFloat from '../../blocks/TextAnimations/ScrollFloat/ScrollFloat';
const About = () => {
  return (
    
    <section className={styles.about}>
      
    <div>
      <h2 className="section-title">About</h2>
      <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          I'm Madhan , currently pursuing Final year Artificial Intelligence and Machine Learning at Bannari Amman Institute of Technology!
        </ScrollFloat>
      
      </div>
    
    </section>
  )
}

export default About