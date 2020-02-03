import React from 'react';
import SocialMedias from './SocialMedias';
import './contact.scss';

class Contact extends React.Component {
  
  componentDidMount() {
    
  }

  handleContactClick = (e) => {
  const {openContact, closeContact} = this.props;
    if (e.target.classList.contains("open")) {
      closeContact();
    } else {
      openContact();
    }
  };

render() {
  const { isContactOpen } = this.props;
  return (
    <div id="contact" className={isContactOpen ? "animated-border" : ""}>
      {
        isContactOpen && <SocialMedias isContactOpen={isContactOpen} />
      }

      <div id="contact-button" className={isContactOpen ? "button open" : "button"} onClick={this.handleContactClick}>
        <i className="fas fa-times fa-2x"></i>
        <i className="fas fa-ellipsis-v fa-2x"></i>
      </div>
    </div>
  )
}
};


export default Contact;