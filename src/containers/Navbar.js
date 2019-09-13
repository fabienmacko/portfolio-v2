import { connect } from 'react-redux';

import Menu from '../components/Navbar';

import {closeMenu} from '../store/reducer';


const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = dispatch => ({
  closeMenu: () => {
    dispatch(closeMenu());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);