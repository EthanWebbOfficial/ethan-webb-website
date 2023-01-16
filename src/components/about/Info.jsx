import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>

        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 Months</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Projects</h3>
        <span className="about__subtitle">2 Customers</span>
      </div>

      <div className="about__box">
      <i class='bx bxs-graduation about__icon'></i>

        <h3 className="about__title">Education</h3>
        <span className="about__subtitle">Statistics MSc</span>
      </div>
    </div>
  );
};

export default Info;
