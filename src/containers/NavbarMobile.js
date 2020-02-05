import { connect } from 'react-redux';

import NavbarMobile from '../components/Mainbloc/NavbarMobile';

import {openMenu,closeMenu,changeView,openMobileMenu,closeMobileMenu} from '../store/reducer';


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
  closeMobileMenu: () => {
    dispatch(closeMobileMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavbarMobile);