import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/request.css';

const RequestPage = ({ selectedPricing }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Construct the data payload to send to the backend
    const requestData = {
      fullName,
      phoneNumber,
      email,
      selectedPricing,
    };

    try {
      // Send the request to the backend (replace 'backendEndpoint' with your actual backend endpoint)
      const response = await fetch('backendEndpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      // Check if the request was successful
      if (response.ok) {
        // Reset the form fields
        setFullName('');
        setPhoneNumber('');
        setEmail('');
        
        // Navigate the user back to the home page
        navigate('/');
      } else {
        // Handle error scenarios
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="request-page">
      <h1>Request Form</h1>
      <div>
        <p>
          We shall send you a demo to your Email address
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RequestPage;
