import React from 'react';
import styles from './style.module.scss';
function Row({ children }) {
  return (
    <div className={styles.row}>
      {children}
    </div>
  );
}

export default Row;