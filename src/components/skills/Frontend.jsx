import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Developer Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-code-alt skills__icon'></i>

            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-css3 skills__icon'></i>

            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-javascript skills__icon'></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bxl-git skills__icon'></i>

            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>

          </div>

          <div className="skills__data">
          <i class='bx bxl-docker skills__icon'></i>

            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-bootstrap skills__icon'></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Beginner</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
