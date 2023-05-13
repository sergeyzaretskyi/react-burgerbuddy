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
    <div className={styles.sort}>
      <button
        onClick={() => setIsSortOpen(!isSortOpen)}
        className={styles.button}
      >
        <img src="/img/icons/sort.svg" alt="Sort button" /> <span>Sort</span>
      </button>

      {isSortOpen && (
        <ul className={styles.list}>
          {sortOptions.map((option, index) => {
            return (
              <li
                key={option}
                onClick={() => handleSortOptionClick(index)}
                className={styles.item}
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
