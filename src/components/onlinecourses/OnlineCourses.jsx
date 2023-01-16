import React from 'react';
import "../../App.css";
import "./onlinecourses.css";
import Header from '../header/Header';
import DataCampDSTrack from './DataCampDSTrack';
import UdemySQL from './UdemySQL';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';

const OnlineCourses = () => {
    return (
      <>
      <Header />
  
      <section className="onlinecourses section">
            <h2 className="section__title">Online Courses</h2>
            <span className="section__subtitle">An overview of the courses I am completing</span>

            <div className='container onlinecoursecontainer'>
              <h2 className="course__title">Data Camp</h2>
              <h2 className="course__subtitle">Data Scientist with Python Career Track</h2>
              
              <span className="progress__span">

                <div class="progress__container_dsdc">
                  <div class="progress__loading_dsdc"></div>
                </div>

                <span className="progress__stats">
                  <p>10</p> <i class="uil uil-percentage progress__stats-icon"></i>
                  <p class="progress__bullet">•</p>
                  <i class="uil uil-stopwatch progress__stats-icon"></i> <p>10 / 96 hours</p>
                </span>
              </span>

              <p className="course__overview">
                <b>Overview: </b>  
                As someone with a background in Statistics, my primary coding experience is in R. However, in order to expand my skills and gain a deeper understanding of Machine Learning techniques, I began the Python for Data Science career track. To solidify my learning, I use the Anki Flashcard app to create revision cards which I study during my commute. Through a combination of daily work and consistent study, I have established a strong foundation in Python that I will continue to build upon in the future.
              You can scroll through the courses below to see my progess and what I have learnt.
              </p>
            
              <DataCampDSTrack />
            </div>


            <div className='container onlinecoursecontainer'>
              <h2 className="course__title">Udemy</h2>
              <h2 className="course__subtitle">The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert</h2>

              <span className="progress__span">

                <div class="progress__container_usql">
                  <div class="progress__loading_usql"></div>
                </div>

                <span className="progress__stats">
                  <p>62</p> <i class="uil uil-percentage progress__stats-icon"></i>
                  <p class="progress__bullet">•</p>
                  <i class="uil uil-stopwatch progress__stats-icon"></i> <p>13 / 21 hours</p>
                </span>
              </span>

              <p className="course__overview"><b>Overview:</b>  To improve my proficiency in SQL, which I use regularly in my job, I enrolled in the Ultimate MySQL Bootcamp on Udemy. This course has helped me to quickly grasp the basics of SQL and has enhanced the efficiency of my work. You can scroll through the courses below to see my progess and what I have learnt.</p>
            
              <UdemySQL />
            </div>
      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default OnlineCourses