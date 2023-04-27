import { Container } from '../UI/Container/Container';
import { Heading } from '../UI/Heading/Heading';
import { CategoriesSkeleton } from '../UI/Skeletons/CategoriesSkeleton';
import styles from './Categories.module.css';

export const Categories = ({
  activeCategory,
  setActiveCategory,
  menuCategories,
  isDataLoading,
}) => {
  return (
    <section className={styles.categories}>
      <Container>
        <Heading tag="h1" text="Our Menu" />

        <ul className={styles.menuCategoriesList}>
          {isDataLoading ? (
            <CategoriesSkeleton />
          ) : (
            menuCategories.map((category, index) => {
              const isActive = index === activeCategory;

              return (
                <li
                  key={category}
                  className={`${styles.menuCategoriesItem} ${
                    isActive ? styles.active : ''
                  }`}
                  onClick={() => setActiveCategory(index)}
                >
                  <img
                    src={`/img/icons/${category.toLowerCase()}.svg`}
                    alt={`${category} burgers`}
                  />
                  <p>{category}</p>
                </li>
              );
            })
          )}
        </ul>
      </Container>
    </section>
  );
};
