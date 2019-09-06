import { connect } from 'react-redux';

import Menu from '../components/Menu';


const mapStateToProps = (state, ownProps) => ({
  isMenuOpen: state.isMenuOpen,
  isMenuOpenFromUrl: ownProps.isMenuOpenFromUrl,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);