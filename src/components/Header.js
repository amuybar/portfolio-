import React from 'react'
import '../styles/Header.css';

function Header() {
  const handleClick = () => {
    window.location.href = 'https://wa.me/254742812483?text=Hello%20Barrack%20Amuyunzu%2C%20I%20am%20interested%20in%20your%20services'
  }
  return (
    <div className='header'>
      <h1>Barrack Amuyunzu</h1>
      <img className='img1' src='/logo.png'alt='logo'/>
      <img className='img2' src='whatsapp.png' alt='Whatsapp icon' onClick={handleClick}/>
    </div>
  )
}

export default Header
