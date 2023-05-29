
import React, { useEffect } from 'react';
import Header from './components/header/Header';
import Contact from './components/contactus/Contact';
import Footer from './components/footer/Footer';
import AboutCollege from './components/about/AboutCollege';
import MainBody from './components/body/MainBody';
import './App.css';
import ContactForm from './components/contactform/ContactForm';

import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

function App() {
  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBab-G7F-B37NF3jGO8YvM7sDmkuFleF5I",
      authDomain: "leadgenlp.firebaseapp.com",
      databaseURL: "https://leadgenlp-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "leadgenlp",
      storageBucket: "leadgenlp.appspot.com",
      messagingSenderId: "701596933248",
      appId: "1:701596933248:web:204e04eb6d0eb2ec805a65",
      measurementId: "G-14QFLYWYGN"
    };

   // Initialize Firebase
    // eslint-disable-next-line no-unused-vars
    const app = initializeApp(firebaseConfig);
    // eslint-disable-next-line no-unused-vars
    const database = getDatabase(app); // Initialize the Realtime Database

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
        <Contact />
        <ContactForm />
      </MainBody>
      <Footer />
    </div>
  );
}

export default App;
