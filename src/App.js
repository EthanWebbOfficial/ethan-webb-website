import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Services from './components/services/Services';
import Qualification from './components/qualification/Qualification';
import Work from './components/Portfolio/Work';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const MainPage = () => {
  return (
    <>
    <Header />

    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Services />
      <Testimonials />
      <Contact />
    </main>

    <Footer />
    <ScrollUp />
    </>
  );
};

const AboutPage = () => {
  return (
    <>
    <Header />

    About Page.

    <Footer />
    <ScrollUp />
    </>
  );
};

const PeakGradScheme = () => {
  return (
    <>
    <Header />

    Peak Grad Scheme Page.

    <Footer />
    <ScrollUp />
    </>
  );
};

const OnlineCourses = () => {
  return (
    <>
    <Header />

    OnlineCourses

    <Footer />
    <ScrollUp />
    </>
  );
};

const Mentors = () => {
  return (
    <>
    <Header />

    Mentors

    <Footer />
    <ScrollUp />
    </>
  );
};

const ReadingBooks = () => {
  return (
    <>
    <Header />

    ReadingBooks

    <Footer />
    <ScrollUp />
    </>
  );
};

const App = () => {
  return (
    <div className='App'>
    <Router>
      <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/peakgradscheme' element={<PeakGradScheme />} />
          <Route path='/onlinecourses' element={<OnlineCourses  />} />
          <Route path='/mentors' element={<Mentors />} />
          <Route path='/readingbooks' element={<ReadingBooks />} />
      </Routes>
    </Router>
    </ div>
  )
}

export default App