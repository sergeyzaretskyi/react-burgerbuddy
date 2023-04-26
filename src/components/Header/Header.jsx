import { Container } from '../UI/Container/Container';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.brand}>
            <a href="#">🍔 BurgerBuddy</a>
          </p>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <a href="#">Home</a>
              </li>
              <li className={styles.navItem}>
                <a href="#Menu">Menu</a>
              </li>
              <li className={styles.navItem}>
                <a href="#Service">Service</a>
              </li>
            </ul>
          </nav>

          <div className={styles.userSection}>
            <button className={styles.cart}>
              <p className={styles.cartTotal}>$100.49</p>

              <p className={styles.cartItems}>
                <img src="/img/icons/cart.svg" />{' '}
                <span className={styles.cartCount}>3</span>
              </p>
            </button>

            <button className={styles.user}>
              <img src="/img/icons/user.svg" />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};
