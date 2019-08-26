import { connect } from 'react-redux';

import Blocone from '../components/Blocone';

import { closeMenu, openMenu, activeTypedText } from '../store/reducer';

const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
  isTypedTextActive: state.isTypedTextActive,
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  closeMenu: () => {
    dispatch(closeMenu());
  },
  activeTypedText: () => {
    dispatch(activeTypedText());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Blocone);