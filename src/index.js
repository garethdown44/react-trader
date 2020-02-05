import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './components/App';
import reducer from './reducer';
import subscribePricesMiddleware from './services/subscribePricesMiddleware';
import up from './services/up';

const middleware = [thunk, subscribePricesMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

up();

const getAppComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  getAppComponent(),
  document.getElementById('root')
);