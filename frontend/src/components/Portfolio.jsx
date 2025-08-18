import React, { useState } from 'react';
import { portfolioData } from '../data/mock';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Skills from './Skills';
import Education from './Education';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main>
        <Hero data={portfolioData.personal} />
        <About data={portfolioData.personal} />
        <Experience data={portfolioData.experience} />
        <Projects data={portfolioData.projects} />
        <Skills data={portfolioData.skills} />
        <Education 
          education={portfolioData.education} 
          certifications={portfolioData.certifications} 
        />
        <Contact data={portfolioData.personal} />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;