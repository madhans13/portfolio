import React from 'react';
import Hero from './components/Hero/Hero';
import Technologies from './components/Technologies/Technologies';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <About />
      <Contact />
    </Layout>
  );
}

export default App;
