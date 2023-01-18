import React from 'react';
import "../../App.css";
import "./mentors.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import Darian from '../../assets/Darian_about.png'

const Mentors = () => {
    return (
      <>
      <Header />
  
      <section className="mentors section">
            <h2 className="section__title">Experienced Mentors</h2>
            <span className="section__subtitle__mentors">An introduction to my experienced mentors</span>

            <div className='container'>
              <p className='mentors__intro'>I am lucky to have a cohort of accomplished mentors who are guiding me in both my personal and professional growth. I schedule regular meetings with them every three months for a general update and to talk about my progress. You can find out more information about them below.</p>
            </div>

            {/* SECTION 1: Darian Raad */}
            <div className='container'>
            <h2 className="section__title__mentors">Darian Raad</h2>
            <span className="section__subtitle__mentors2">Head of Data Science - Darian's New Company</span>
            </div>

            <div className="mentors__container container grid">
                <img src={Darian} alt="" className="mentors__img" />

                <div className="mentors__data">

                <p className="mentors__description">
                <p>Darian Raad is a well-regarded expert in data science and machine learning, with a background in applied mathematics and operations research. He started his career as a Business Operations Manager at CFW Industries before moving on to work in data science at Peak AI, a leading AI SaaS company in the UK. Recently, he has taken a position as the head of the Data Science team at an up-and-coming start-up, [Insert Here]. <br /> <br /> In his personal life, Darian is dedicated to his family and enjoys hiking and creating special moments with them. He is a very positive person, and has a goal to give a hug to someone from every country in the world. </p>

                </p>

                </div>
            </div>
            {/* END OF SECTION 1: Darian Raad */}

      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };

export default Mentors