import { connect } from 'react-redux';

import Contact from '../components/Contact';

import { openMenu,openContact,closeContact } from '../store/reducer';

const mapStateToProps = state => ({
  isContactOpen: state.isContactOpen,
});

const mapDispatchToProps = dispatch => ({
  openMenu: () => {
    dispatch(openMenu());
  },
  openContact: () => {
    dispatch(openContact());
  },
  closeContact: () => {
    dispatch(closeContact());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Contact);