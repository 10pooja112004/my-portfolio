import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about card-style" id="about">
      <h2>About Me</h2>
      <div className="about-content ">
        {/* Optional image */}
        {/* <img src="/pooja.jpg" alt="Pooja M." className="about-img" /> */}

        <p>
          Hi! I'm <strong>Pooja M.</strong>, a passionate web developer with a B.C.A. degree from KLE College.  
          I enjoy building web applications using technologies like <strong>React.js, Spring Boot, Java, and Python</strong>.  
          I’ve also completed certifications in Automation with Python and Java frameworks like Hibernate and JDBC.
        </p>

        <p>
          I'm constantly learning and excited about creating meaningful projects.  
          My goal is to become a full-stack developer , Aspiring Data Analyst and work on impactful software solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
