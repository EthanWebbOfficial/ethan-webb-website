import React from 'react';
import "../../App.css";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import ScrollUp from '../scrollup/ScrollUp';
import "./projectpage.css";

import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you


const CovidTimeSeries = () => {
    return (
      <>
      <Header />
    
        <div className='container'>

            <section className="projectpage__section">
                    <h2 className="projectpage__title">Analysis Of COVID-19 Daily New Deaths Of Poland and Germany</h2>
                    <span className="projectpage__subtitle">A year 3 Maths BSc project as part of the Time Series Analysis module.</span>
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

                    <div className='headline__image covid__image'></div>

                    <p className='project__textblock'><b>Context: </b>As part of my Time Series module, I worked in a group of 3 to use the skills learned during the course to produce a report and deliver a presentation on a data set relating to the Covid-19 pandemic. We chose to compare the daily new deaths of Germany and Poland since they share a boarder and had contrasting governance approaches to the pandemic. <mark className="highlight"><b>We scored 90% on this project.</b></mark> I was very proud of this because the project was supposed to be done in groups of 4, however I was assigned to a group of 3 - with 2 people that spoke English as their second language. I learnt some great communication skills as a result. All analysis in this project was conducted using R.</p>

<ReactMarkdown 
className='ReactMarkdown'
children={`## Abstract`}
remarkPlugins={[remarkMath]}
rehypePlugins={[rehypeKatex]}
/>

<ReactMarkdown 
className='ReactMarkdown'
children={`In this report we analysed Polish and German daily new deaths, recorded from March, 2020 to January, 2021, by considering $$(\\mathbf{SARIMA}$$) models using an iterative Box-Jenkins approach. We conclude that for Polish data the best fitting model is $$(\\mathbf{SARIMA(3, 1, 4, 2, 1, 1, s = 7)}$$), whilst for Germany $$(\\mathbf{SARIMA(3, 1, 2, 1, 0, 1, s = 7)}$$). Our forecasting results suggest good performance across the models, validating their effectiveness. We discussed other important factors such as governments' response and also the limitations of our work. Finally, we explored ideas on how we could improve our analysis.`}
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


export default CovidTimeSeries