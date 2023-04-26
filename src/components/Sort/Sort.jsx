import { useState } from 'react';
import styles from './Sort.module.scss';

export const Sort = () => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [currentSortOption, setCurrentSortOption] = useState(0);

  const sortOptions = ['Newest', 'Price', 'Popularity'];

  const handleSortOptionClick = (index) => {
    setCurrentSortOption(index);
    setIsSortOpen(false);
  };

  return (
    <div className={styles.sortBlock}>
      <button
        onClick={() => setIsSortOpen(!isSortOpen)}
        className={styles.sortButton}
      >
        <img src="/img/icons/sort.svg" alt="Sort button" /> <span>Sort</span>
      </button>

      {isSortOpen && (
        <ul className={styles.sortList}>
          {sortOptions.map((option, index) => {
            return (
              <li
                key={option}
                onClick={() => handleSortOptionClick(index)}
                className={styles.sortItem}
              >
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
