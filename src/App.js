import React from 'react';
import "./App.css";
import MainPage from './components/mainpage/mainpage';
import AboutPage from './components/aboutpage/AboutPage';
import PeakGradScheme from './components/gradschemepage/GradSchemePage';
import OnlineCourses from './components/onlinecourses/OnlineCourses';
import Mentors from './components/mentors/Mentors';
import ReadingBooks from './components/readingbooks/ReadingBooks';
import ConvolutionalNeuralNetworks from './components/projectpages/ConvolutionalNeuralNetworks';
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

          {/* To  */}
          <Route path='/convolutionalneuralnetworks' element={<ConvolutionalNeuralNetworks />} />
          {/* <Route path='/covidtimeseriesanalysis' element={<CovidTimeSeriesAnalysis />} />
          <Route path='/birdchickfeeding_glms' element={<BirdChickFeeding />} />
          <Route path='/smoking_glms' element={<Smoking />} />
          <Route path='/masters_dissertation_modelling_epidemics' element={<ModellingEpidemics />} />
          <Route path='/sales_report_automation' element={<CustomerWorkSalesReportAutomation />} /> */}
      </Routes>
    </Router>
    </ div>
  )
}

export default App