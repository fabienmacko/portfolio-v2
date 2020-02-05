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
      '<div style="display:flex;justify-content:space-between;padding:10px;margin-bottom: 20px;">' +
      '<div style="max-width: 40%;"><img style="width: 100%;" src="'+Polis+'"></div>' +
      '<div style="max-width: 40%;">LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;" href="https://www.polis-app.fr">View this app</a>',
      animation: true,
      showConfirmButton: false,
    })
  }

  const handlePortfolioClick = () => {
    Swal.fire({
      title: 'Portfolio v1',
      html:
      '<div style="display:flex;justify-content:space-between;padding:10px;margin-bottom: 20px;">' +
      '<div style="max-width: 40%;"><img style="width: 100%;" src="'+PortfolioV1+'"></div>' +
      '<div style="max-width: 40%;">LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem</div>' +
      '</div>' +
      '<a class="swal2-confirm swal2-styled" style="text-decoration: none;" href="#">View this website</a>',
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
