import "./App.css";
import Navbar from "./assets/components/Navbar";
import HeroSection from "./assets/components/HeroSection";
import Application from "./assets/components/Application";
import About from "./assets/components/About";
// import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./assets/components/Contact";
import OurWork from "./assets/components/OurWork";
import Feedback from "./assets/components/Feedback";
import Footimg from "./assets/components/Footimg";
import FAQ from "./assets/components/FAQ";


function Content() {
  return (
    <div>
      <HeroSection></HeroSection>
      <About></About>
      <Application></Application>
      <OurWork></OurWork>
      <Feedback></Feedback>
      <Footimg></Footimg>
      <FAQ></FAQ>
    </div>
  );
}

function App() {

  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Content />} />
          {/* <Route path="Dresset_front/src/assets/components/About" element={<About/>} /> */}
          {/* <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Product" element={<Products />} /> */}
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>   
  );
}

export default App;

