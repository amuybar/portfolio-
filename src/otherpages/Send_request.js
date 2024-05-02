import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/request.css';
import { sendServiceRequest } from '../api/api_services';

const RequestPage = ({ selectedPricing }) => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the sendRequest function from api_services
      await sendServiceRequest(fullName, phoneNumber, email);
      
      // Optionally, provide feedback to the user upon successful submission
      alert('Request submitted successfully!');
      navigate('/'); // Redirect to home page or any other page
    } catch (err) {
      // Handle any errors that occur during the request
      setError(err.message);
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
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default RequestPage;
