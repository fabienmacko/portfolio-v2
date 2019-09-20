import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Menu from "../../containers/Menu";
import Navbar from '../../containers/Navbar';
import './mainbloc.scss';

class Mainbloc extends React.Component {

  componentDidMount() {
    var { openMenu, closeMenu, changeView } = this.props;

    document.addEventListener('wheel', function (event) {
      if (!document.querySelector("#mainbloc").classList.contains("open")) {
        if (event.deltaY > 0) {
          changeView("Welcome");
          openMenu();
        }
      }

      if (event.deltaY < 0) {
        closeMenu();
      } 
    }, false);
  }

  render() {
    var { isMenuOpen } = this.props;
    var { pathname } = this.props.location;

    return (
      <div id="mainbloc" className={isMenuOpen ? 'open' : ''}>
        {
          !isMenuOpen && pathname !== "/" && <Redirect to="/" />
        }
        {
          isMenuOpen && pathname !== "/menu" && pathname === "/" && <Redirect to="/menu" />
        }
        <Navbar />
        <div className="content-container">
          <Menu />
        </div>
      </div>
    );
  }
}

export default withRouter(Mainbloc);
