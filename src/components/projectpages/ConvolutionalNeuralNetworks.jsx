import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import "./projectpage.css"

import CNNReport from '../../assets/projects/CNN_Report.pdf';

import ReactMarkdown from 'react-markdown'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


const ConvolutionalNeuralNetworks = () => {
    return (
      <>
      <Header />
    
        <div className='container'>

            <section className="projectpage__section">
                    <h2 className="projectpage__title">Convolutional Neural Networks And Their
Application Within Image Categorisation
</h2>
                    <span className="projectpage__subtitle">How CNNs work and an example of their application</span>
                    <span className="projectpage__stats">

                    <i class="uil uil-calender projectpage__icon"></i>
                    <p>Published on April 20, 2022</p>
                    <p class="projectpage__bullet">•</p>

                    <i class="uil uil-clock projectpage__icon"></i>
                    <p>20 minutes</p>
                    <p class="projectpage__bullet">•</p>

                    <i class="uil uil-book-open projectpage__icon"></i>
                    <p>3500 words</p>

                    </span>

                    <div className='headline__image cnn__image'></div>

                    <p className='project__textblock'><b>Context:</b> Part of my Statistical Learning Module, I was placed in a group of 4 challenged with writing a report (and delivering a presentation at a class conference) based on Convolution Neural Networks. Prior to this assignment I had not gained much exposure to CNNs and enjoyed the process of learning something new from first principles. Our report covered a mathematical outline of convolution, the components of a Convolution Layer and the structure of a CNN. I was delighted to receive the <mark className="highlight"><b>Best Presentation Award</b></mark>, chosen by industry representatives from SkyBet Gaming out of the 28 groups that participated in the class conference.</p>

                    <ReactMarkdown 
className='ReactMarkdown'
children={`## Abstract`}
remarkPlugins={[remarkMath]}
rehypePlugins={[rehypeKatex]}
/>

<ReactMarkdown 
className='ReactMarkdown'
children={`In this report we describe the motivation behind Convolutional Neural Networks (CNN) and proceed to explain the Mathematical detail behind the operations used in a CNN. We set out the benefits of using convolution within a Neural Network including sparse interactions, parameter sharing and equivariance. We then apply the CNN framework in $\\mathrm{R}$ using the keras package to a data set containing images of clothing items; t-shirt, trouser, pullover, dress, coat, sandal, shirt, sneaker, bag and ankle boot. We define a classification problem and achieve $93 \\%$ accuracy on training data and $92 \\%$ accuracy on test data. We conclude by giving examples of alternate Networks and other Machine Learning algorithms which can be run on various types of data.`}
remarkPlugins={[remarkMath]}
rehypePlugins={[rehypeKatex]}
/>

<a download="" href={CNNReport} className="button button--flex">
        Download Report
        <svg
          class="button__icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15.25 22.7502H9.25C3.82 22.7502 1.5 20.4302 1.5 15.0002V9.00024C1.5 3.57024 3.82 1.25024 9.25 1.25024H14.25C14.66 1.25024 15 1.59024 15 2.00024C15 2.41024 14.66 2.75024 14.25 2.75024H9.25C4.64 2.75024 3 4.39024 3 9.00024V15.0002C3 19.6102 4.64 21.2502 9.25 21.2502H15.25C19.86 21.2502 21.5 19.6102 21.5 15.0002V10.0002C21.5 9.59024 21.84 9.25024 22.25 9.25024C22.66 9.25024 23 9.59024 23 10.0002V15.0002C23 20.4302 20.68 22.7502 15.25 22.7502Z"
            fill="var(--container-color)"
          ></path>
          <path
            d="M22.25 10.7502H18.25C14.83 10.7502 13.5 9.42023 13.5 6.00023V2.00023C13.5 1.70023 13.68 1.42023 13.96 1.31023C14.24 1.19023 14.56 1.26023 14.78 1.47023L22.78 9.47023C22.99 9.68023 23.06 10.0102 22.94 10.2902C22.82 10.5702 22.55 10.7502 22.25 10.7502ZM15 3.81023V6.00023C15 8.58023 15.67 9.25023 18.25 9.25023H20.44L15 3.81023Z"
            fill="var(--container-color)"
          ></path>
          <path
            d="M13.25 13.7502H7.25C6.84 13.7502 6.5 13.4102 6.5 13.0002C6.5 12.5902 6.84 12.2502 7.25 12.2502H13.25C13.66 12.2502 14 12.5902 14 13.0002C14 13.4102 13.66 13.7502 13.25 13.7502Z"
            fill="var(--container-color)"
          ></path>
          <path
            d="M11.25 17.7502H7.25C6.84 17.7502 6.5 17.4102 6.5 17.0002C6.5 16.5902 6.84 16.2502 7.25 16.2502H11.25C11.66 16.2502 12 16.5902 12 17.0002C12 17.4102 11.66 17.7502 11.25 17.7502Z"
            fill="var(--container-color)"
          ></path>
        </svg>
      </a>

            </section>

        </div>

      <Footer />
      <ScrollUp />
      </>
    );
  };


export default ConvolutionalNeuralNetworks