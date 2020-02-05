/* eslint-disable global-require */
/* eslint-disable no-underscore-dangle */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import PriceTileList from './components/ConnectedPriceTileList';
import Dashboard from './components/Dashboard/Container';
import Layout from './components/Layout';
import App from './components/App';
import reducer from './reducer';
import subscribePricesMiddleware from './shared/subscribePricesMiddleware';
import axios from 'axios';
// import './site.css';

const middleware = [thunk, subscribePricesMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
  applyMiddleware(...middleware)
));

axios.get('http://localhost:8081/up');

const getAppComponent = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(
  getAppComponent(),
  document.getElementById('root')
);