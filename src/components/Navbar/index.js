import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../style/images/fm-logo.jpg';
import './navbar.scss';

class Navbar extends React.Component {

  componentDidMount() {

  }

  changeActiveButton = e => {
    var elements = document.querySelectorAll(".menu-item");
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      element.classList.remove("current");
    }
    console.log(e.target.closest(".menu-item"));
    
    e.target.closest(".menu-item").classList.add("current");
  }

  render() {
    var { isMenuOpen, closeMenu } = this.props;
    return (
      <div id="navbar" className={isMenuOpen ? 'open' : ''}>
        <ul className="menu-container">
          <li className="menu-item" onClick={closeMenu}><img id="nav-logo" src={Logo} alt="Fabien Mackowiak logo"/></li>
          <li className="menu-item" onClick={this.changeActiveButton}><NavLink to="/menu">What can you do?</NavLink></li>
          <li className="menu-item" onClick={this.changeActiveButton}><NavLink to="/menu">Technologies</NavLink></li>
          <li className="menu-item" onClick={this.changeActiveButton}><NavLink to="/menu">Portfolio</NavLink></li>
          <li className="menu-item" onClick={this.changeActiveButton}><NavLink to="/menu">Contact</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
