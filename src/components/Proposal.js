import React from 'react'
import '../styles/Proposal.css';
import { useNavigate } from 'react-router-dom';


function Proposal() {
const naigate=useNavigate();

  const handleNavigate = () => {
    naigate('/send-request')
  };
  
  return (
    <section class="proposal">
  <h2>Grow Your Business Online with a Professional Website</h2>
  <p>In today's digital age, having a strong online presence is no longer an option, it's a necessity.  A well-designed website acts as your digital storefront, attracting new customers, showcasing your offerings, and ultimately driving sales.</p>
  <div class="proposal-grid">
    <div class="proposal-item">
      <h3>User-Friendly Design</h3>
      <p>I create websites that are easy to navigate and provide a seamless user experience. Your visitors will find the information they need quickly and effortlessly, keeping them engaged and coming back for more.</p>
    </div>
    <div class="proposal-item">
      <h3>Mobile Responsiveness</h3>
      <p>With the majority of web traffic coming from mobile devices, a responsive website is crucial. I ensure your website adapts flawlessly to any screen size, providing an optimal experience for all your visitors.</p>
    </div>
    <div class="proposal-item">
      <h3>Search Engine Optimization (SEO) Friendly</h3>
      <p>I build websites with SEO best practices in mind, helping your business rank higher in search engine results. This means more organic traffic, increased visibility, and ultimately, more leads and sales.</p>
    </div>
    <div class="proposal-item">
      <h3>Affordable Solutions</h3>
      <p>I understand the importance of budget. I offer competitive rates and transparent pricing, so you can achieve your online goals without breaking the bank.</p>
    </div>
  </div>
  <button class="cta-button" onClick={handleNavigate}>Request for a Design/Demo</button>
</section>

  )
}

export default Proposal
