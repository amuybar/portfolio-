import React from 'react'
import '../styles/Tech.css';


function Tech() {
  return (
    <section class="tech-stack">
  <h2>My Tech Stack: Building Powerful and Optimized Websites</h2>
  <p>I leverage a modern tech stack to craft exceptional websites that are not only visually appealing but also perform well in search engines.</p>
  <div class="tech-stack-grid">
    <div class="tech-item">
      <img src="/mongo.png" alt="MongoDB Logo"/>
      <h3>MongoDB</h3>
      <p>A flexible NoSQL database that allows for scalable and efficient data storage, perfect for modern web applications.</p>
    </div>
    <div class="tech-item">
      <img src="/express.png" alt="Express.js Logo"/>
      <h3>Express.js</h3>
      <p>A lightweight web framework built on Node.js, providing a robust and efficient foundation for building web servers.</p>
    </div>
    <div class="tech-item">
      <img src="/react.png" alt="React.js Logo"/>
      <p>React.js</p>
      <p>A popular JavaScript library for building dynamic and user-friendly web interfaces, creating a seamless user experience.</p>
    </div>
    <div class="tech-item">
      <img src="/node.png" alt="Next.js Logo"/> 
      <h3>Node js</h3>
      <p>A JavaScript library for Backend development</p>
    </div>
  </div>
  <h3>SEO Strategies for Improved Visibility</h3>
  <ul class="seo-list">
    <li>Clean and Semantic Code: I prioritize well-structured code that search engines can easily understand.</li>
    <li>Keyword Research and Optimization: I target relevant keywords to improve your website's ranking in search results.</li>
    <li>Mobile-Friendly Design: I ensure your website is responsive and optimized for mobile devices, a crucial SEO factor.</li>
    <li>Content Optimization: I create high-quality content that is informative, engaging, and optimized for search engines.</li>
  </ul>
</section>

  )
}

export default Tech
