import { connect } from 'react-redux';

import Header from '../components/Header';

import { openMenu, activeTypedText } from '../store/reducer';

const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  activeTypedText: () => {
    dispatch(activeTypedText());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);