import { combineReducers } from 'redux';
// import { LOCATION_CHANGE } from 'react-router-redux';
// import exposure from '../../../components/Exposure/redux';
import orders from './components/OrderBook/redux';
import tiles from './components/PriceTileList/redux';
import trades from './components/Blotter/redux';

// Initial routing state
const routeInitialState = {
  locationBeforeTransitions: null
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    // case LOCATION_CHANGE:
    //   return state.merge({
    //     locationBeforeTransitions: action.payload,
    //   });
    default:
      return state;
  }
}

const reducer = combineReducers({
  route: routeReducer,
  // exposure,
  orders,
  tiles,
  trades
});

export default reducer;