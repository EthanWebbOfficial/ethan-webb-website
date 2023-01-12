import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import "./gradschemepage.css";

const PeakGradScheme = () => {
    return (
      <>
      <Header />
  
      <section className="gradschemepage section">
            <h2 className="section__title">Peak AI Graduate Scheme</h2>
            <span className="section__subtitle">An overview of my time on the Peak AI Graduate Scheme</span>
      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default PeakGradScheme