import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
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
    animation: '$moveLeft 20s linear infinite',
    whiteSpace: 'nowrap',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: '20px',
    padding: '5px',
    '@media (max-width: 768px)': {
      fontSize: '18px',
    },
    '@media (max-width: 480px)': {
      fontSize: '16px',
    },
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

  return (
    <div className={classes.contact}>
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
      </div>{" "}
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
      </div>{" "}
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
      </div>{" "}
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
      </div>{" "}
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
      </div>{" "}
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
      </div>{" "}
      <div className={classes.movingText}>
        Admissions open for session 2023-24&nbsp;&nbsp;&nbsp;&nbsp;
      </div>{" "}
    </div>
  );
};

export default Contact;
