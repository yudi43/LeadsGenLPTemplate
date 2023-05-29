import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Contact from './components/contactus/Contact';
// import FeeStructure from './components/feestructure/FeeStructure';
// import VideoSection from './components/video/VideoSection';
import Footer from './components/footer/Footer';
import AboutCollege from './components/about/AboutCollege';
import MainBody from './components/body/MainBody';
import './App.css';
import ContactForm from './components/contactform/ContactForm';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

function App() {
  useEffect(() => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      // Paste your Firebase configuration object here
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    // Clean up the Firebase app and analytics when the component unmounts
    return () => {
      // Clean up any Firebase related resources
    };
  }, []);

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
