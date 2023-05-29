import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Contact from './components/contactus/Contact';
import Footer from './components/footer/Footer';
import AboutCollege from './components/about/AboutCollege';
import MainBody from './components/body/MainBody';
import './App.css';
import ContactForm from './components/contactform/ContactForm';

// Import the function you need from the SDK
import { initializeApp } from 'firebase/app';

function App() {
  useEffect(() => {
    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBab-G7F-B37NF3jGO8YvM7sDmkuFleF5I",
      authDomain: "leadgenlp.firebaseapp.com",
      projectId: "leadgenlp",
      storageBucket: "leadgenlp.appspot.com",
      messagingSenderId: "701596933248",
      appId: "1:701596933248:web:204e04eb6d0eb2ec805a65",
      measurementId: "G-14QFLYWYGN"
    };

    // Initialize Firebase
    initializeApp(firebaseConfig);

    // Clean up the Firebase app when the component unmounts
    return () => {
      // Clean up any Firebase related resources
    };
  }, []);

  return (
    <div className="App">
      <Contact />
      <Header />
      <MainBody>
        <AboutCollege />
        <ContactForm />
      </MainBody>
      <Footer />
    </div>
  );
}

export default App;
