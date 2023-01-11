import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import MainPage from './components/mainpage/mainpage';
import AboutPage from './components/aboutpage/AboutPage';
import PeakGradScheme from './components/gradschemepage/GradSchemePage';
import OnlineCourses from './components/onlinecourses/OnlineCourses';
import Mentors from './components/mentors/Mentors';
import ReadingBooks from './components/readingbooks/ReadingBooks';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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