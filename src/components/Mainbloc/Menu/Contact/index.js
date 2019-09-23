import React from 'react';
import './contact.scss';

const Contact = () => (
  <div id="contact">
    <div className="section-title">
      <div data-aos="fade-right">Contact</div>
      <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
    </div>
    <div className="content">
      <div className="text">
        Here you have the keys to get in touch.
      </div>
      <div className="social-medias animated-border"> 
      <a href="https://www.linkedin.com/in/fabienmacko/" className="social-media" data-aos="fade-left" data-aos-delay="500">
        <i class="fab fa-linkedin fa-6x"></i>
      </a>
      <a href="https://www.linkedin.com/in/fabienmacko/" className="social-media" data-aos="fade-left" data-aos-delay="1000">
        <i class="fab fa-github-square fa-6x"></i>
      </a>
      </div>
    </div>
  </div>
);


export default Contact;
