import React from "react";
import "./work.css";
import Works from "./Works";

const Work = () => {
  return (
    <section class="work section" id="portfolio">
      <h2 class="section__title">Projects</h2>
      <span class="section__subtitle">A Showcase Of My Work</span>

      <Works />
    </section>
  );
};

export default Work;
