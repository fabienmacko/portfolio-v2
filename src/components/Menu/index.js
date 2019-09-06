import React from 'react';
import Typed from 'react-typed';
import './menu.scss';

class Menu extends React.Component {

  componentDidMount() {

  }

  render() {
    var { isMenuOpen } = this.props;
    return (
      <div id="menu">
        <div style={{
          fontSize: "30px",
          textAlign: "center",
        }}>
          {
            isMenuOpen &&
            <Typed
              strings={[
                'Hi, dear visitor, welcome to my website.',
                'Here you are in the principal menu!',
                'Please click on what you want to know about me.']}
              typeSpeed={50}
              backSpeed={10} >
            </Typed>
          }
        </div>
        <section className="menu-items">
          <i className="fas fa-cog"></i>
        </section>
        <section className="menu-items">

        </section>
        <section className="menu-items">

        </section>
      </div>
    );
  }
}

export default Menu;
