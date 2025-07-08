import styles from './projects.module.css'

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
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.title} className={styles.image} />
            </div>
            <div className={styles.content}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <a href={project.link} className={styles.viewProject}>
                View Project <span className={styles.arrow}>→</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects 