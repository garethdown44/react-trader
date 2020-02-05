import React from 'react';
import PropTypes from 'prop-types';
import styles from './logo.module.scss';
import logo from '../../../logo.png';

const Logo = () => (
  <div>
    <img src={logo} className={styles.logo} />
  </div>
);

export default Logo;

Logo.propTypes = {
  theme: PropTypes.object
};