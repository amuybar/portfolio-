
import React from 'react';
import '../styles/ProjectsPage.css'; 

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1 className="title">Projects</h1>
      <p className="quote">"You can do anything you set your mind to."<br />- I dont know who said it But someone did.</p>

      <div className="projects-grid">
        <div className="project-card">
          <h2>About Us</h2>
          <p>Good content is everything. In a world that is oversaturated with content, you'll learn from successful writers and bloggers how to create content that matters and resonates with your audience.</p>
        </div>
        <div className="project-image">
        <a href="https://realeastatelisting.netlify.app/">
          <img src="/images/real-estate.png" alt="Project 1 Thumbnail"/>
          <h3>Real Estate Listing</h3>
          <p>Continueing project of a  real estate listing</p>
        </a>
        </div>
        <div className="project-card">
          <h2>Our Strategy</h2>
          <p>Sometimes the hardest part is knowing what to say and when to say it. At Lines, you'll get the downlow on how to craft retweetable messages, when to post content, and what platforms you should be using.</p>
        </div>
        <div className="project-image">
        <a href="https://realeastatelisting.netlify.app/">
          <img src="/images/real-estate.png" alt="Project 1 Thumbnail"/>
          <h3>Real Estate Listing</h3>
          <p>Continueing project of a  real estate listing</p>
        </a>
        </div>
        <div className="project-card dark">
          <h2>Our Mission</h2>
          <p>Good content is everything. In a world that is oversaturated with content, you'll learn from successful writers and bloggers how to create content that matters and resonates with your audience.</p>
        </div>
        <div className="project-image">
        <a href="https://realeastatelisting.netlify.app/">
          <img src="/images/real-estate.png" alt="Project 1 Thumbnail"/>
          <h3>Real Estate Listing</h3>
          <p>Continueing project of a  real estate listing</p>
        </a>
        </div>
        <div className="project-image">
        <a href="https://realeastatelisting.netlify.app/">
          <img src="/images/real-estate.png" alt="Project 1 Thumbnail"/>
          <h3>Real Estate Listing</h3>
          <p>Continueing project of a  real estate listing</p>
        </a>
        </div>
        <div className="project-image">
        <a href="https://realeastatelisting.netlify.app/">
          <img src="/images/real-estate.png" alt="Project 1 Thumbnail"/>
          <h3>Real Estate Listing</h3>
          <p>Continueing project of a  real estate listing</p>
        </a>
        </div>
        <div className="project-image">
        <a href="https://realeastatelisting.netlify.app/">
          <img src="/images/real-estate.png" alt="Project 1 Thumbnail"/>
          <h3>Real Estate Listing</h3>
          <p>Continueing project of a  real estate listing</p>
        </a>
        </div>
      </div>

     
    </div>
  );
};

export default ProjectsPage;
