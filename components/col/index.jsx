import React from 'react';
import styles from './style.module.scss';

function Col({ children }) {
  return (
    <div className={styles.col}>
      {children}
    </div>
  );
}

export default Col;