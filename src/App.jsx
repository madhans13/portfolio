import React from 'react';
import Hero from './components/Hero/Hero';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import Designs from './components/Designs/WorkExperience';
import RecentBlogs from './components/RecentBlogs/RecentBlogs';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero id="home" />
      <Technologies id="technologies" />
      <About id="about" />
      <Projects id="projects"/>
      <RecentBlogs id="blogs"/>
      <Designs id="experience"/>
      <Contact id="contact"/>
      <section id="booking"></section>
    </Layout>
  );
}

export default App;
