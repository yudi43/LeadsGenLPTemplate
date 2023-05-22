import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  videoSection: {
    width: '100%',
    height: 500,
    backgroundColor: '#ffff80',
  },
});

const VideoSection = () => {
    const classes = useStyles();
  return <div className={classes.videoSection}>Video Section</div>;
};

export default VideoSection;
