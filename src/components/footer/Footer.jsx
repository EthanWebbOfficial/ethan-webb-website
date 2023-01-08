import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Ethan Webb</h1>

        <ul className="footer__list">

          <li>
            <a href="#home" className="footer__link">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#experience" className="footer__link">
              Experience
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#development" className="footer__link">
              Development
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.linkedin.com/in/ethan-webb10"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-linkedin'></i>
          </a>

          <a
            href="https://github.com/EthanWebbOfficial"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-github'></i>
          </a>

          <a
            href="https://medium.com/"
            className="footer__social-link"
            target="_blank"
          >
            <i class='bx bxl-medium' ></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder. All rigths reserved. Modified and updated using ReactJs, HTML and CSS by Ethan Webb.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
