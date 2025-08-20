import React from 'react';
import { Helmet } from 'react-helmet';
import PurchaseOptions from '../components/PurchaseOptions';
import Bio from '../components/Bio';
import '../styles.css';

const Home = () => {
  return (
    <div 
      className="home-container"
      style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/space.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        color: "white"
      }}
    >
      <Helmet>
        <title>Cosmic Syndicate | DJ Noah Coe - Clubs, Weddings, Private Events</title>
        <meta
          name="description"
          content="Book DJ Noah Coe for unforgettable club nights, weddings, and private parties. Professional DJ services with customizable packages."
        />
        <meta
          name="keywords"
          content="DJ Noah Coe, Cosmic Syndicate, Wedding DJ, Club DJ, Orlando DJ, Private Events DJ, Book a DJ"
        />
        <meta name="author" content="Noah Coe" />
        <meta property="og:title" content="Cosmic Syndicate | DJ Noah Coe" />
        <meta
          property="og:description"
          content="Premium DJ services for clubs, weddings, and private events."
        />
        <meta property="og:image" content="/me-djing.PNG" />
        <meta property="og:url" content="https://cossyn.io" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <section className="hero-section">
        <img 
          src="me-djing.PNG"
          alt="DJ Noah Coe performing live"
          className="hero-image"
          style={{ marginLeft: "75px" }} 
        />
        

        <div className="hero-text">
        <h1 style={styles.heading} className="terminal-title">
  Cosmic Syndicate
</h1>
<p style={styles.subText}>Private Events | Clubs | Weddings</p>
<p style={styles.tagline}>A Stellar Performance You Won't Forget</p>


        </div>
      </section>

      <Bio />
      <PurchaseOptions />
    </div>
  );
};
const styles = {
  heading: {
    fontSize: '5rem',
    fontWeight: 'bold',
    fontFamily: 'Courier New, monospace',
    textTransform: 'uppercase',
    letterSpacing: '3px',
    marginBottom: '.3rem',
    textShadow: '0 0 8px rgba(0,255,204,0.4)',
  },
  subText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    fontFamily: 'Courier New, monospace',
    marginBottom: '0.3rem',
    letterSpacing: '2px',
  },
  tagline: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Courier New, monospace',
    fontStyle: 'italic',
    letterSpacing: '1px',
    opacity: 1,

    
  },
  
};



export default Home;
