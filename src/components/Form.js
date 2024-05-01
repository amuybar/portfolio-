import React, { useState } from 'react';
import '../styles/PopupForm.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the onSubmit function passed from the parent with the form data
    onSubmit({ name, email, message });
    setName(''); // Clear form after submit
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className='popup-form'>
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={message}
        placeholder='How much does a website cost ?'
        onChange={(e) => setMessage(e.target.value)}
        required
      ></textarea>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className='buttons'>
        <button type="submit">Send </button>
      </div>
    </form>
  );
};

export default Form;
