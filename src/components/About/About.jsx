import React from 'react';
import styles from './about.module.css';
import ScrollReveal from '../../blocks/TextAnimations/ScrollReveal/ScrollReveal';
import ScrollFloat from '../../blocks/TextAnimations/ScrollFloat/ScrollFloat';
import CountUp from '../../blocks/TextAnimations/CountUp/CountUp';
import TextPressure from '../../blocks/TextAnimations/TextPressure/TextPressure';
const About = ({ id }) => {
  return (
    
    <section id={id} className={styles.about}>
      
    <div>
      
    <ScrollFloat
          animationDuration={1}
          ease='back.inOut(2)'
          scrollStart='center bottom+=50%'
          scrollEnd='bottom bottom-=40%'
          stagger={0.03}
        >
          About Me
        </ScrollFloat>
      <p className={styles.description}>Hi I’m Madhan,   <CountUp
  from={0}
  to={20}
  separator=","
  direction="up"
  duration={1}
  className="count-up-text"
/> year old, a final-year student at Bannari Amman Institute of Technology. I love building systems that are not only functional and scalable, but also visually engaging. Whether it's streamlining workflows, crafting user-centric experiences, or blending aesthetics with performance — I focus on creating solutions that work seamlessly and look great doing it.</p>
   
      </div>
    
    </section>
  )
}

export default About