import { connect } from 'react-redux';
import priceTileList from './PriceTileList';
import PriceTile from './ConnectedPriceTile';

const mapStateToProps = state => ({ tiles: state.tiles });

const PriceTileListComponent = priceTileList(() => PriceTile);

export default connect(mapStateToProps, { })(PriceTileListComponent);