import { combineReducers } from 'redux';
// import exposure from '../../../components/Exposure/redux';
import orders from './components/OrderBook/redux';
import tiles from './components/PriceTileList/redux';
import trades from './components/Blotter/redux';

const reducer = combineReducers({
  // exposure,
  orders,
  tiles,
  trades
});

export default reducer;