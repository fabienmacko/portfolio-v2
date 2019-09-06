import React from 'react';
import { Redirect } from 'react-router-dom';
import Menu from "../../containers/Menu";
import './mainbloc.scss';

class Mainbloc extends React.Component {

  componentDidMount() {
    var { openMenu, closeMenu, } = this.props;
    document.addEventListener('wheel', function (event) {

      if (event.deltaY > 0) {
        console.log("Openmenu");
        openMenu();
      } else {
        closeMenu();
      }
    }, false);
  }

  render() {
    var { isMenuOpen } = this.props;
    return (
      <div id="mainbloc" className={isMenuOpen ? 'open' : ''}>
        {
          !isMenuOpen && <Redirect to="/" />
        }
        {
          isMenuOpen && <Redirect to="/menu" />
        }
        <div className="content-container">
          <Menu />
        </div>
      </div>
    );
  }
}

export default Mainbloc;
