import React from 'react'
import '../styles/Footer.css';


function Footer() {
  return (
    <footer class="footer">
  <div class="footer-content">
    <div class="social-media">
      <h3>Connect with Me</h3>
      <ul>
          <img src='facebook.png' alt='facebook'/>
        <img src='linkin.png' alt='linkin'/>
        <img src='insta.png' alt='insta'/>
        <img src='twiter.png' alt='twiter'/>
        </ul>
    </div>
    <div class="copyright">
      <p>&copy; Copyright 2024. All Rights Reserved.</p>
    </div>
  </div>
</footer>

  )
}

export default Footer
