import { useState, useEffect } from 'react';
import styles from './Menu.module.sass';
import { NavLink } from 'react-router-dom';

const Menu = (): JSX.Element => {
  const [menuIsActive, setMenuIsActive] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(window.innerWidth);

  const toggleMenu = () => {
    setMenuIsActive(!menuIsActive);
  };

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <nav className={styles.container}>
      <div
        className={`${styles.menu__container} ${styles.desktop} ${!isMobile ? styles.active : ''}`}
      >
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? 'pending' : isActive ? 'active' : styles.menu__link
              }
              to="/accessoires&decors"
            >
              Accessoires & Decors
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={styles.menu__link}>
              mes services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.menu__link}>
              à propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.menu__link}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className={`${styles.menu__container} ${styles.mobile} ${
          isMobile && menuIsActive ? styles.active : ''
        }`}
      >
        <ul>
          <li>
            <NavLink to="/services" className={styles.menu__link}>
              mes services
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={styles.menu__link}>
              à propos
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={styles.menu__link}>
              contact
            </NavLink>
          </li>
        </ul>
      </div>

      {isMobile && (
        <div className={styles.icon__container} onClick={toggleMenu}>
          <div className={`${styles.icon} ${menuIsActive ? styles.active : ''}`}>
            <div className={styles.burger__crose}></div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Menu;
