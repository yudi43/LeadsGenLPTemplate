import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  header: {
    width: '100%',
    height: 200,
    backgroundColor: '#ff8080',
  },
});

const Header = ({}) => {
  const classes = useStyles();
  return <div className={classes.header}>Header</div>;
};

export default Header;
