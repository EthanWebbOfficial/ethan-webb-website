import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonials">
      <h2 className="section__title">What My Colleagues Say</h2>
      <span className="section__subtitle">Testimonials And References</span>

      <Swiper
        className="testimonial__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, date, letter_rec, linkedin_url, role, description }) => {
          return (
            <SwiperSlide className="testimonial__card" key={id}>
              <img src={image} alt="" className="testimonial__img" />

              <span class="testimonial__name-link">
              <h3 className="testimonial__name">{title}</h3>
              <a
                href={linkedin_url}
                className="testimonial__social-link"
                target="_blank"
              >
                <i class='bx bxl-linkedin'></i>
              </a>
              </span>

              <h3 className="testimonial__role">{role}</h3>

              <div className="testimonial__calender">
                  <i className="uil uil-calendar-alt"></i> {date}
              </div>

              <p className="testimonial__description">{description}</p>
              <a download="" href={letter_rec} className="testimonial__button">
              Download Full Reference
              <i className="uil uil-arrow-right testimonial__button-icon"></i>
          </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
