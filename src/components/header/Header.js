import React from 'react';
import { makeStyles } from '@mui/styles';
import bannerImage from '../../assets/images/banner.jpg';

const useStyles = makeStyles({
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 999,
    transition: 'background-color 0.3s ease-in-out',
  },
  topRow: {
    width: '100%',
    backgroundColor: '#1a56b8',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '10px',
  },
  bottomRow: {
    width: '100%',
    height: 300, // Initial height of the image
    position: 'relative', // Position the text relative to the image
    overflow: 'hidden', // Hide overflow when the second row shrinks
    transition: 'height 0.3s ease-in-out',
  },
  floatedText: {
    position: 'absolute',
    top: '50%', // Position the text vertically in the middle
    left: '50%', // Position the text horizontally in the middle
    transform: 'translate(-50%, -50%)', // Center the text precisely
    color: '#fff',
    fontSize: 30, // Set the font size to 30
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Add text shadow for better visibility
  },
  scrolled: {
    backgroundColor: '#fff',
  },
  faded: {
    height: 100, // Height of the second row when scrolled
  },
  image: {
    width: '100%',
    height: '100%', // Make the image fill the available space
    objectFit: 'cover',
  },
});

const Header = () => {
  const classes = useStyles();
  const [scrolled, setScrolled] = React.useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setScrolled(scrollTop > 0);
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="header" className={`${classes.header} ${scrolled ? classes.scrolled : ''}`}>
      <div className={classes.topRow}>Contact us at +919312345667</div>
      <div className={`${classes.bottomRow} ${scrolled ? classes.faded : ''}`}>
        <img src={bannerImage} alt="Banner" className={classes.image} />
        <div className={classes.floatedText}>About Admissions at AMC College of Engineering, Bangalore</div>
      </div>
    </div>
  );
};

export default Header;
