import React from 'react'
import '../styles/Project.css';

function Projects() {
  return (
    <section class="projects">
    <h2>See My Work in Action</h2>
    <p>I'm passionate about building beautiful and functional websites that deliver results. Here are some of my recent projects:</p>
    <div class="project-grid">
      <div class="project-item">
        <a href="https://realeastatelisting.netlify.app/">
          <img src="/images/real-estate.png" alt="Project 1 Thumbnail"/>
          <h3>Real Estate Listing</h3>
          <p>Continueing project of a  real estate listing</p>
        </a>
      </div>
      <div class="project-item">
        <a href="https://plptodo.netlify.app/">
          <img src="/images/todo.png" alt="Project 2 Thumbnail"/>
          <h3>Todo webapp</h3>
          <p>Web application to add and remove todos</p>
        </a>
      </div>
      </div>
    <a href="portfolio.html" class="view-all-button">View All Projects</a>
  </section>
  )
}

export default Projects
