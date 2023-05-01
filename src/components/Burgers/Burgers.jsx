import { Card } from '../Card/Card';
import { Sort } from '../Sort/Sort';
import { Container } from '../UI/Container/Container';
import { Heading } from '../UI/Heading/Heading';
import { Section } from '../UI/Section/Section';
import { GridSkeleton } from '../UI/Skeletons/GridSkeleton';
import { HeadingSkeleton } from '../UI/Skeletons/HeadingSkeleton';
import { Wrapper } from '../UI/Wrapper/Wrapper';
import styles from './Burgers.module.scss';

export const BurgersSection = ({
  activeCategory,
  menuCategories,
  menuObject,
  isDataLoading,
}) => {
  const renderBurgerCard = (burger) => {
    return <Card key={burger['name']} {...burger} />;
  };

  const renderBurgers = () => {
    if (activeCategory === 0) {
      const burgers = [];
      const objects = menuObject['menu'];

      for (const obj in objects) {
        burgers.push(...objects[obj]);
      }

      return burgers.map((burger) => renderBurgerCard(burger));
    }

    const burgers = menuObject['menu'][menuCategories[activeCategory]];

    return burgers.map((burger) => renderBurgerCard(burger));
  };

  return (
    <Section>
      <Container>
        <Wrapper>
          <div className={styles.burgersTop}>
            {isDataLoading ? (
              <HeadingSkeleton />
            ) : (
              <Heading
                tag="h2"
                text={`${menuCategories[activeCategory]} Burgers`}
              />
            )}

            <Sort />
          </div>

          <div className={styles.burgersGrid}>
            {isDataLoading
              ? [...new Array(6)].map((_, index) => (
                  <GridSkeleton key={index} />
                ))
              : renderBurgers()}
          </div>
        </Wrapper>
      </Container>
    </Section>
  );
};
