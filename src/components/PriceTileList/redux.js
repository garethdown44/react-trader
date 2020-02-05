import executeTrade from '../../shared/executeTrade';

const SPOT_TRADE_BOOKED = 'SPOT_TRADE_BOOKED';
const BOOK_SPOT_TRADE_REQUESTED = 'BOOK_SPOT_TRADE_REQUESTED';
const SPOT_TRADE_BOOKING_FAILED = 'SPOT_TRADE_BOOKING_FAILED';
const CHANGE_NOTIONAL = 'CHANGE_NOTIONAL';
const PRICE_TICK = 'PRICE_TICK';

export const subscribePrices = (ccyCpl, subscriptionKey) => (
  { type: 'SUBSCRIBE_PRICES', ccyCpl, subscriptionKey }
);

export const unsubscribePrices = subscriptionKey => (
  { type: 'UNSUBSCRIBE_PRICES', subscriptionKey }
);

export const changeNotional = (tileId, value) => ({ type: CHANGE_NOTIONAL, tileId, value });

function bookSpotTradeRequested(tileId, direction, ccyCpl, rate, notional) {
  return {
    type: BOOK_SPOT_TRADE_REQUESTED,
    tileId,
    direction,
    ccyCpl,
    rate,
    notional
  };
}

export function tradeBooked(tileId) {
  return {
    type: SPOT_TRADE_BOOKED,
    tileId
  };
}

export function bookSpotTrade(tileId, direction, ccyCpl, rate, notional) {
  console.log('HERE');
  return (dispatch) => {
    dispatch(bookSpotTradeRequested(tileId, direction, ccyCpl, rate, notional));
    executeTrade(direction, ccyCpl, rate, notional, () => dispatch(tradeBooked(tileId)), () => dispatch(tradeBookingFailed(tileId)));
  };
}

function tradeBookingFailed(tileId) {
  return {
    type: SPOT_TRADE_BOOKING_FAILED,
    tileId
  };
}

const initialState = {
  prices: {
    EURUSD: { bid: 0.000000, ask: 0.000000, spread: '0.00', isIncrease: true },
    EURGBP: { bid: 0.000000, ask: 0.000000, spread: '0.00', isIncrease: true },
    AUDCHF: { bid: 0.000000, ask: 0.000000, spread: '0.00', isIncrease: true },
    GBPCHF: { bid: 0.000000, ask: 0.000000, spread: '0.00', isIncrease: true },
    AUDUSD: { bid: 0.000000, ask: 0.000000, spread: '0.00', isIncrease: true }
  },
  tiles: {
    0: {
      ccyCpl: 'EURUSD',
      notional: '1000000',
      notionalCurrency: 'EUR',
      isExecuting: false,
      isInvalidNotional: false
    },
    1: {
      ccyCpl: 'EURGBP',
      notional: '1000000',
      notionalCurrency: 'EUR',
      isExecuting: false,
      isInvalidNotional: false
    },
    2: {
      ccyCpl: 'AUDCHF',
      notional: '1000000',
      notionalCurrency: 'AUD',
      isExecuting: false,
      isInvalidNotional: false
    },
    3: {
      ccyCpl: 'GBPCHF',
      notional: '1000000',
      notionalCurrency: 'GBP',
      isExecuting: false,
      isInvalidNotional: false
    },
    4: {
      ccyCpl: 'AUDUSD',
      notional: '1000000',
      notionalCurrency: 'AUD',
      isExecuting: false,
      isInvalidNotional: false
    }
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NOTIONAL: {
      const notional = action.value;
      const isInvalidNotional = !isNumeric(notional);

      const tile = { ...state.tiles[action.tileId], notional, isInvalidNotional };

      const newTiles = { ...state.tiles, [action.tileId]: tile };

      return { ...state, tiles: newTiles };
    }

    case PRICE_TICK: {
      const price = action.price;

      const previous = state.prices[price.ccyCpl];

      const isIncrease = previous && (price.ask > previous.ask);

      const spread = ((price.ask - price.bid) * 1000).toFixed(2);
      const formatted = { ...price, spread, isIncrease };

      const newPrice = { [action.price.ccyCpl]: formatted };

      const newPrices = { ...state.prices, ...newPrice };

      return {
        ...state,
        prices: newPrices
      };
    }

    case BOOK_SPOT_TRADE_REQUESTED: {
      const tile = { ...state.tiles[action.tileId], isExecuting: true };

      const newTiles = {
        ...state.tiles,
        [action.tileId]: tile
      };

      return { ...state, tiles: newTiles };
    }

    case SPOT_TRADE_BOOKED:
    case SPOT_TRADE_BOOKING_FAILED: {
      const tile = { ...state.tiles[action.tileId], isExecuting: false };

      const newTiles = {
        ...state.tiles,
        [action.tileId]: tile
      };

      return { ...state, tiles: newTiles };
    }

    default:
      return state;
  }
};

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
