import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Book Your DJ Consultation</h1>
        <p>Professional DJ services for events, parties, and more.</p>
      </header>

      <section style={styles.section}>
        <h2>What We Offer</h2>
        <ul>
          <li>🎧 Custom music for your event</li>
          <li>💡 Lighting and sound setup</li>
          <li>📅 Flexible scheduling</li>
          <li>🎵 Consultations to match your vibe</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2>Ready to Book?</h2>
        <p>Click below to get started with your consultation.</p>
        <button style={styles.button}>Book Now</button>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: 1.6,
  },
  header: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '2rem',
    textAlign: 'center',
  },
  section: {
    marginTop: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#111',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    borderRadius: '5px',
  },
};

export default HomePage;
