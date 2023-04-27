import { useState } from 'react';
import { Heading } from '../UI/Heading/Heading';
import styles from './Card.module.scss';

export const Card = ({ name, title, bunOptions, label, price }) => {
  const [activeBunType, setActiveBunType] = useState(0);

  return (
    <>
      <div className={styles.card}>
        <img
          src={`/img/burgers/${name}.jpg`}
          alt={title}
          title={title}
          width="340"
          height="220"
        />

        {label && <span className={styles.label}>{label.toUpperCase()}</span>}

        <div className={styles.cardContent}>
          <Heading tag="h3" text={title} />

          <p className={styles.bunType}>
            {bunOptions.map((option, index) => {
              const isActive = index === activeBunType;

              return (
                <span
                  key={`${name}-${option}`}
                  onClick={() => setActiveBunType(index)}
                  className={`${isActive ? styles.active : ''}`}
                >
                  {option}
                </span>
              );
            })}
          </p>

          <div className={styles.cardBottom}>
            <p className={styles.price}>${price}</p>

            <button className={styles.cartButton}>
              Add to cart <span className={styles.addedCount}>3</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};