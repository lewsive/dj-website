import React from 'react';

const Footer = () => (
    <footer style={{ textAlign: 'center', padding: '1rem', color: '#888' }}>
    © 2024–{new Date().getFullYear()} Cosmic Syndicate
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
