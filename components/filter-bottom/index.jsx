import React, { useState, useEffect, useRef } from "react";
import styles from "./style.module.scss";

function filterBottom({ items, handleFilter }) {
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

  return (
    <div className={styles.filterWrapper}>
      <div className={styles.filterBottom}>
        {items.map((item) => (
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
                    <input
                      type="checkbox"
                      onClick={() => {
                        setItem(val);
                        handleFilter(val);
                      }}
                    />
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

export default filterBottom;
