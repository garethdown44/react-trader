import React from 'react';
import GridLayout from '../GridLayout';
// import OrderBook from '../../OrderBook';
import ConnectedBlotter from '../../ConnectedBlotter';
import LivePrices from '../../LivePrices';
import Widget from '../Widget';

const defaults = {
  minH: 5,
  maxH: 10,
  h: 6
};

const preciousMetals = [
  { name: 'Gold', seed: 1327.15 },
  { name: 'Silver', seed: 19.443 },
  { name: 'Platinum', seed: 1066 }
];

const currencies = [
  { name: 'EURUSD', seed: 1.11 },
  { name: 'EURGBP', seed: 0.90 },
  { name: 'GBPUSD', seed: 1.23 }
];

const gridProps = {
  layouts: {
    lg: [
      // { ...defaults, i: 'A', cmp: <Widget title="Order Book"><OrderBook /></Widget>, x: 0, y: 0, w: 4, h: 7 },
      { ...defaults, i: 'A', cmp: <Widget title="Blotter"><ConnectedBlotter /></Widget>, x: 0, y: 0, w: 4, h: 7 },
      { ...defaults, i: 'LP', cmp: <Widget title="Precious Metals"><LivePrices products={preciousMetals} /></Widget>, x: 0, y: 1, w: 2, h: 6 },
      { ...defaults, i: 'VL', cmp: <Widget title="Currencies"><LivePrices products={currencies} /></Widget>, x: 3, y: 1, w: 2, h: 6 }
    ]
  },
  breakpoints: {
    lg: 920,
    xxs: 720
  },
  rowHeight: 30,
  cols: {
    lg: 4,
    xxs: 1
  }
};

const Dashboard = () => (
  <div>
    <GridLayout {...gridProps} />
  </div>
);

export default Dashboard;
