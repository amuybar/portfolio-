import React, { useState } from 'react';
import '../styles/Hero.css'
import Popup from './PopUp';

function Hero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleClick = () => {
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };
  

  const handleClickWhatsapp = () => {
    window.location.href = 'https://wa.me/254742812483?text=Hello%20Barrack%20Amuyunzu%2C%20I%20am%20interested%20in%20your%20services'
  }
  const handleClickfb = () => {
    window.location.href = 'https://web.facebook.com/emmah.usideh'
  }
  const handleClickX = () => {
    window.location.href = 'https://twitter.com/Baraq_odari'
  }
  const handleClickLK = () => {
    window.location.href = 'https://www.linkedin.com/in/barrack-amuyunzu-7414142b9/'
  }
  const handleClickIG = () => {
    window.location.href = 'https://www.instagram.com/bar_acy/'
  }
  const handleClickGIT = () => {
    window.location.href = 'https://github.com/amuybar?tab=repositories'
  }
  
  return (
  <section class="hero">
    <div class="sticky-bar">
  <h2>Scroll Down for More!</h2>
  <button>Call to Action</button>
</div>
  <div className='hero-section'>
    <div class="hero-content">
    <h1>Talk to a web Developer in Nairobi</h1>
    <h2>Get In touch With Barrack to discuss: </h2>
    <ul>
      <li>Growiing your business through  online Presence </li>
      <li>Optimization of your Website so it may rank high</li>
      <li>Addding Automation to your business</li>
    </ul>
    <button onClick={handleClick}>Send a Massage</button>
      <Popup isOpen={isPopupOpen} onClose={handlePopupClose} />
    <h5>* We keep your information confidential and won't contact you without permission.</h5>
  </div>
  <img src='/images/profile.jpg'alt='logo'/>
  </div>
  <div className='socials'>
  <img src='/whatsapp.png'alt='logo'onClick={handleClickWhatsapp}/>
    <img src='/facebook.png'alt='logo'onClick={handleClickfb}/>
    <img src='/twiter.png'alt='logo'onClick={handleClickX}/>
    <img src='/linkin.png'alt='logo'onClick={handleClickLK}/>
    <img src='/insta.png'alt='logo'onClick={handleClickIG}/>
    <img src='/github.png'alt='logo'onClick={handleClickGIT}/>
  </div>
</section>

  )
}

export default Hero
