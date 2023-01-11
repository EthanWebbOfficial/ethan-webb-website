import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';

const Mentors = () => {
    return (
      <>
      <Header />
  
      <section className="mentors section">
            <h2 className="section__title">Experienced Mentors</h2>
            <span className="section__subtitle">An introduction to my experienced mentors</span>

      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };

export default Mentors