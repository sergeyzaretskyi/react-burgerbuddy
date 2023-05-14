import { Container } from '../../components/UI/Container/Container';
import { Heading } from '../../components/UI/Heading/Heading';
import { Section } from '../../components/UI/Section/Section';
import { Wrapper } from '../../components/UI/Wrapper/Wrapper';
import styles from './Cart.module.scss';

export const Cart = () => {
  return (
    <main>
      <Section>
        <Container>
          <Wrapper>
            <div className={styles.top}>
              <Heading tag="h2" text="Cart" />

              <button className={styles.empty}>
                <img
                  src="/img/icons/remove.svg"
                  alt="Remove all items from cart"
                />{' '}
                Empty cart
              </button>
            </div>

            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.description}>
                  <img
                    className={styles.image}
                    src="/img/burgers/classic-hamburger.jpg"
                    alt=""
                  />

                  <p className={styles.text}>
                    <span className={styles.title}>Product title</span>
                    <span className={styles.option}>Bunless</span>
                  </p>
                </div>

                <div className={styles.counter}>
                  <button className={styles.minus}>-</button>
                  <span className={styles.value}>1</span>
                  <button className={styles.plus}>+</button>
                </div>

                <p className={styles.total}>$199.99</p>

                <button className={styles.remove}>
                  <img
                    src="/img/icons/remove.svg"
                    alt="Remove item from cart"
                  />
                </button>
              </li>
            </ul>

            <div className={styles.bottom}>
              <div className={styles.info}>
                <p className={styles.count}>
                  Total burgers: <span className={styles.bold}>2</span>
                </p>
                <p className={styles.total}>
                  Total price: <span className={styles.bold}>$299.99</span>
                </p>
              </div>

              <div className={styles.buttons}>
                <button className={styles.back}>Go back</button>
                <button className={styles.order}>Place order</button>
              </div>
            </div>
          </Wrapper>
        </Container>
      </Section>
    </main>
  );
};
