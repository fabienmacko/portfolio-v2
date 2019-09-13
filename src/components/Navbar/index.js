import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../../style/images/fm-logo.jpg';
import './navbar.scss';

class Navbar extends React.Component {

  componentDidMount() {

  }

  changeActiveButton = e => {
    
  }

  render() {
    var { isMenuOpen, closeMenu } = this.props;
    return (
      <div id="navbar" className={isMenuOpen ? 'open' : ''}>
        <ul className="menu-container">
          <li onClick={closeMenu}><img src={Logo} alt="Fabien Mackowiak logo"/></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">About Us</NavLink></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">About Us</NavLink></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">About Us</NavLink></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">About Us</NavLink></li>
          <li onClick={this.changeActiveButton}><NavLink to="/menu">About Us</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
