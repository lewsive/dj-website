// src/components/PurchaseOptions.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const PurchaseOptions = () => {
  const packages = [
    {
      title: 'Private Events',
      description: 'Perfect for birthdays, house parties, and corporate functions.',
      price: '$150+',
    },
    {
      title: 'Clubs',
      description: 'Live DJ sets with full sound and lighting. Tailored for nightlife venues.',
      price: '$200+',
    },
    {
      title: 'Weddings',
      description: 'Full-day wedding coverage with ceremony + reception music.',
      price: '$800+',
    },
  ];

  return (
    <div className="packages">
      {packages.map((pkg, idx) => (
        <div className="package-card" key={idx}>
          <h2>{pkg.title}</h2>
          <p>{pkg.description}</p>
          <p className="price">{pkg.price}</p>
          <Link to={`/book?type=${encodeURIComponent(pkg.title)}`}>
            <button>Book Now</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PurchaseOptions;
