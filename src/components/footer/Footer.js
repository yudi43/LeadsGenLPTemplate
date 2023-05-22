import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    height: 100,
    backgroundColor: '#ff80ff',
  },
});

const Footer = () => {
    const classes = useStyles();
  return <div className={classes.footer}>Footer</div>;
};

export default Footer;
