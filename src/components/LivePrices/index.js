import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import Price from './Price';

const debug = require('debug')('comm:LivePrices');

function renderRows(rows) {
  return rows.map((row, index) => (
    <Price key={index} product={row.name} seed={row.seed} />
  ));
}

const defaults = [
  { name: 'Gold', seed: 1327.15 },
  { name: 'XAU/USD', seed: 1323.62 },
  { name: 'Silver', seed: 19.443 },
  { name: 'Copper', seed: 2.081 },
  { name: 'Platinum', seed: 1066 },
  { name: 'Zinc', seed: 2365.25 },
  { name: 'Lead', seed: 1944 },
  { name: 'Nickel', seed: 10030 },
  { name: 'Tin', seed: 19277.50 },
  { name: 'Aluminium', seed: 1593.50 },
  { name: 'Palladium', seed: 676.77 },
  { name: 'Crude Oil', seed: 44.19 },
  { name: 'Brent Oil', seed: 46.62 },
  { name: 'Natural Gas', seed: 2.757 },
  { name: 'Heating Oil', seed: 1.4032 }
];

const LivePrices = function LivePrices({ products }) {
  debug('render()');

  const toDisplay = products || defaults;

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Product</th>
          <th>Last</th>
          <th>High</th>
          <th>Low</th>
          <th>Chg</th>
          <th>Time</th>
        </tr>
      </thead>

      <tbody>
        {renderRows(toDisplay)}
      </tbody>
    </table>
  );
};

LivePrices.propTypes = {
  positions: PropTypes.array,
  products: PropTypes.array
};

export default LivePrices;