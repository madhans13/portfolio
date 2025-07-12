import styles from './projects.module.css'
import TiltedCard from '../../blocks/Components/TiltedCard/TiltedCard';
const Projects = () => {
  const projects = [
    {
      title: "Aero Landing page design",
      description: "This project focuses on the design and development of a comprehensive AI chatbot platform, Aero.",
      image: "https://placehold.co/600x400",
      link: "#"
    },
    {
      title: "Web Development",
      description: "Let's turn your vision into something amazing.",
      image: "https://placehold.co/600x400",
      link: "#"
    },
    {
      title: "Creative Design",
      description: "Design with icons that stand out.",
      image: "https://placehold.co/600x400",
      link: "#"
    }
  ]

  return (
    <section className={styles.projects}>
      <h2 className="section-title">Here's What I've Been Up To</h2>
      <div className={styles.grid}>
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-overlay-content">
            Chef Claude
          </p>
        }
      />
        <TiltedCard
          imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
          altText="Kendrick Lamar - GNX Album Cover"
          projectTitle="Chef Claude"
          projectDescription="A Project About efficient cleaning of the food"
          tags={["React", "Food", "AI"]}
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-overlay-content">
              Chef Claude
            </p>
          }
        />
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-overlay-content">
            fixit
          </p>
        }
      />
      <TiltedCard
        imageSrc="https://i.scdn.co/image/ab67616d0000b273d9985092cd88bffd97653b58"
        altText="Kendrick Lamar - GNX Album Cover"
        captionText="Kendrick Lamar - GNX"
        containerHeight="300px"
        containerWidth="300px"
        imageHeight="300px"
        imageWidth="300px"
        rotateAmplitude={12}
        scaleOnHover={1.2}
        showMobileWarning={false}
        showTooltip={true}
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-overlay-content">
            Complete deployment
          </p>
        }
      />
        
      </div>
      
    </section>
  )
}

export default Projects 