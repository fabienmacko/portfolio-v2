import { connect } from 'react-redux';

import Menu from '../components/Navbar';


const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);