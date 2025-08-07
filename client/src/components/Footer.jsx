import React from 'react';

const Footer = () => (
  <footer style={styles.footer}>
    <p>&copy; {new Date().getFullYear()} Your DJ Name. All rights reserved.</p>
  </footer>
);

const styles = {
  footer: {
    textAlign: 'center',
    padding: '1rem',
    background: '#111',
    color: '#fff',
    marginTop: '2rem',
  },
};

export default Footer;
