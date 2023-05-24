import React, { useState, useEffect } from 'react';
import bannerImage from '../../assets/images/banner.jpg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const floatedTextStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    animation: scrolled ? 'floatAnimation 2s infinite' : '',
  };

  return (
    <div
      id="header"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: 999,
        transition: 'background-color 0.3s ease-in-out',
        backgroundColor: scrolled ? '#fff' : '',
      }}
    >
      <div
        style={{
          width: '100%',
          backgroundColor: '#1a56b8',
          color: '#fff',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
          padding: '10px',
        }}
      >
        Contact us at +919312345667
      </div>
      <div
        style={{
          width: '100%',
          height: scrolled ? 100 : 300,
          position: 'relative',
          overflow: 'hidden',
          transition: 'height 0.3s ease-in-out',
        }}
      >
        <img
          src={bannerImage}
          alt="Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
        <div style={floatedTextStyle}>
          About Admissions at AMC College of Engineering, Bangalore
        </div>
      </div>
    </div>
  );
};

export default Header;
