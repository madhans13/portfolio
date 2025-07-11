import React from 'react';
import styles from './technologies.module.css';
import { FaDocker, FaAws, FaJenkins, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiKubernetes, SiAnsible, SiTerraform, SiGrafana, SiPrometheus } from 'react-icons/si';

const technologies = [
  { name: 'Docker', icon: FaDocker, proficiency: 'Advanced' },
  { name: 'Kubernetes', icon: SiKubernetes, proficiency: 'Intermediate' },
  { name: 'AWS', icon: FaAws, proficiency: 'Advanced' },
  { name: 'Jenkins', icon: FaJenkins, proficiency: 'Advanced' },
  { name: 'Ansible', icon: SiAnsible, proficiency: 'Intermediate' },
  { name: 'Terraform', icon: SiTerraform, proficiency: 'Advanced' },
  { name: 'Git', icon: FaGitAlt, proficiency: 'Advanced' },
  { name: 'Linux', icon: FaLinux, proficiency: 'Advanced' },
  { name: 'Grafana', icon: SiGrafana, proficiency: 'Intermediate' },
  { name: 'Prometheus', icon: SiPrometheus, proficiency: 'Intermediate' }
];

const Technologies = () => {
  return (
    <section className={styles.technologies}>
      <h2 className={styles.title}>DevOps Technologies</h2>
      <div className={styles.grid}>
        {technologies.map((tech, index) => (
          <div key={index} className={styles.techItem}>
            <tech.icon className={styles.icon} />
            <h3 className={styles.techName}>{tech.name}</h3>
            <p className={styles.proficiency}>{tech.proficiency}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies; 