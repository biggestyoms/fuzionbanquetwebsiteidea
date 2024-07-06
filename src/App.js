import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Aboutus from './pages/aboutus';
import Services from './pages/services';
import Portfolio from './pages/portfolio';
import OurStory from './pages/ourstory';
import Gallery from './pages/gallery';
import Pricing from './pages/pricing';
import Contact from './pages/contact';
import Footer from './components/footer';


function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
        
      </Routes>
      <Footer />
     
    </Router>
  );
}

export default App;