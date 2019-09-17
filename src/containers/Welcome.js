import { connect } from 'react-redux';

import Welcome from '../components/Mainbloc/Menu/Welcome';


const mapStateToProps = state => ({
  isMenuOpen: state.isMenuOpen,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Welcome);