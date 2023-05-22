import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  contact: {
    width: '100%',
    height: 300,
    backgroundColor: '#fcba03',
  },
});

const Contact = ({}) => {
  const classes = useStyles();
  return <div className={classes.contact}>Contact</div>;
};

export default Contact;
