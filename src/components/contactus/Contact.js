import React from 'react';

const styles = {
  contact: {
    width: '100%',
    backgroundColor: '#ffcc00',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ff0000',
    overflow: 'hidden',
  },
  movingText: {
    animation: 'moveLeft 20s linear infinite',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '20px',
    padding: '5px',
  },
};

// Define the keyframes animation outside the styles object
const keyframes = `
  @keyframes moveLeft {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`;

const Contact = () => {
  return (
    <>
      <style>{keyframes}</style> {/* Add the keyframes animation */}
      <div style={styles.contact}>
        <div style={styles.movingText}>
          Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div style={styles.movingText}>
          Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div style={styles.movingText}>
          Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div style={styles.movingText}>
          Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div style={styles.movingText}>
          Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div style={styles.movingText}>
          Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
        <div style={styles.movingText}>
          Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
    </>
  );
};

export default Contact;
