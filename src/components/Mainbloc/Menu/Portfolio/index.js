/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import Polis from '../../../../style/images/polis.png';
import PortfolioV1 from '../../../../style/images/portfolio-v1.png';
import './portfolio.scss';

const Portfolio = () => (
  <div id="portfolio">
    <div className="section-title">
      <div data-aos="fade-right">Portfolio</div>
      <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
    </div>
    <div className="content">
      <div className="text">
        Here you can find my latest creations.
      </div>
      <div className="sites-container animated-border">
        <div className="site" data-aos="fade-left" data-aos-delay="500">
          <figure class="figure red">
            <img src={Polis} alt="Polis" />
            <figcaption>
              <h2>Polis <span> App</span></h2>
            </figcaption>
            <a href="https://www.polis-app.fr/login" />
          </figure>
        </div>
        <div className="site" data-aos="fade-left" data-aos-delay="1000">
          <figure class="figure green">
            <img src={PortfolioV1} alt="Portfolio" />
            <figcaption>
              <h2>Portoflio <span> V1</span></h2>
            </figcaption>
            <a href="#" />
          </figure>
        </div>
      </div>
    </div>
  </div >
);


export default Portfolio;
