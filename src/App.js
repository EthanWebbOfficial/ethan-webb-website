import React from 'react';
import "./App.css";
import MainPage from './components/mainpage/mainpage';
import AboutPage from './components/aboutpage/AboutPage';
import PeakGradScheme from './components/gradschemepage/GradSchemePage';
import OnlineCourses from './components/onlinecourses/OnlineCourses';
import Mentors from './components/mentors/Mentors';
import ReadingBooks from './components/readingbooks/ReadingBooks';
import ConvolutionalNeuralNetworks from './components/projectpages/ConvolutionalNeuralNetworks';
import BirdChickFeedingGLM from './components/projectpages/BirdChickFeedingGLM';
import CovidTimeSeries from './components/projectpages/CovidTimeSeriesAnalysis';
import SmokingGLM from './components/projectpages/SmokingGLM';
import MastersDissertation from './components/projectpages/MastersDissertationModellingEpidemics';
import CustomerWorkSalesReportAutomation from './components/projectpages/CustomerWorkSalesReportAutomation';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
    <Router>
      <Routes>
          <Route exact path='/' element={<MainPage />} />
          <Route exact path='/aboutpage' element={<AboutPage />} />
          <Route exact path='https://mrethanwebb.com/peakgradscheme/' element={<PeakGradScheme />} />
          <Route path='/onlinecourses' element={<OnlineCourses  />} />
          <Route path='/mentors' element={<Mentors />} />
          <Route path='/readingbooks' element={<ReadingBooks />} />

          {/* Projects  */}
          <Route path='/convolutionalneuralnetworks' element={<ConvolutionalNeuralNetworks />} />
          <Route path='/covidtimeseriesanalysis' element={<CovidTimeSeries />} />
          <Route path='/birdchickfeeding_glms' element={<BirdChickFeedingGLM />} />
          <Route path='/smoking_glms' element={<SmokingGLM />} />
          <Route path='/masters_dissertation_modelling_epidemics' element={<MastersDissertation />} />
          <Route path='/sales_report_automation' element={<CustomerWorkSalesReportAutomation />} />
      </Routes>
    </Router>
    </ div>
  )
}

export default App