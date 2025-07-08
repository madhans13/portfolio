import styles from './workexperience.module.css'

const WorkExperience = () => {
  const experiences = [
    {
      period: '2024 - Present',
      role: 'Lead Designer',
      company: 'Aura',
      logo: 'https://placehold.co/30x30'
    },
    {
      period: '2022 - 2024',
      role: 'Senior UI/UX Designer',
      company: 'Apple',
      logo: 'https://placehold.co/30x30'
    },
    {
      period: '2020 - 2022',
      role: 'Product Designer',
      company: 'Shopify',
      logo: 'https://placehold.co/30x30'
    }
  ]

  return (
    <section className={styles.workExperience}>
      <h2 className="section-title">Work Experience</h2>
      <div className={styles.timeline}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.period}>{exp.period}</div>
            <div className={styles.role}>
              {exp.role} at{' '}
              <span className={styles.company}>
                <img src={exp.logo} alt={exp.company} className={styles.companyLogo} />
                {exp.company}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkExperience 