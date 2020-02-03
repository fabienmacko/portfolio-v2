import { connect } from 'react-redux';

import Navbar from '../components/Mainbloc/Navbar';

import {openMenu,closeMenu,changeView} from '../store/reducer';


const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);