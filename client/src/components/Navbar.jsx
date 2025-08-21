import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={styles.nav}>
    <Link style={styles.link} to="/"></Link>
    <Link style={styles.link} to="/services"></Link>
    <Link style={styles.link} to="/book"></Link>
  </nav>
);

const styles = {
  nav: {
    background: '#111',
    padding: '1rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Navbar;
