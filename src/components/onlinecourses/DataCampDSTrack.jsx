import React from "react";
import "./onlinecourses.css";
import { DCDSTData } from "./DCDSTData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const DataCampDSTrack = () => {
  return (
      <Swiper
        className="course__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {DCDSTData.map(({ id, image, title, description, progress}) => {
          return (
            <SwiperSlide className="course__card" key={id}>
                <span className="course__card__title">
                    <img src={image} alt="" className="course__img" />
                    <h3 className="course__name">{title}</h3>
                </span>

                <p className="course__description">{description}</p>

                <span className={progress}>
                    {progress}
                </span>

              {/* <span class="testimonial__name-link">
              
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

              
              <a download={letter_rec} className="testimonial__button">
              Download Full Reference
              <i className="uil uil-arrow-right testimonial__button-icon"></i>
          </a> */}
            </SwiperSlide>
          );
        })}
      </Swiper>
  );
};

export default DataCampDSTrack;
