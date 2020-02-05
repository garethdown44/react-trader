import React from 'react';
import { BrowserRouter, Route, hashHistory } from 'react-router-dom';
import Layout from '../Layout';
import Dashboard from '../Dashboard/Container';
import ConnectedPriceTileList from '../ConnectedPriceTileList';
import Price from '../LivePrices/Price';
// import Exposure from '../Exposure';

const AppRouter = () => (
  <BrowserRouter>
    <Layout>
      <ConnectedPriceTileList />
      <Dashboard />
    </Layout>
  </BrowserRouter>
);

export default AppRouter;
