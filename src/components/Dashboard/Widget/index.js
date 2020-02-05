import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

export default function Widget({ title, children }) {
  return (
    <div className={styles.outer}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{children}</div>
    </div>
  );
}

Widget.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element
};