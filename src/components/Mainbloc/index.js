import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Menu from "../../containers/Menu";
import Navbar from '../../containers/Navbar';
import NavbarMobile from '../../containers/NavbarMobile';
import Contact from '../../containers/Contact';
import './mainbloc.scss';

class Mainbloc extends React.Component {

  componentDidMount() {
    var { openMenu, changeView } = this.props;

    document.addEventListener('wheel', function (event) {
      if (!document.querySelector("#mainbloc").classList.contains("open")) {
        if (event.deltaY > 0) {
          changeView("Welcome");
          openMenu();
        }
      }
    }, false);
  }

  render() {
    var { isMenuOpen } = this.props;
    var { pathname } = this.props.location;

    return (
      <>
      {
        window.innerWidth <= 1350 && <NavbarMobile />
      }
      {
        window.innerWidth > 1350 && <Navbar />
      }
        <div id="mainbloc" className={isMenuOpen ? 'open' : ''}>
          {
            !isMenuOpen && pathname !== "/" && <Redirect to="/" />
          }
          {
            isMenuOpen && pathname !== "/menu" && pathname === "/" && <Redirect to="/menu" />
          }
          <div className="content-container">
            <Menu />
          </div>
          <Contact />
        </div>
      </>
    );
  }
}

export default withRouter(Mainbloc);
