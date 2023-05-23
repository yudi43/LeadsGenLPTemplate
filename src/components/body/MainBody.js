import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  mainBody: {
    width: '100%',
    // backgroundColor: '#80ffff',
  },
});

const MainBody = ({ children }) => {
    const classes = useStyles();
  return <div className={classes.mainBody}>{children}</div>;
};

export default MainBody;
