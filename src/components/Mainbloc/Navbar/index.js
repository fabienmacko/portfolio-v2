import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../style/images/fm-logo.jpg';
import './navbar.scss';

const Navbar = ({ isMenuOpen, closeMenu, changeView, view }) => {

  const changeActiveView = e => {
    var elements = document.querySelectorAll(".menu-item");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("current");
    }
    changeView(e.target.textContent)
    e.target.closest(".menu-item").classList.add("current");
  }

  return (
    <div id="navbar" className={isMenuOpen ? 'open' : ''}>
      <ul className="menu-container">
        <li className="menu-item" onClick={closeMenu}><img id="nav-logo" src={Logo} alt="Fabien Mackowiak logo" /></li>
        <li className={view === "Welcome" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/menu`}>Welcome</Link></li>
        <li className={view === "What can you do?" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/whatcanyoudo`}>What can you do?</Link></li>
        <li className={view === "Technologies" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/technologies`}>Technologies</Link></li>
        <li className={view === "Portfolio" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/portfolio`}>Portfolio</Link></li>
        <li className={view === "About" ? "menu-item current" : "menu-item"} onClick={changeActiveView}><Link to={`/about`}>About</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;