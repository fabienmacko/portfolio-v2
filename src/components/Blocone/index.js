import React from 'react';
import Typed from 'react-typed';
import './blocone.scss';

class Blocone extends React.Component {
  
  componentDidMount() {
    var {openMenu, closeMenu, activeTypedText} = this.props;
    document.addEventListener('wheel', function(event){
      console.log(event.deltaY);
      
      if (event.deltaY > 0) {
        console.log("Openmenu");
        
        openMenu();
        setTimeout(() => {
          activeTypedText();
        }, 700);
      } else {
        closeMenu();
      }
    }, false);
  }

  render() {
    var {isMenuOpen, isTypedTextActive} = this.props;
    return (
      <div id="blocone" className={isMenuOpen ? 'open' : ''}>
        <div className="content-container">
          <div style={{
              fontSize: "30px",
              textAlign: "center",
            }}>
              {
                isTypedTextActive && 
                <Typed
                  strings={[
                    'Hi, dear visitor, welcome to my website.',
                    'Here you are in the principal menu!',
                    'Please click on what you want to know about me.']}
                    typeSpeed={50}
                    backSpeed={30} >
                </Typed>
              }
          </div>
          
        </div>
      </div>
    );
  }
}

export default Blocone;
