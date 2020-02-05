import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import classnames from 'classnames/bind';
import PriceAndSpread from './PriceAndSpread';
import styles from './TileBody.module.scss';

const { func, string, number, bool, object } = PropTypes;
const cx = classnames.bind(styles);

export default function TileBody({ tileId,
                                   ccyCpl,
                                   price,
                                   notional,
                                   changeNotional,
                                   notionalCurrency,
                                   isExecuting,
                                   isInvalidNotional,
                                   isStale,
                                   bookSpotTrade }) {
  return (
    <div className={styles.body}>
      <div className={styles.notionalContainer}>
        <input
          type="text"
          value={notional}
          onChange={e => changeNotional(tileId, e.target.value)}
          className={cx({ textbox: true, invalid: isInvalidNotional })}
        />

        <div className={styles.notionalCurrency}>
          <button
            className={styles.button}
          >{notionalCurrency}<span className="glyphicon glyphicon-transfer" /></button>
        </div>
      </div>

      <div className={styles.dateContainer}>
        <div
          className={styles.textbox}
        >{moment().format('DD/MM/YYYY')} <span className={styles.type}>(SPOT)</span></div>

        <div className={styles.calendarIcon} />
      </div>

      <PriceAndSpread
        price={price}
        ccyCpl={ccyCpl}
        execute={(side, requestedRate) => bookSpotTrade(tileId, side, ccyCpl, requestedRate, notional)}
        isExecuting={isExecuting}
        isStale={isStale}
        notionalCurrency={notionalCurrency}
        changeNotional={changeNotional}
      />
    </div>
  );
}

TileBody.propTypes = {
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
