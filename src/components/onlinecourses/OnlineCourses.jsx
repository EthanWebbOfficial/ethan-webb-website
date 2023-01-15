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

              <p className="course__overview"><b>Overview:</b>  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
            
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

              <p className="course__overview"><b>Overview:</b>  blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
            
              <UdemySQL />
            </div>
      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default OnlineCourses