import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  aboutCollege: {
    width: '100%',
    height: 250,
    backgroundColor: '#c0c0c0',
  },
});

const AboutCollege = ({ }) => {
  const classes = useStyles();
  return <div className={classes.aboutCollege}>About</div>;
};

export default AboutCollege;
