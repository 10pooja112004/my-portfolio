import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects card-style" id="projects">
      <h2>Projects</h2>
      <div className="project-grid">

        {/* Project 1 */}
        <div className="project-card">
          <h3>Virtual Art Gallery</h3>
          <p>A full-stack platform for artists to showcase and sell digital art. Includes JWT auth, cart, payments, and secure downloads.</p>
          <p><strong>Tech Stack:</strong> Spring Boot, Hibernate, React.js, Stripe API, Cloudinary</p>
          <div className="project-links">
            <a href="https://github.com/10pooja112004/virtual-art-gallery" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://virtualartgallery.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <h3>Currency Tracker App</h3>
          <p>A React app to track and convert live currency rates using Fixer API.</p>
          <p><strong>Tech Stack:</strong> React.js, REST API, CSS</p>
          <div className="project-links">
            <a href="https://github.com/10pooja112004/currency-tracker" target="_blank" rel="noopener noreferrer">Code</a>
            <a href="https://currencytracker.vercel.app" target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </div>

        {/* Add more projects as needed */}

      </div>
    </section>
  );
};

export default Projects;
