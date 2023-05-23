import React from 'react';
import { makeStyles } from '@mui/styles';
import { keyframes } from '@emotion/react';

const useStyles = makeStyles({
  contact: {
    width: '100%',
    backgroundColor: '#1a56b8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#ffffff',
    overflow: 'hidden',
  },
  movingText: {
    animation: '$moveLeft 20s linear infinite',
    whiteSpace: 'nowrap',
  },
  '@keyframes moveLeft': {
    '0%': {
      transform: 'translateX(100%)',
    },
    '100%': {
      transform: 'translateX(-100%)',
    },
  },
});

const Contact = () => {
  const classes = useStyles();

  const handleLinkClick = () => {
    window.open('/path/to/your/pdf/file.pdf', '_blank');
  };

  return (
    <div className={classes.contact}>
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="/path/to/your/pdf/file.pdf" target="_blank" onClick={handleLinkClick}>
          Click here to see Fee Structure
        </a>
      </div>
    </div>
  );
};

export default Contact;
