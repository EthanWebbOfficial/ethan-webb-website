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


const CustomerWorkSalesReportAutomation = () => {
    return (
      <>
      <Header />
    
        <div className='container'>

            <section className="projectpage__section">
                    <h2 className="projectpage__title">Customer Work: Sales Report Automation</h2>
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

                    <div className='headline__image manu__image'></div>

                    <p className='project__textblock'><b>Context:</b> Part of my Statistical Learning Module, I was placed in a group of 4 challenged with writing a report (and delivering a presentation at a class conference) based on Convolution Neural Networks. Prior to this assignment I had not gained much exposure to CNNs and enjoyed the process of learning something new from first principles. Our report covered a mathematical outline of convolution, the components of a Convolution Layer and the structure of a CNN. I was delighted to receive the <mark className="highlight"><b>Best Presentation Award</b></mark>, chosen by industry representatives from SkyBet Gaming out of the 28 groups that participated in the class conference. Our report is still being graded and will be added below in due course.</p>

                    <ReactMarkdown 
                      className='ReactMarkdown'
                      children={`The lift coefficient ($C_L$) is a dimensionless coefficient.`}
                      remarkPlugins={[remarkMath]}
                      rehypePlugins={[rehypeKatex]}
                    />

            </section>

        </div>

      <Footer />
      <ScrollUp />
      </>
    );
  };


export default CustomerWorkSalesReportAutomation