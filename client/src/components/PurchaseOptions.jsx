// src/components/PurchaseOptions.jsx
import React from 'react';
import '../styles.css'; // optional, for styling

const PurchaseOptions = () => {
  const packages = [
    {
      title: 'Private Events',
      description: 'Perfect for birthdays, house parties, and corporate functions.',
      price: '$300+',
    },
    {
      title: 'Clubs',
      description: 'Live DJ sets with full sound and lighting. Tailored for nightlife venues.',
      price: '$500+',
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
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
};

export default PurchaseOptions;
