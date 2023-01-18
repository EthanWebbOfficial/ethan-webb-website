import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import Work6 from "../../assets/work6.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Convolutional Neural Networks",
    subtitle: "Convolutional Neural Networks And Their Application Within Image Categorisation.",
    category: "University",
    url: '/convolutionalneuralnetworks',
  },
  {
    id: 2,
    image: Work2,
    title: "Covid-19 Time Series Analysis",
    subtitle: "Analysis Of COVID-19 Daily New Deaths Of Poland and Germany.",
    category: "University",
    url: '/covidtimeseriesanalysis',
  },
  {
    id: 3,
    image: Work3,
    title: "Bird Chick Feeding - Generalised Linear Models",
    subtitle: "Modelling The Number Of Feeds For Bird Chicks.",
    category: "University",
    url: '/birdchickfeeding_glms',
  },
  {
    id: 4,
    image: Work4,
    title: "Smoking - Generalised Linear Models",
    subtitle: "An Analysis Of Smoking Cessation",
    category: "University",
    url: '/smoking_glms',
  },
  {
    id: 5,
    image: Work6,
    title: "Masters Dissertation: Modelling Epidemics",
    subtitle: "An Investigation Into Particle Markov Chain Monte Carlo Techniques Used For Parameter Inference In Epidemic Modelling",
    category: "University",
    url: '/masters_dissertation_modelling_epidemics',
  },
  {
    id: 6,
    image: Work5,
    title: "Customer Work: Sales Report Automation",
    subtitle: "Generating Outbound Sales Opportunities For A Leading Middle Eastern Manufacturing Materials Supplier",
    category: "Professional",
    url: '/sales_report_automation',
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "University",
  },
  {
    name: "Professional",
  },
  {
    name: "Personal",
  },
];
