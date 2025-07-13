import styles from './projects.module.css'
import TiltedCard from '../../blocks/Components/TiltedCard/TiltedCard';
import ifixit from '../../assets/project1.png';
import project2 from '../../assets/project4.webp';

import project4 from '../../assets/project6.webp';
import project3 from '../../assets/project5.png';
const Projects = ({ id }) => {
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
    <section id={id} className={styles.projects}>
      <h2 className={styles.title}>Here's What I've Been Up To</h2>
      <div className={styles.grid}>
        <TiltedCard
          imageSrc={ifixit}
          altText="ifixit"
          captionText="ifixit: A web-based troubleshooting platform inspired by iFixit, focused on diagnosing and resolving laptop and mobile issues. It categorizes problems into hardware and software, provides step-by-step repair guides, and allows users to request expert support. The system aims to simplify tech repairs through an intuitive interface and centralized service management."
          tags={["React", "Node.js", "Express", "MongoDB", "CSS"]}
          githubLink="https://github.com/madhans13/Fixit"
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
              ifixit
            </p>
          }
        />
        
        <TiltedCard
          imageSrc={project2}
          altText="HappyStrays - Dog Rescue Platform"
          captionText="A web platform designed to rescue, adopt, and support stray dogs through community-driven efforts. It connects people with nearby rescuers, allows users to report stray sightings, and simplifies the adoption process. The system promotes animal welfare by streamlining rescue coordination and enabling transparent donations."
          tags={["React", "Firebase", "Google Maps API", "Stripe"]}
          githubLink="https://github.com/yourusername/happy-strays"
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
              HappyStrays
            </p>
          }
        />
        
        
        <TiltedCard           
  imageSrc={project3}           
  altText="iFIXIT Civo K8s Deployment"           
  captionText="Production deployment of iFIXIT platform on Civo Kubernetes cluster. Complete containerized architecture with scalable microservices, automated CI/CD pipeline, and cloud-native infrastructure management."           
  tags={["Kubernetes", "Civo Cloud", "Docker", "Github Actions", "DevOps","Argo Cd", "Microservices"]}           
  githubLink="https://github.com/madhans13/Fixit"           
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
      Civo K8s Deployment             
    </p>           
  }         
/>
        
<TiltedCard
  imageSrc={project4}
  altText="ChefClaude - AI Recipe Suggestion App"
  captionText="An intelligent recipe suggestion application powered by Claude AI that transforms your available ingredients into delicious meal ideas. Simply input what you have in your kitchen, and ChefClaude will provide personalized recipe recommendations with step-by-step instructions."
  tags={["Claude API", "React", "Node.js", "Recipe AI"]}
  githubLink="https://github.com/madhans13/chefClaude-React"
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
      ChefClaude
    </p>
  }
/>
      </div>
    </section>
  )
}

export default Projects