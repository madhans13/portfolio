import React from 'react';
import styles from './technologies.module.css';
import CircularGallery from '../../blocks/Components/CircularGallery/CircularGallery'
import '../../blocks/Components/CircularGallery/CircularGallery.css'
import ShinyText from '../../blocks/TextAnimations/ShinyText/ShinyText';
const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <h1 className={styles.title}><ShinyText text="Technologies Known" disabled={false} speed={3} className='custom-class' /></h1>
      <div style={{ height: '500px', position: 'relative' }}>
        <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
      </div>
    </section>
  );
};

export default Technologies; 