import React from 'react';
import styles from './styles.module.css';

export default function NotConnected() {
  return (
    <div className={styles.main}>
      <div className={styles.loading}>
        <div className={styles.heading}>Attempting to reconnect</div>
        <div className={styles.spinner}>
          <div className={styles.rect1} />
          <div className={styles.rect2} />
          <div className={styles.rect3} />
          <div className={styles.rect4} />
        </div>
      </div>
    </div>
  );
}