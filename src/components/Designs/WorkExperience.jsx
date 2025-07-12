import styles from './workexperience.module.css'
import CircularGallery from '../../blocks/Components/CircularGallery2/CircularGallery2'

const WorkExperience = () => {
  return (
    <section className={styles.workExperience}>
      <h2 className="section-title">Other than Tech</h2>
      <div className={styles.mainContent}>
        {/* Left side - Gallery Container */}
        <div className={styles.galleryContainer}>
          <div style={{ height: '450px', position: 'relative' }}>
            <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
          </div>
        </div>
        
        {/* Right side - Content */}
        <div className={styles.contentContainer}>
          <h3 className={styles.mainTitle}>Graphic Design Passion</h3>
          <p className={styles.intro}>
            Welcome to my creative world! I'm passionate about graphic design and visual storytelling. 
            Through colors, typography, and imagery, I bring ideas to life and create meaningful connections 
            with audiences.
          </p>
          
         
          
         
        </div>
      </div>
    </section>
  )
}

export default WorkExperience