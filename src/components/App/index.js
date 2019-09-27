import React from 'react';
import Header from '../../containers/Header';
import Mainbloc from '../../containers/Mainbloc';
import Err404 from '../Err404';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import './App.scss';


class App extends React.Component {

  componentDidMount() {
    AOS.init();
    console.log("Hello! \nI can see that code is important for you. \nYes, as you can see, this website was fully developed in React.js/Redux like a one-page application. \nIf you loved it and want to get in touch, be sure to send me a message on LinkedIn or whatever! ☕")
  }
  increaseClickCounter = () => {
    const { increaseClickCounter } = this.props;
    increaseClickCounter();
  }

  render() {
    const { openMenu, changeView } = this.props;
    return (
      <div id="app" onClick={this.increaseClickCounter}>
        <Switch>
          <Route exact path="/" render={() => (
            <>
              <Header />
              <Mainbloc />
            </>)}
          />
          <Route path="/menu" render={() => {
            openMenu();
            return (
              <>
                <Header />
                <Mainbloc />
              </>
            )
          }}
          />
          <Route path="/whatcanyoudo" render={() => {
            openMenu();
            changeView("What can you do?");
            return (
              <>
                <Header />
                <Mainbloc />
              </>
            )
          }}
          />
          <Route path="/technologies" render={() => {
            openMenu();
            changeView("Technologies");
            return (
              <>
                <Header />
                <Mainbloc />
              </>
            )
          }}
          />
          <Route path="/portfolio" render={() => {
            openMenu();
            changeView("Portfolio");
            return (
              <>
                <Header />
                <Mainbloc />
              </>
            )
          }}
          />
          <Route path="/about" render={() => {
            openMenu();
            changeView("About");
            return (
              <>
                <Header />
                <Mainbloc />
              </>
            )
          }}
          />
          <Route component={Err404} />
        </Switch>
      </div>
    );
  }
}

export default App;
