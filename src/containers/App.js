import { connect } from 'react-redux';

import App from '../components/App';

import { openMenu, changeView } from '../store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  changeView: (view) => {
    dispatch(changeView(view));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);