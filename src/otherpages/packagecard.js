import React from 'react';
import RequestServiceButton from './RequestServiceButton.js';
const PackageCard = ({ packageName, title, description, features }) => {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <RequestServiceButton packageName={packageName} />
    </div>
  );
};

export default PackageCard;
