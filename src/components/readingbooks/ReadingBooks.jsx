import React from 'react';
import "../../App.css";
import "./readingbooks.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import CurrentlyReading from "../../assets/currently_reading.png";

const ReadingBooks = () => {
    return (
      <>
      <Header />
  
      <section className="readingbooks section">
            <h2 className="section__title">Reading Books</h2>
            <span className="readingbooks__subtitle">What's on my book-shelf?</span>

            <div className="readingbooks__container container grid">
              <div className="readingbooks__content">
                <div>
                  <div class="readingbooks__icon__holder">
                    <p class="readingbooks__icon">65</p>
                  </div>
                  {/* <i class="uil uil-award readingbooks__icon"></i> */}
                  <h3 className="readingbooks__title">
                    Books <br /> Read
                  </h3>
                </div>
              </div>

              <div className="readingbooks__content">
                <div>
                  <img src={CurrentlyReading} alt="Currently Reading" className="currently__reading__img"/>
                  {/* <i class="uil uil-user-check readingbooks__icon"></i> */}
                  <h3 className="readingbooks__title">
                    Currently <br /> Reading
                  </h3>
                </div>
              </div>

              <div className="readingbooks__content">
                <div>
                  <p class="readingbooks__icon">1/25</p>
                  {/* <i class="uil uil-books readingbooks__icon"></i> */}
                  <h3 className="readingbooks__title">
                    2023 Reading <br /> Goal
                  </h3>
                </div>
              </div>
            </div>

            <div class="container__readingbooks__content">
              <p className='readingbooks__intro'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default ReadingBooks