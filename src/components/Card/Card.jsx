import { useState } from 'react';
import { Heading } from '../UI/Heading/Heading';
import styles from './Card.module.scss';

export const Card = ({ slug, title, imageUrl, bunOptions, label, price }) => {
  const [activeBunType, setActiveBunType] = useState(0);

  return (
    <div className={styles.card}>
      <img
        src={`${imageUrl}`}
        alt={title}
        title={title}
        width="340"
        height="220"
      />

      {label && <span className={styles.label}>{label.toUpperCase()}</span>}

      <div className={styles.content}>
        <Heading tag="h3" text={title} />

        <p className={styles.option}>
          {bunOptions.map((option, index) => {
            const isActive = index === activeBunType;

            return (
              <span
                key={`${slug + index}`}
                onClick={() => setActiveBunType(index)}
                className={`${isActive ? styles.active : ''}`}
              >
                {option}
              </span>
            );
          })}
        </p>

        <div className={styles.bottom}>
          <p className={styles.price}>${price}</p>

          <button className={styles.button}>
            Add to cart <span className={styles.count}>3</span>
          </button>
        </div>
      </div>
    </div>
  );
};
