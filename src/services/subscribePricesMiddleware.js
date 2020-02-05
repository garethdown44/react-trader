/* eslint-disable no-unused-vars */
import getStreamingPrices from './getStreamingPrices';

const subscriptions = {};

const subscribePricesMiddleware = store => next => action => {
  if (action.type === 'SUBSCRIBE_PRICES') {
    const subscription = getStreamingPrices(action.ccyCpl).subscribe(price => {
      next({ type: 'PRICE_TICK', price });
    });
    subscriptions[action.subscriptionKey] = subscription;
    return;
  } else if (action.type === 'UNSUBSCRIBE_PRICES') {
    const subscription = subscriptions[action.subscriptionKey];

    if (subscription && subscription.dispose) {
      subscription.dispose();
    }

    next(action);
    return;
  } else {
    next(action);
    return;
  }
};

export default subscribePricesMiddleware;
