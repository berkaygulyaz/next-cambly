import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import CamblyConstants from '../../src/constant/index';

function Nav() {

  return (
    <nav className={styles.navbar}>
      {CamblyConstants.HEADER.map(item => (
        <Link href={item.slug}>
          <a>{item.value}</a>
        </Link>
        
      ))}
    </nav>
  );
}

export default Nav;
