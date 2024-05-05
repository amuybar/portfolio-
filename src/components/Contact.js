import React, { useState } from 'react'
import '../styles/Contact.css';
import { useNavigate } from 'react-router-dom';
import { sendMessage } from '../api/api_services';

function Contact() {
  
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
 
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the sendRequest function from api_services
      await sendMessage(message, name, email);
      
      // Optionally, provide feedback to the user upon successful submission
      alert('Message submitted successfully!');
      navigate('/'); // Redirect to home page or any other page
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section class="contact">
  <h2>Get in Touch</h2>
  <p>Have a project in mind or just a question? Feel free to reach out using the form below, or contact me directly at the information provided.</p>
  <form class="contact-form" onSubmit={handleSubmit}>
    <div class="form-group">
      <label for="name">Your Name:</label>
      <input 
             type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required/>
    </div>
    <div class="form-group">
      <label for="email">Your Email:</label>
      <input 
       type="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
       />
    </div>
    <div class="form-group">
      <label for="message">Your Message:</label>
      <textarea 
      type="text"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
        ></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
  <div class="contact-info">
    <p>Phone: <a href="tel:+254742812483">(+254)742812483</a></p>  <p>Email: <a href="mailto:odaribq@gmail.com.com">odaribq@gmail.com.com</a></p>  </div>
</section>

  )
}

export default Contact
