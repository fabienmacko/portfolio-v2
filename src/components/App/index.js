import React from 'react';
import Header from '../../containers/Header';
import Mainbloc from '../../containers/Mainbloc';
import { Switch, Route } from 'react-router-dom';
import AOS from 'aos';
import './App.scss';



class App extends React.Component {

  componentDidMount() {
    AOS.init();
  }

  render() {
    const { openMenu } = this.props;
    return (
      <div className="app">
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
        </Switch>
      </div>
    );
  }
}

export default App;
