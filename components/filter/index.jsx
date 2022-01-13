import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import CamblyConstants from "../../src/constant/index";

function filter({ handleKeyUp, refProps }) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  let ref = useRef(null);

  const checkIfClickedOutside = () => {
    if (isMenuOpen !== null) setIsMenuOpen(null);
  };

  useEffect(() => {
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

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
            <button
              className={styles.dropdownBtn}
              onClick={() => setIsMenuOpen(item.id)}
            >
              {item.title}
            </button>
            {isMenuOpen === item.id && (
              <ul className={styles.dropdownList} ref={ref}>
                {item.value.map((val) => (
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
