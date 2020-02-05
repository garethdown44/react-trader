import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './priceButton.module.scss';

const cx = classnames.bind(styles);

function padR(value, length) {
  return (value.toString().length < length) ? padR(`${value}0`, length) : value;
}

export default class PriceButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.extractPrice(props.price);
  }

  componentWillReceiveProps(newProps) {
    this.setState(this.extractPrice(newProps.price));
  }

  extractPrice(price) {
    let priceStr = price.toString();
    priceStr = padR(priceStr, 7);

    const first = priceStr.substr(0, 4);
    const bigFigures = priceStr.substr(4, 2);
    const tenthOfPips = priceStr.substr(6) || 0;

    return {
      first,
      bigFigures,
      tenthOfPips
    };
  }

  render() {
    const { side, notionalCurrency, isExecuting, isStale, execute } = this.props;
    const classes = cx({ outer: true, [side]: true, disabled: isExecuting });

    return (
      <div className={classes}>
        <span className={styles.intention}>{side} {notionalCurrency}</span>
        <div className={cx({ main: true, stale: isStale })} onClick={() => execute()}>
          <div className={styles.first}>{this.state.first}</div>
          <div className={styles.bigFigures}>{this.state.bigFigures}</div>
          <div className={styles.tenthOfPipsContainer}>
            <div className={cx({ tenthOfPips: true, stale: isStale })}>{this.state.tenthOfPips}</div>
            <div className={styles.type}>SPOT</div>
          </div>
        </div>
      </div>
    );
  }
}

PriceButton.propTypes = {
  isExecuting: PropTypes.bool,
  execute: PropTypes.func,
  side: PropTypes.string,
  price: PropTypes.number,
  notionalCurrency: PropTypes.string,
  isStale: PropTypes.bool
};