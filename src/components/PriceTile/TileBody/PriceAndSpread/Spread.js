import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import styles from './spread.module.css';

const cx = classnames.bind(styles);

export default function Spread({ spread, isIncrease }) {
  const arrowStyle = cx({
    spreadUp: isIncrease,
    spreadDown: !isIncrease
  });

  return (
    <div>
      <div className={arrowStyle} />
      <div className={styles.value}>{spread}</div>
    </div>
  );
}

Spread.propTypes = {
  isIncrease: PropTypes.bool,
  spread: PropTypes.string
};
