import React from 'react';

const styles = {
  footer: {
    backgroundColor: '#1a56b8',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    fontSize: '14px',
    fontWeight: '300',
    color: '#ffffff',
    textAlign: 'center',
    padding: '20px',
    maxWidth: '100%',
    margin: '0 auto',
  },
  copyright: {
    marginTop: '10px',
    fontSize: '12px',
    color: '#ffffff',
  },
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div style={styles.footer}>
      <div>
        <p>
          Office Opening Hours:
          <br />
          Monday to Saturday: 10am–6pm
        </p>
        <p>
          Contact us for Direct Engineering Admission to Top Colleges in Bangalore:
          <br />
          Phone: 8668337319
        </p>
        <p>
          About Us:
          <br />
          DreamAdmit is your trusted partner for college admissions. Our mission is to help students achieve their dreams by providing guidance and assistance throughout the college admission process. With our expertise and network, we strive to connect aspiring students with top colleges in Bangalore. Count on DreamAdmit for personalized support and a seamless admission experience.
        </p>
        <p>
          Stay Connected:
          <br />
          Follow us on social media for the latest updates, news, and success stories:
          <br />
          Facebook: [Insert Facebook page link]
          <br />
          Twitter: [Insert Twitter handle]
          <br />
          Instagram: [Insert Instagram handle]
        </p>
        <p>
          Address:
          <br />
          [Insert your office address here]
        </p>
        <p style={styles.copyright}>
          &copy; {currentYear} DreamAdmit. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
