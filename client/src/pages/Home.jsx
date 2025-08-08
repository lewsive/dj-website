import React from 'react';
import { Helmet } from 'react-helmet';
import PurchaseOptions from '../components/PurchaseOptions';
import Bio from '../components/Bio';
import '../styles.css';

const Home = () => {
  return (
    <div className="home-container">
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
        />
        <div className="hero-text">
          <h1>Cosmic Syndicate</h1>
          <p>Private Events | Clubs | Weddings</p>
        </div>
      </section>

      <Bio />
      <PurchaseOptions />
    </div>
  );
};

export default Home;
