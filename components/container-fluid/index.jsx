import React from 'react';
import styles from './style.module.scss'

function ContainerFluid({ children }) {
    return (
      <div className={styles.containerFluid}>
        {children}
      </div>
    );
  }
  
  export default ContainerFluid;