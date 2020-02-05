import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TileBody from './TileBody';
import NotConnected from './NotConnected';
import styles from './PriceTile.module.scss';

const cx = classnames.bind(styles);

const { func, string, number, bool, object } = PropTypes;

export default function PriceTile(props) {
  const Component = props.isDisconnected ? NotConnected : TileBody;

  return (
    <div className={styles.outer}>
      <div className={cx(styles.title, 'drag-handle')}>
        <div className={styles.ccyCpl}>{props.ccyCpl}</div>
        <div className={styles.close}>&#215;</div>
      </div>

      <Component {...props} />

    </div>
  );
}

PriceTile.propTypes = {
  tileId: number.isRequired,
  ccyCpl: string.isRequired,
  price: object.isRequired,
  bookSpotTrade: func.isRequired,
  changeNotional: func.isRequired,
  isExecuting: bool.isRequired,
  isInvalidNotional: bool,
  isDisconnected: bool,
  isStale: bool,
  notionalCurrency: string.isRequired,
  notional: string.isRequired
};