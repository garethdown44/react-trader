const RECEIVE_POSITION = 'RECEIVE_POSITION';

export function subscribePositions() {
  return {
    type: RECEIVE_POSITION
  };
}

export function receivePosition(position) {
  return { type: RECEIVE_POSITION, position };
}

const initialState = { orders: [] };

export default function reducer(state = initialState) {
  return state;
}