import { connect } from 'react-redux';

import Navbar from '../components/Mainbloc/Navbar';

import {closeMenu,changeView} from '../store/reducer';


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
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navbar);