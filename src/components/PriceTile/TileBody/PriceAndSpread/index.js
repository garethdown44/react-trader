import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import PriceButton from './PriceButton';
import Spread from './Spread';
import styles from './styles.module.css';

const cx = classNames.bind(styles);

export default function PriceAndSpread({ price, isExecuting, execute, notionalCurrency, isStale }) {
  const containerStyle = cx({
    spreadContainer: true,
    containerUp: price.isIncrease,
    containerDown: !price.isIncrease
  });

  return (
    <div className={styles.main}>
      <PriceButton
        side="sell"
        price={price.bid}
        execute={() => execute('sell', price.bid)}
        isExecuting={isExecuting}
        notionalCurrency={notionalCurrency}
        isStale={isStale}
      />

      <PriceButton
        side="buy"
        price={price.ask}
        execute={() => execute('buy', price.ask)}
        isExecuting={isExecuting}
        notionalCurrency={notionalCurrency}
        isStale={isStale}
      />

      <div className={containerStyle}>
        <Spread
          spread={price.spread}
          isIncrease={price.isIncrease}
        />
      </div>
    </div>
  );
}

PriceAndSpread.propTypes = {
  price: PropTypes.object,
  execute: PropTypes.func,
  ccyCpl: PropTypes.string,
  isExecuting: PropTypes.bool,
  notionalCurrency: PropTypes.string,
  isStale: PropTypes.bool
};
