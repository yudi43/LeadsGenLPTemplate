import React from 'react';

const styles = {
  mainBody: {
    width: '100%',
    // backgroundColor: '#80ffff',
  },
};

const MainBody = ({ children }) => {
  return <div style={styles.mainBody}>{children}</div>;
};

export default MainBody;
