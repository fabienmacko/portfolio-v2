import { connect } from 'react-redux';

import Navbar from '../components/Mainbloc/Navbar';

import {openMenu,closeMenu,changeView, openMobileMenu} from '../store/reducer';


const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
  isMobileMenuOpen: state.isMobileMenuOpen,
  view: state.view,
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => {
    dispatch(closeMenu());
  },
  changeView: (view) => {
    dispatch(changeView(view));
  },
  openMenu: () => {
    dispatch(openMenu());
  },
  openMobileMenu: () => {
    dispatch(openMobileMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);