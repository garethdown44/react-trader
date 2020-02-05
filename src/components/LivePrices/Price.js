import React from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import moment from 'moment';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import getStreamingPrices from '../../services/getStreamingPrices';

const cx = classNames.bind(styles);

export default class Price extends React.Component {

  constructor(props) {
    super(props);
    this.state = { price: props.seed, initialPrice: props.seed, high: props.seed, low: props.seed, change: 0 };
  }

  componentDidMount() {
    const stream = getStreamingPrices(this.props.product, this.props.seed);

    this.subscription = stream.subscribe(price => {
      const val = price.ask;

      let high = this.state.high;
      let low = this.state.low;
      if (val >= high) {
        high = val;
      }

      if (val <= low) {
        low = val;
      }

      const change = val - Number(this.state.initialPrice);

      const time = new Date();
      const isIncrease = val > this.state.price;
      const isChangePositive = change >= 0;

      // this weird looking code is to re-trigger the CSS animation
      //
      // if the class has been applied and the animation has run, if you apply
      // the same class again, then nothing happens
      // so this code applies a different class (which happens to be identical)
      // to force it to re-run
      let increaseClass;
      let decreaseClass;
      if (isIncrease) {
        increaseClass = this.state.increaseClass === 'increase'
                      ? 'increase2'
                      : 'increase';
      } else {
        decreaseClass = this.state.decreaseClass === 'decrease'
                      ? 'decrease2'
                      : 'decrease';
      }

      this.setState({ price: val, isIncrease, high, low, change, time, isChangePositive, increaseClass, decreaseClass });
    });
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.dispose();
    }
  }

  render() {
    return (
      <tr>
        <td className={styles.product}>{this.props.product}</td>
        <td className={cx({ [this.state.increaseClass]: this.state.isIncrease, [this.state.decreaseClass]: !this.state.isIncrease })}>{numeral(this.state.price).format('0.00000')}</td>
        <td>
          {numeral(this.state.high).format('0.00000')}
        </td>
        <td>
          {numeral(this.state.low).format('0.00000')}
        </td>
        <td className={cx({ changePositive: this.state.isChangePositive, changeNegative: !this.state.isChangePositive })}>
          {numeral(this.state.change).format('0.00000')}
        </td>
        <td>
          {moment(this.state.time).format('HH:mm:ss')}
        </td>
      </tr>
    );
  }
}

Price.propTypes = {
  seed: PropTypes.number,
  product: PropTypes.string
};