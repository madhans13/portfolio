import styles from './workexperience.module.css'
import CircularGallery from '../../blocks/Components/CircularGallery2/CircularGallery2'

const WorkExperience = ({ id }) => {
  return (
    <section id={id} className={styles.workExperience}>
      
      <h2 className={styles.mainTitle2}>Other than Tech</h2>
      <div className={styles.mainContent}>
        {/* Left side - Gallery Container */}
        <div className={styles.galleryContainer}>
          <div style={{ height: '450px', position: 'relative' }}>
            <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className={styles.contentContainer}>
          <h3 className={styles.mainTitle}>Graphic Design &lt;3</h3>
          <p className={styles.intro}>
            Welcome to my creative world! I love creating posters for fun. It's become a passion of mine to experiment with colors, typography, and layouts. I enjoy making posters for movies, events, or just random creative ideas that pop into my head.
          </p>
          
         
          
         
        </div>
      </div>
    </section>
  )
}

export default WorkExperience