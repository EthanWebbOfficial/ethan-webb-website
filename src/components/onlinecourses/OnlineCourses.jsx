import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';

const OnlineCourses = () => {
    return (
      <>
      <Header />
  
      <section className="onlinecourses section">
            <h2 className="section__title">Online Courses</h2>
            <span className="section__subtitle">An overview of the courses I am completing</span>

      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default OnlineCourses