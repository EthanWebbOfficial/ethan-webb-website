import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';

const ReadingBooks = () => {
    return (
      <>
      <Header />
  
      <section className="readingbooks section">
            <h2 className="section__title">Reading Books</h2>
            <span className="section__subtitle">What's on my book-shelf?</span>

      </section>
  
      <Footer />
      <ScrollUp />
      </>
    );
  };


export default ReadingBooks