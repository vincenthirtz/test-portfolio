import styles from './Footer.module.sass';
import { NavLink } from 'react-router-dom';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.container}>
      <div className={styles.contact__logo}>
        <a href="https://www.linkedin.com/in/margotchalmetonworkshop/" target="_blank">
          <img src="images/reseaux/linkedin2.png" width="25" />
        </a>
        <a href="https://www.instagram.com/margotchalmeton/" target="_blank">
          <img src="images/reseaux/instagram.png" width="25" />
        </a>
        <NavLink to="/contact">
          <img src="images/reseaux/email.png" width="25" />
        </NavLink>
      </div>
    </footer>
  );
};

export default Footer;
