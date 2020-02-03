import React from 'react';

class SocialMedias extends React.Component {

  componentDidMount() {
    console.log(this.linkedin);
    // Manually active AOS to see the animation
    setTimeout(() => {
      this.github.classList.add("aos-animate")
    }, 0);
    setTimeout(() => {
      this.linkedin.classList.add("aos-animate")
    }, 0);
    setTimeout(() => {
      this.phone.classList.add("aos-animate")
    }, 0);
    setTimeout(() => {
      this.mail.classList.add("aos-animate")
    }, 0);
  }


  render() {
    return (
      <div className="social-medias">
        <div className="contact-element" data-aos="fade-up" data-aos-delay="600" ref={(element) => this.mail = element}>
          <a href="mailto:fmackodev@gmail.com" className="social-media">
            <i className="fas fa-envelope-square fa-4x"></i>
          </a>
        </div>
        <div className="contact-element" data-aos="fade-up" data-aos-delay="400" ref={(element) => this.phone = element}>
          <a href="tel:+33626277924" className="social-media">
            <i className="fas fa-phone-square fa-4x"></i>
          </a>
        </div>
        <div className="contact-element" data-aos="fade-up" data-aos-delay="200" ref={(element) => this.linkedin = element}>
          <a href="https://www.linkedin.com/in/fabienmacko/" className="social-media">
            <i className="fab fa-linkedin fa-4x"></i>
          </a>
        </div>
        <div className="contact-element" data-aos="fade-up" ref={(element) => this.github = element}>
          <a href="https://github.com/fabienmacko" className="social-media">
            <i className="fab fa-github-square fa-4x"></i>
          </a>
        </div>
      </div>
    )
  }
};


export default SocialMedias;