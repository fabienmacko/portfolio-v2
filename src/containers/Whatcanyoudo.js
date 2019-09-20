import { connect } from 'react-redux';

import Whatcanyoudo from '../components/Mainbloc/Menu/Whatcanyoudo';

const mapStateToProps = state => ({
  clickCounter: state.clickCounter,
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Whatcanyoudo);