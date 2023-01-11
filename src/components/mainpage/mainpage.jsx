import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Home from '../home/Home';
import About from '../about/About';
import Skills from '../skills/Skills';
import Services from '../services/Services';
import Qualification from '../qualification/Qualification';
import Work from '../Portfolio/Work';
import Testimonials from '../testimonials/Testimonials';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';

const MainPage = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Services />
      <Testimonials />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  );
};

export default MainPage