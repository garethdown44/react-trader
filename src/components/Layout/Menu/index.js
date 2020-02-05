import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Menu = ({ name }) => (
  <div className={styles.main}>
    <Link className={styles.menuitem} to="/trade">Trade</Link>
    <Link className={styles.menuitem} to="/blotter">Blotter</Link>
  </div>
);

export default Menu;

Menu.propTypes = {
  name: PropTypes.string,
  theme: PropTypes.object
};
