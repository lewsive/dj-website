import React from 'react';
import { Link } from 'react-router-dom';

const Bio = () => {
  return (
    <section style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.text}>
        Hi! I'm a professional DJ specializing in private events, clubs, and weddings. I create
        unforgettable music experiences tailored to your vibe.
      </p>
    </section>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '1.5rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
    textAlign: 'center',
    border: '1px solid #333',
    borderRadius: '8px',
    backgroundColor: '#1e1e1e',
    color: '#f1f1f1',
  },
  heading: {
    color: '#ffffff',
    fontSize: '1.8rem',
    marginBottom: '1rem',
  },
  text: {
    color: '#cccccc',
  },
  homeLink: {
    display: 'inline-block',
    marginTop: '1.5rem',
    color: '#66b2ff',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
};

export default Bio;
