import React, { useState } from 'react';
import '../styles/pricing.css'; // Make sure this path is correct
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const navigate=useNavigate();
  
  const handleGetButtonClick = () => {
  navigate('/send-request')
  };

  

  const handleBack = () => {
    navigate('/');
  };
  
  // Sample data for each pricing tier
  const pricingData = [
    {
      tier: 'Basic',
      price: '$90',
      services: ['Very Responsive Website to mobile and desktop','Basic Seo','Basic features', 'Limited support'],
    },
    {
      tier: 'Standard',
      price: '$200',
      services: ['Basic + Advanced features', 'Highly Responsive website to all devices','Site optimization','Priority support'],
    },
    {
      tier: 'Premium',
      price: '$530',
      services: ['Standard + Premium features', '24/7 support'],
    },
  ];

  return (
    <div className="pricing-page">
    <nav className="navbar">
      <button className="back-button" onClick={handleBack}>Back</button>
      <h1 className="title">Pricing</h1>
    </nav>
    <div className="pricing-cards">
      {pricingData.map((tier, index) => (
        <div key={index} className="pricing-card">
          <h2>{tier.tier}</h2>
          <h3>{tier.price} / month</h3>
          <ul>
            {tier.services.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
          <button className="get-button" onClick={handleGetButtonClick}>
            Get
          </button>
        </div>
      ))}
   </div>
</div>
  );
};



export default PricingPage;
