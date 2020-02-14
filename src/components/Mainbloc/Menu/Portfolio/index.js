/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import MySwal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Polis from '../../../../style/images/polis.png';
import PortfolioV1 from '../../../../style/images/portfolio-v1.png';
import './portfolio.scss';
const Portfolio = () => {
  const Swal = withReactContent(MySwal);

  const handlePolisClick = () => {
    Swal.fire({
      title: 'Polis',
      html:
      '<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+Polis+'"></div>' +
      '<div><i>APPLICATION OF PARTICIPATORY MAPPING OF ARCHITECTURAL DATA<i><br><br>The version 1.0 of Polis you are currently browsing was developed in 3 weeks.<br>This project validates a 6-month training course followed by 4 aspiring developers in the virtual classrooms of Oclock. Besides the intense pleasure of creating "from scratch" a web project, this web app also serves to support the passage of the Professional title of web developer.</div>' +
      '</div>' +
      '<a className="swal2-confirm swal2-styled" style="text-decoration: none;" href="https://www.polis-app.fr">View this app</a>',
      animation: true,
      showConfirmButton: false,
    })
  }

  const handlePortfolioClick = () => {
    Swal.fire({
      title: 'Portfolio v1',
      html:
      '<div style="display:flex;justify-content:space-between;padding:10px;margin-bottom: 20px;">' +
      '<div><img style="width: 100%;" src="'+PortfolioV1+'"></div>' +
      '<div>This is the first portfolio that I created with basic HTML/CSS/JS stack. Simple, but efficent.</div>' +
      '</div>' +
      '<a className="swal2-confirm swal2-styled" style="text-decoration: none;" href="#">View this website</a>',
      animation: true,
      showConfirmButton: false,
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
          <div className="item site" data-aos="fade-left" data-aos-delay="500" onClick={handlePolisClick}>
            <figure className="figure red">
              <img src={Polis} alt="Polis" />
              <figcaption>
                <h2>Polis <span> App</span></h2>
              </figcaption>
              <div></div>
            </figure>
          </div>
          <div className="item site" data-aos="fade-left" data-aos-delay="1000" onClick={handlePortfolioClick}>
            <figure className="figure green">
              <img src={PortfolioV1} alt="Portfolio" />
              <figcaption>
                <h2>Portoflio <span> V1</span></h2>
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
