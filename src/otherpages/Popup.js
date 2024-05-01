import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div id="popup" className="popup hidden">
      <h2>Request Service</h2>
      <p>
        Fill out the form to request our <span id="selected-package"></span> package.
      </p>
      <form id="request-form">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Submit Request</button>
      </form>
      <button id="close-popup" className="close-button" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default Popup;
