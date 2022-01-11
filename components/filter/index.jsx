import React, { useState } from "react";
import styles from "./style.module.scss";
import CamblyConstants from "../../src/constant/index";

function filter({ handleKeyUp }) {
  const [show, setShow] = useState(false);

  function handleButtonClick() {
    setShow(!show);
  }

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterTop}>
        <div className={styles.tutorsTab}>
          <p>Find a Tutor</p>
          <div className={styles.searchTutorTab}>
            <button>All</button>
            <button>Favorites</button>
          </div>
        </div>
        <input
          type="text"
          placeholder="Search Here..."
          className={styles.search}
          onKeyUp={(event) => handleKeyUp(event.target.value)}
        />
      </div>
      <div className={styles.filterBottom}>
        {CamblyConstants.FILTER.map((item) => (
          <div className={styles.filterItem}>
            <button className={styles.dropdownBtn} onClick={handleButtonClick}>
              {item.title}
            </button>
            {show && (
              <ul className={styles.dropdownList}>
                {item.value.map(val => (
                  <li className={styles.listItem}>
                    <input type="checkbox" />
                    <span>{val}</span>
                  </li>

                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default filter;
