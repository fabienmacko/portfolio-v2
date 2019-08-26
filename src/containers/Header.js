import { connect } from 'react-redux';

import Header from '../components/Header';

import { openMenu } from '../store/reducer';

const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);