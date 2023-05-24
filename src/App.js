import React from 'react';
import Header from './components/header/Header';
import Contact from './components/contactus/Contact';
// import FeeStructure from './components/feestructure/FeeStructure';
// import VideoSection from './components/video/VideoSection';
import Footer from './components/footer/Footer';
import AboutCollege from './components/about/AboutCollege';
import MainBody from './components/body/MainBody';
import './App.css';
import ContactForm from './components/contactform/ContactForm';

function App() {
  return (
    <div className="App">
        <Contact />
      <Header />
      <MainBody>
      {/* <Contact /> */}

        <AboutCollege />
        <Contact />
        <ContactForm />
        {/* <FeeStructure /> */}
        {/* <VideoSection /> */}
      </MainBody>
      <Footer />
    </div>
  );
}

export default App;