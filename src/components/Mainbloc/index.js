import React from 'react';
import { Redirect, Switch, withRouter } from 'react-router-dom';
import Menu from "../../containers/Menu";
import Navbar from '../../containers/Navbar';
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
    var {pathname} = this.props.location;
    return (
      <div id="mainbloc" className={isMenuOpen ? 'open' : ''}>
        <Switch>
          {
            !isMenuOpen && pathname !== "/" && <Redirect to="/" />
          }
          {
            isMenuOpen && pathname !== "/menu" && <Redirect to="/menu" />
          }
        </Switch>
        <Navbar />
        <div className="content-container">
          <Menu />
        </div>
      </div>
    );
  }
}

export default withRouter(Mainbloc);
