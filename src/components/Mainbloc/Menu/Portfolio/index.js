/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Polis from '../../../../style/images/polis.png';
import PortfolioV1 from '../../../../style/images/portfolio-v1.png';
import Elephant from '../../../../style/images/elephant.jpg';
import Memory from '../../../../style/images/memory.png';

import './portfolio.scss';
const Portfolio = () => {
  const Swal = withReactContent(MySwal);

  const handlePolisClick = () => {
    Swal.fire({
      title: 'Polis',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+Polis+'"></div>' +
      '<div>APPLICATION OF PARTICIPATORY MAPPING OF ARCHITECTURAL DATA<br><br>The version 1.0 of Polis you are currently browsing was developed in 3 weeks.<br>This project validates a 6-month training course followed by 4 aspiring developers in the virtual classrooms of Oclock. Besides the intense pleasure of creating "from scratch" a web project, this web app also serves to support the passage of the Professional title of web developer.</div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" href="https://www.polis-app.fr">View this app</a>',
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleMemoryClick = () => {
    Swal.fire({
      title: 'Memory',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+Memory+'"></div>' +
      '<div>Memory is a realtime online game that I created with React.js for the front-end, and Node.js/Express for the back-end.<br/>Socket-io has been used to create the realtime communication between the front and the back.</div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" href="https://fabienmackowiak.com/memory">Play!</a>',
      animation: true,
      showConfirmButton: false,
      showCloseButton: true,
    })
  }

  const handleElephantClick = () => {
    Swal.fire({
      title: 'Elephant Website',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+Elephant+'"></div>' +
      '<div>Elephant is a basic website design with interactive content.</div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;font-weight:bold;" href="https://fabienmackowiak.com/elephant">View this website</a>',
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

        <div className="item site" data-aos="fade-left" data-aos-delay="400" onClick={handleMemoryClick}>
            <figure className="figure purple">
              <img src={Memory} alt="Memory" />
              <figcaption>
                <h2>Memory <span> Online</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          
          <div className="item site" data-aos="fade-left" data-aos-delay="200" onClick={handlePolisClick}>
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
