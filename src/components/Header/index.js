import React from 'react';
import Particles from 'react-particles-js';
import Config from '../../particlesjs-config.json';
import Mountain from '../../style/images/snowy-mountain.jpg';
import './header.scss';



class Header extends React.Component {

  componentDidMount(){
    var backgroundElt = document.querySelector(".background");
    var divElt = backgroundElt.querySelector("div");
    divElt.style.height = "100%";
    divElt.style.width = "100%";
    divElt.style.position = "absolute";
    setTimeout(() => {
      document.querySelector("hr").classList.add("open");
    }, 1000);
  }

  openMainbloc = () => {
    var {openMenu} = this.props;
    openMenu();
  }

  render(){
    return (
      <div id="header">
        <div className="wrapper">
          <div className="background" style={{
            backgroundImage: `url('${Mountain}')`,
          }}>
            <Particles height="30%" params={Config} />
          </div>
          <div className="title">
            <h1 data-aos="fade-down" data-aos-duration="2000" data-aos-easing="ease-out">FABIEN MACKOWIAK</h1>
            <hr />
            <h2 data-aos="fade-in" data-aos-duration="400" data-aos-easing="ease-out" data-aos-delay="1700">Web Developer</h2>
            <h2 data-aos="fade-in" data-aos-duration="400" data-aos-easing="ease-out" data-aos-delay="1900">Geneva</h2>
            <div className="mousey" onClick={this.openMainbloc}>
              <div className="scroller"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
