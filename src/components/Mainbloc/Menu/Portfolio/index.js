/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Polis from '../../../../style/images/polis.png';
import Elephant from '../../../../style/images/elephant.jpg';
import Memory from '../../../../style/images/memory.png';
import PolisDevices from '../../../../style/images/polis-devices.png';
import ElephantDevices from '../../../../style/images/elephant-devices.png';
import MemoryDevices from '../../../../style/images/memory-devices.png';

import './portfolio.scss';
import SitePreview from '../../../SitePreview';
const Portfolio = () => {
  const Swal = withReactContent(MySwal);

  const handlePolisClick = () => {
    Swal.fire({
      title: 'Polis',
      html:<SitePreview imageSource={PolisDevices} href={"https://www.polis-app.fr"} buttonText={'View this app'} description={'APPLICATION OF PARTICIPATORY MAPPING OF ARCHITECTURAL DATA\n\nThe version 1.0 of Polis you are currently browsing was developed in 3 weeks.\nThis project validates a 6-month training course followed by 4 aspiring developers in the virtual classrooms of Oclock. Besides the intense pleasure of creating "from scratch" a web project, this web app also serves to support the passage of the Professional title of web developer.'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleMemoryClick = () => {
    Swal.fire({
      title: 'Memory',
      html:<SitePreview imageSource={MemoryDevices} href={"https://fabienmackowiak.com/memory"} buttonText={'Play!'} description={'Memory is a realtime multiplayer online game that I created with React.js for the front-end, and Node.js/Express for the back-end.\nSocket-io has been used to create the realtime communication between the front and the back.'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleElephantClick = () => {
    Swal.fire({
      title: 'Elephant Website',
      html: <SitePreview imageSource={ElephantDevices} href={"https://fabienmackowiak.com/elephant"} buttonText={'View this website'} description={'Elephant is a basic website design with interactive content.'} />,
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }
  return (
    <div id="portfolio">
      <div className="section-title">
        <div data-aos="fade-right">Portfolio</div>
        <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
      </div>
      <div className="content">
        <div className="text">
          Here you can find my latest creations.
        </div>
        <div className="container sites-container animated-border">

        <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handleMemoryClick}>
            <figure className="figure purple">
              <img src={Memory} alt="Memory" />
              <figcaption>
                <h2>Memory <span> Online</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          
          <div className="item site" data-aos="fade-left" data-aos-delay="400" onClick={handlePolisClick}>
            <figure className="figure red">
              <img src={Polis} alt="Polis" />
              <figcaption>
                <h2>Polis <span> App</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>

          <div className="item site" data-aos="fade-left" data-aos-delay="600" onClick={handleElephantClick}>
            <figure className="figure green">
              <img src={Elephant} alt="Elephant" />
              <figcaption>
                <h2>Elephant<span> Design</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          
        </div>
      </div>
    </div >
  )
};


export default Portfolio;
