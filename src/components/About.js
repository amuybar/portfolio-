import React from 'react'
import '../styles/About.css';


function About() {
  const handleClick=() => {
    window.location.href = 'https://barrackamuyunzu.club/pricing'
  }
  return (
    <section class="about">
  <h2>Launch A Website That Grows</h2>
  <p>Thinking of a long-lasting presence online? This is your chance to break into an exciting new new market and build a customer base  fit for you needs.</p>
  <button onClick={handleClick}>View Pricing</button>
</section>

  )
}

export default About
