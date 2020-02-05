/* @flow */

import React from 'react';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../Layout';
import Dashboard from '../Dashboard/Container';
import ConnectedPriceTileList from '../ConnectedPriceTileList';
import Price from '../LivePrices/Price';
// import Exposure from '../../../../../components/Exposure';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      {/* <Route path="/" component={ConnectedPriceTileList} />
      <Route path="/blotter" component={Dashboard} />       */}

      <ConnectedPriceTileList />
      <Dashboard />
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
