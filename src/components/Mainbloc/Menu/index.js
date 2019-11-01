import React from 'react';
import Welcome from '../../../containers/Welcome';
import Technologies from './Technologies';
import Whatcanyoudo from '../../../containers/Whatcanyoudo';
import About from './About';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';
import './menu.scss';

const Menu = ({ view }) => (
  <div id="menu">
    {view === "Welcome" && <Welcome />}
    {view === "Technologies" && <Technologies />}
    {view === "About" && <About />}
    {view === "Portfolio" && <Portfolio />}
    {view === "What can you do?" && <Whatcanyoudo />}
    {view === "Testimonials" && <Testimonials />}
  </div>
);

export default Menu;
