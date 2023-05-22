import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  feeStructure: {
    width: '100%',
    height: 400,
    backgroundColor: '#8080ff',
  },
});

const FeeStructure = ({  }) => {
    const classes = useStyles();

  return <div className={classes.feeStructure}>Fee Structure</div>;
};

export default FeeStructure;
