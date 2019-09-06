import { connect } from 'react-redux';

import App from '../components/App';

import { openMenu } from '../store/reducer';

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);