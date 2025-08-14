import React from 'react';
import Hero from './components/Hero/Hero';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Projects from './components/Projects/Projects';
import Designs from './components/Designs/WorkExperience';
import RecentBlogs from './components/RecentBlogs/RecentBlogs';
import DarkVeil from './blocks/Backgrounds/DarkVeil/DarkVeil';
import './App.css';

function App() {
  return (
    <>
      {/* DarkVeil Background - Fixed positioned behind everything */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100vw', 
        height: '100vh', 
        zIndex: 0,
        overflow: 'hidden'
      }}>
        <DarkVeil />
      </div>
      
      {/* Main Content */}
      <div style={{ 
        width: '100%', 
        minHeight: '100vh', 
        position: 'relative', 
        zIndex: 10 
      }}>
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
      </div>
    </>
  );
}

export default App;
