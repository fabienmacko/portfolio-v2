import React from 'react';
import Typed from 'react-typed';
import './portfolio.scss';

const Portfolio = () => (
  <div id="portfolio">
    <div className="section-title">
      <div data-aos="fade-right">Portfolio</div>
      <div className="underline" data-aos="flip-right" data-aos-delay="400"></div>
    </div>
    <div className="content">
      <div className="text">
        <Typed
          strings={['Here you can find my latest creations.']}
          typeSpeed={25}
          backSpeed={10} >
        </Typed>
      </div>
    </div>
  </div>
);


export default Portfolio;
