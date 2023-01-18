import React from "react";
import "./services.css";

const Services = () => {

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Development</h2>
      <span className="section__subtitle">How I Am Improving</span>

      <div className="services__container container grid">

        <div className="services__content">
          <div>
            <i class="uil uil-award services__icon"></i>
            <h3 className="services__title">
              Online <br /> Courses
            </h3>
          </div>

          <a href='/onlinecourses' className="services__button">
            Learn More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </a>
        </div>

        <div className="services__content">
          <div>
            <i class="uil uil-user-check services__icon"></i>
            <h3 className="services__title">
              Experienced <br /> Mentors
            </h3>
          </div>

          <a href='/mentors' className="services__button">
            Learn More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </a>
        </div>

        <div className="services__content">
          <div>
            <i class="uil uil-books services__icon"></i>
            <h3 className="services__title">
              Reading <br /> Books
            </h3>
          </div>

          <a href='/readingbooks' className="services__button">
            Learn More
            <i className="uil uil-arrow-right services__button-icon"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
