import React from 'react';
import '../styles/pricing.css'; 
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {
  const navigate = useNavigate();

  const handleGetButtonClick = () => {
    navigate('/send-request')
  };

 

  return (
    <div className="pricing-page">
      <h1>Pricing</h1>
      <p>Welcome to MW Software Development. Choose the plan that best suits your project needs.</p>

      <div className="pricing-cards">
        <div className="pricing-card basic">
          <h3>Basic Plan</h3>
          <p className="price">Free</p>
          <ul>
            <li>Up to 2 hours of development</li>
            <li>Initial consultation and requirement analysis</li>
            <li>Basic UI/UX design</li>

            <li>Development of simple applications or prototypes</li>
          </ul>
          <button onClick={handleGetButtonClick} className="btn current-plan">Request Plan</button>
        </div>

        <div className="pricing-card premium">
          <h3>Standard Plan</h3>
          <p className="price">$200</p>
          <p className="per-month">per month</p>
          <ul>
            <li>Up to 50 hours of development</li>
            <li>Comprehensive requirement analysis</li>
            <li>Custom UI/UX design</li>
            <li>Development of intermediate applications</li>
            <li>Advanced testing and bug fixes</li>
            <li>Integration with third-party services</li>
            <li>Email and phone support</li>
          </ul>
          <button onClick={handleGetButtonClick}  className="btn choose">Choose</button>
        </div>

        <div className="pricing-card premium">
          <h3>Premium Plan</h3>
          <p className="price">$300</p>
          <p className="per-month">per month</p>
          <ul>
            <li>Up to 100 hours of development</li>
            <li>Detailed requirement analysis and project planning</li>
            <li>Custom UI/UX design with revisions</li>
            <li>Development of complex applications and systems</li>
            <li>Full testing, debugging, and optimization</li>
            <li>Integration with multiple third-party services</li>
            <li>Email, phone, and video call support</li>
            <li>Post-deployment support and maintenance</li>
          </ul>
          <button onClick={handleGetButtonClick}  className="btn choose">Choose</button>
        </div>

        <div className="pricing-card enterprise">
          <h3>Enterprise Plan</h3>
          <p className="price">Custom Pricing</p>
          <ul>
            <li>Custom hours of development based on project scope</li>
            <li>Detailed project analysis and consultation</li>
            <li>Custom UI/UX design with multiple revisions</li>
            <li>Development of highly complex applications and systems</li>
            <li>Comprehensive testing, debugging, and optimization</li>
            <li>Integration with enterprise systems and services</li>
            <li>Dedicated support team</li>
            <li>Ongoing support and maintenance</li>
          </ul>
          <button onClick={handleGetButtonClick}  className="btn choose">Choose</button>
        </div>
      </div>

      <div className="addons">
        <h2>Add-Ons</h2>
        <ul>
          <li><strong>Additional Development Hours</strong>: $50/hour</li>
          <li><strong>Priority Support</strong>: $100/month</li>
          <li><strong>Monthly Maintenance</strong>: $200/month</li>
        </ul>
      </div>

      <div className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>How do I know which plan is right for me?</h3>
          <p>During our initial consultation, we'll help you identify the plan that best suits your project’s needs and budget.</p>
        </div>
        <div className="faq-item">
          <h3>Can I upgrade my plan later?</h3>
          <p>Yes, you can upgrade your plan at any time. We’ll adjust the pricing based on the additional services required.</p>
        </div>
        <div className="faq-item">
          <h3>What if I need more than 100 hours of development?</h3>
          <p>For projects requiring extensive development, we recommend our Enterprise Plan, which offers custom pricing based on your specific requirements.</p>
        </div>
        <div className="faq-item">
          <h3>Do you offer post-deployment support?</h3>
          <p>Yes, all plans include a basic level of post-deployment support. Additional support can be added as needed.</p>
        </div>
      </div>

      <div className="get-started">
        <h2>Get Started</h2>
        <p>Ready to bring your project to life? <a href="#contact">Contact us</a> today to discuss your requirements and get a custom quote.</p>
      </div>
    </div>
  );
};

export default PricingPage;
