import { connect } from 'react-redux';
import Blotter from '../Blotter';
import { subscribePositions } from '../Blotter/redux';

const mapStateToProps = state => ({
  trades: state.trades
});

const props = { subscribePositions };

export default connect(mapStateToProps, props)(Blotter);
