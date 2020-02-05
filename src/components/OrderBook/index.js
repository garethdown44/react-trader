import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './styles.module.css';

const debug = require('debug')('sap:Dashboard');

function renderRows(rows) {
  return rows.map((row, index) => (
    <tr key={index}>
      <td><i className="glyphicon glyphicon-chevron-right" /></td>
      <td className={styles.good}>Operations</td>
      <td>Update Deal</td>
      <td>11/11/2015</td>
      <td>AALLETZ</td>
      <td>WUKCW-15Y7KQ4J</td>
      <td>1.23</td>
      <td className={styles.loss}>1.12/1.24/1.3/1.45</td>
    </tr>
  ));
}

const OrderBook = function OrderBook({ orders }) {
  debug('render()');

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>ID</th>
          <th>Symbol</th>
          <th>Side</th>
          <th>Quantity</th>
          <th>Limit</th>
          <th>Status</th>
          <th>Remaining</th>
          <th>Filled</th>
          <th>Avg Price</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td><i className="glyphicon glyphicon-chevron-right" /></td>
          <td>1</td>
          <td>AFV</td>
          <td className={styles.buy}>Buy</td>
          <td>100</td>
          <td>2344.07</td>
          <td>Error</td>
          <td>10</td>
          <td>0</td>
          <td>0.00</td>
        </tr>

        <tr>
          <td><i className="glyphicon glyphicon-chevron-right" /></td>
          <td>1</td>
          <td>AFV</td>
          <td className={styles.sell}>Sell</td>
          <td>100</td>
          <td>2344.07</td>
          <td>Pending</td>
          <td>10</td>
          <td>0</td>
          <td>0.00</td>
        </tr>

        <tr>
          <td><i className="glyphicon glyphicon-chevron-right" /></td>
          <td>1</td>
          <td>AFV</td>
          <td className={styles.sell}>Sell</td>
          <td>100</td>
          <td>2344.07</td>
          <td>Pending</td>
          <td>10</td>
          <td>0</td>
          <td>0.00</td>
        </tr>
        <tr>
          <td><i className="glyphicon glyphicon-chevron-right" /></td>
          <td>1</td>
          <td>AFV</td>
          <td className={styles.buy}>Buy</td>
          <td>100</td>
          <td>2344.07</td>
          <td>Error</td>
          <td>10</td>
          <td>0</td>
          <td>0.00</td>
        </tr>

        {renderRows(orders)}
      </tbody>
    </table>
  );
};

OrderBook.propTypes = {
  orders: PropTypes.array
};

const mapStateToProps = state => ({
  orders: state.orders.orders
});

const mapOwnProps = () => ({
});

export default connect(mapStateToProps, mapOwnProps)(OrderBook);