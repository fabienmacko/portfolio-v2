import React from 'react';
import './contact.scss';

const Contact = ({ openContact, closeContact, isContactOpen }) => {

  const handleContactClick = (e) => {
    console.log(e.target.classList.contains("open"));

    if (e.target.classList.contains("open")) {
      closeContact();
    } else {
      openContact();
    }
  };

  return (
    <div id="contact" className={isContactOpen ? "animated-border" : ""}>
      {
        isContactOpen && (
          <div className="social-medias">
            <div className="contact-element" data-aos="fade-up" data-aos-delay="600">
              <a href="mailto:fmackodev@gmail.com" className="social-media">
                <i className="fas fa-envelope-square fa-4x"></i>
              </a>
            </div>
            <div className="contact-element" data-aos="fade-up" data-aos-delay="400">
              <a href="tel:+33626277924" className="social-media">
                <i className="fas fa-phone-square fa-4x"></i>
              </a>
            </div>
            <div className="contact-element" data-aos="fade-up" data-aos-delay="200">
              <a href="https://www.linkedin.com/in/fabienmacko/" className="social-media">
                <i className="fab fa-linkedin fa-4x"></i>
              </a>
            </div>
            <div className="contact-element" data-aos="fade-up">
              <a href="https://github.com/fabienmacko" className="social-media">
                <i className="fab fa-github-square fa-4x"></i>
              </a>
            </div>
          </div>
        )
      }

      <div className={isContactOpen ? "button open" : "button"} onClick={handleContactClick}>
        <i className="fas fa-ellipsis-v fa-2x"></i>
      </div>
    </div>
  )
};


export default Contact;
