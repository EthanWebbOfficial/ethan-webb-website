import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data Science Skills</h3>

      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class='bx bx-scatter-chart skills__icon'></i>

            <div>
              <h3 className="skills__name">R</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-postgresql skills__icon'></i>

            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-shape-circle skills__icon'></i>

            <div>
              <h3 className="skills__name">Machine Learning</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div className="skills__group">
          <div className="skills__data">
           <i class='bx bxl-python skills__icon'></i>

            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bx-stats skills__icon'></i>

            <div>
              <h3 className="skills__name">Statistics</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxs-network-chart skills__icon'></i>

            <div>
              <h3 className="skills__name">Rest API</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
