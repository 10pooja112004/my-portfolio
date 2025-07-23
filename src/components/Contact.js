import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to drop me a message!</p>

      <div className="contact-info card-style">
        <p><strong>Email: poojamurthy413@gmail.com</strong></p>
        <p><strong>Phone No: 91+ 7353849828</strong></p>
        <p>
          <strong>LinkedIn:</strong>{' '}
          <a href="https://www.linkedin.com/in/pooja-m-069243250" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/pooja-m-069243250
          </a>
        </p>
        <p>
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/10pooja112004" target="_blank" rel="noopener noreferrer">
            github.com/10pooja112004
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
