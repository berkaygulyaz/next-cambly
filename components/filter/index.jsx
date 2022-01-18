import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";
import CamblyConstants from "../../src/constant/index";
import shortid from "shortid";

function filter({ handleKeyUp, handleAccentFilter }) {
  const [isMenuOpen, setIsMenuOpen] = useState(null);
  const [isSelectItem, setIsSelectItem] = useState([]);
  let ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsMenuOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const setItem = (val) => {
    if (isSelectItem.indexOf(val) >= 0) {
      setIsSelectItem(isSelectItem.filter((x) => x !== val));
    } else {
      setIsSelectItem((arr) => [...arr, val]);
    }
  };

  useEffect(() => {

  })

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
                  <li
                    className={styles.listItem}
                    onClick={() => handleAccentFilter(val)}
                  >
                    <input type="checkbox" onMouseUp={() => setItem(val)} />
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
