import { connect } from 'react-redux';

import Mainbloc from '../components/Mainbloc';

import { closeMenu, openMenu, changeView } from '../store/reducer';

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
  changeView: (view) => {
    dispatch(changeView(view))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Mainbloc);