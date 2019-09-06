import { connect } from 'react-redux';

import Mainbloc from '../components/Mainbloc';

import { closeMenu, openMenu } from '../store/reducer';

const mapStateToProps = (state) => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mainbloc);