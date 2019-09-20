import React from 'react';
import Welcome from '../../../containers/Welcome';
import Technologies from './Technologies';
import Whatcanyoudo from '../../../containers/Whatcanyoudo';
import Contact from './Contact';
import Portfolio from './Portfolio';
import './menu.scss';

const Menu = ({ view }) => (
  <div id="menu">
    {view === "Welcome" && <Welcome />}
    {view === "Technologies" && <Technologies />}
    {view === "Contact" && <Contact />}
    {view === "Portfolio" && <Portfolio />}
    {view === "What can you do?" && <Whatcanyoudo />}
  </div>
);


export default Menu;
