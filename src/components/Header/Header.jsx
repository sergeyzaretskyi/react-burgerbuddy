import { Container } from '../UI/Container/Container';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.brand}>
            <Link to="/">🍔 BurgerBuddy</Link>
          </h1>

          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link to="/">Home</Link>
              </li>
              <li className={styles.navItem}>
                <a href="#Menu">Menu</a>
              </li>
              <li className={styles.navItem}>
                <Link to="/service">Service</Link>
              </li>
            </ul>
          </nav>

          <div className={styles.userSection}>
            <Link to="/cart">
              <button className={styles.cart}>
                <p className={styles.cartTotal}>$100.49</p>

                <p className={styles.cartItems}>
                  <img src="/img/icons/cart.svg" />{' '}
                  <span className={styles.cartCount}>3</span>
                </p>
              </button>
            </Link>

            <Link to="/user">
              <button className={styles.user}>
                <img src="/img/icons/user.svg" />
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </header>
  );
};
