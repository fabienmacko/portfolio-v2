import React from 'react';
import './navbar.scss';

class Navbar extends React.Component {

  componentDidMount() {

  }

  render() {
    var { isMenuOpen } = this.props;
    return (
      <div id="navbar" className={isMenuOpen ? 'open' : ''}>
        
      </div>
    );
  }
}

export default Navbar;
