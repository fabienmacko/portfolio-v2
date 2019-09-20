import { connect } from 'react-redux';

import App from '../components/App';

import { openMenu, changeView, increaseClickCounter } from '../store/reducer';

const mapStateToProps = state => ({
  clickCounter: state.clickCounter,
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  changeView: (view) => {
    dispatch(changeView(view));
  },
  increaseClickCounter: () => {
    dispatch(increaseClickCounter());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);