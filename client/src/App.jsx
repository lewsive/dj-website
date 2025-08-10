// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Services from './pages/Services';
import BookingForm from './components/BookingForm'; // updated import for booking form
import Bio from './components/Bio'; // optional bio page

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<BookingForm />} /> {/* updated path */}
          <Route path="/bio" element={<Bio />} /> {/* optional bio page */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
