import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.linkedin.com/in/ethan-webb10"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/EthanWebbOfficial"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://medium.com/"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-medium-m"></i>
      </a>
    </div>
  );
};

export default Social;
