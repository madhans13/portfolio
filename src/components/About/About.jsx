import React from 'react';
import styles from './about.module.css';

const About = () => {
  return (
    <section className={styles.about}>
      <h2 className="section-title">About</h2>
      <p className={styles.text}>
        I'm Mia Carter, a curious designer, coder, and storyteller. Currently a
        student at Springfield High School, but always exploring the limitless
        possibilities of creativity and technology.
      </p>
      <p className={styles.text}>
        I thrive on transforming ideas into reality, whether it's crafting digital
        interfaces, designing immersive visuals, or building websites that feel
        effortless to use.
      </p>
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
    </section>
  )
}

export default About