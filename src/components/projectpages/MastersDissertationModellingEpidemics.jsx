import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import "./projectpage.css"

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


const MastersDissertation = () => {
    return (
      <>
      <Header />
    
        <div className='container'>

            <section className="projectpage__section">
                    <h2 className="projectpage__title">Masters Dissertation</h2>
                    <span className="projectpage__subtitle">This is the subtitle of the article.</span>
                    <span className="projectpage__stats">

                    <i class="uil uil-calender projectpage__icon"></i>
                    <p>Published on January 17, 2022</p>
                    <p class="projectpage__bullet">•</p>

                    <i class="uil uil-clock projectpage__icon"></i>
                    <p>14 minutes</p>
                    <p class="projectpage__bullet">•</p>

                    <i class="uil uil-book-open projectpage__icon"></i>
                    <p>2925 words</p>

                    </span>

                    <div className='headline__image epidemic__image'></div>

                    <p className='project__textblock'>Under Construction 🚧</p>


            </section>

        </div>

      <Footer />
      <ScrollUp />
      </>
    );
  };


export default MastersDissertation