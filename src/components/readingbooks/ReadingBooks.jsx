import React from 'react';
import "../../App.css";
import "./readingbooks.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import CurrentlyReading from "../../assets/currently_reading.png";
import Books from "./Books"

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
                  <p className="readingbooks__icon">1/25</p>
                  {/* <i class="uil uil-books readingbooks__icon"></i> */}
                  <h3 className="readingbooks__title">
                    2023 Reading <br /> Goal
                  </h3>
                </div>
              </div>
            </div>

            <div className="container__readingbooks__content">
              <p className='readingbooks__intro'>
              My goal is to grow both as a person and as a data scientist. To help achieve this, I incorporate reading into my daily routine. By reading a diverse selection of non-fiction books, I aim broaden my perspectives and test my pre-existing beliefs. Since the start of 2020, I have read over 65 books and plan to read an additional 25 this year. To solidify my understanding, I document my Kindle highlights and notes in a "Second Brain," where I review and tag key concepts for future reference. This method creates a searchable database of ideas that I can apply to my decision making and work processes. To make this possible I wrote a python script to extract my highlights and organize them as I desired, and in the future, I hope to use NLP to assist me with tagging. You can see the books on my book shelf below, sorted by category.
              </p>
            </div>

            <div className='container'>
              <Books />
            </div>
      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default ReadingBooks