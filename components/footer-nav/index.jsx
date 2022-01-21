import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import CamblyConstants from "../../src/constant/index";
import shortid from "shortid";

function footerNav() {
  return (
    <nav className={styles.navbar}>
      {CamblyConstants.FOOTER.map((item) => (
        <Link href={item.slug} key={shortid.generate()}>
          <a>{item.value}</a>
        </Link>
      ))}
    </nav>
  );
}

export default footerNav;
