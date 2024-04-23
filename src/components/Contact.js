import React from 'react'
import '../styles/Contact.css';
function Contact() {
  return (
    <section class="contact">
  <h2>Get in Touch</h2>
  <p>Have a project in mind or just a question? Feel free to reach out using the form below, or contact me directly at the information provided.</p>
  <form class="contact-form">
    <div class="form-group">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name" required/>
    </div>
    <div class="form-group">
      <label for="email">Your Email:</label>
      <input type="email" id="email" name="email" required/>
    </div>
    <div class="form-group">
      <label for="message">Your Message:</label>
      <textarea id="message" name="message" required></textarea>
    </div>
    <button type="submit">Send Message</button>
  </form>
  <div class="contact-info">
    <p>Phone: <a href="tel:+254742812483">(+254)742812483</a></p>  <p>Email: <a href="mailto:odaribq@gmail.com.com">odaribq@gmail.com.com</a></p>  </div>
</section>

  )
}

export default Contact
