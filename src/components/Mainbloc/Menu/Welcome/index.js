import React from 'react';
import Typed from 'react-typed';
import Particles from 'react-particles-js';
import Config from '../../../../particlesjs-config2.json';
import Astronaut from '../../../Astronaut';
import Parallax from 'parallax-js';
import './welcome.scss';

class Welcome extends React.Component {
  componentDidMount() {
    var scene = document.querySelector('#animation-relative');

    new Parallax(scene, {
      relativeInput: true,
      invertY: false,
      invertX: false
    });
  }

  render() {
    var { isMenuOpen } = this.props;
    return (
      <div id="welcome">
        <Particles height="100%" style={{
          position: "absolute",
        }} params={Config} />
        <div id="animation-container">
          <div id="animation-relative">
            <p className="speechbubble" data-depth="1.3" style={{
              fontSize: "26px",
              width: "max-content",
              textAlign: "center",
            }}>
              {
                isMenuOpen &&
                <Typed
                  strings={[
                    'Hi, dear visitor, welcome to my website.',
                    'Here you are in the principal menu!',
                    'Please click on what you want to know about me.']}
                  typeSpeed={50}
                  backSpeed={10} >
                </Typed>
              }
            </p>
            <Astronaut />
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
