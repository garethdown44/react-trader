
import trades from '../../shared/blotter';
export const RECEIVE_POSITION = 'RECEIVE_POSITION';

export function subscribePositions() {
  return (dispatch) => {
    trades.subscribe(position => {
      dispatch(receivePosition(position));
    });
  };
}

export function receivePosition(position) {
  return {
    type: RECEIVE_POSITION,
    position
  };
}

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_POSITION: {
      return [...state, action.position];
    }
    default:
      return state;
  }
};