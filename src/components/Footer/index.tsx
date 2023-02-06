import styles from './Footer.module.sass';
import ArrowMenu from 'icons/ArrowMenu';
import { NavLink } from 'react-router-dom';

type PropsType = {
  allProjectsDisplay?: boolean;
  allProjectsAreShow?: boolean;
};

const Footer = (props: PropsType): JSX.Element => {
  const { allProjectsDisplay = true, allProjectsAreShow = false } = props;
  let allProjectsText;
  let allProjectsLink;
  if (allProjectsAreShow) {
    allProjectsText = 'Fermer';
    allProjectsLink = '/';
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    allProjectsText = 'mes-projets';
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    allProjectsLink = 'all-projects';
  }

  return (
    <footer className={styles.container}>
      {/* On affiche le lien si que si la page doit avoir le lien */}
      {allProjectsDisplay && (
        <NavLink to={allProjectsLink} className={styles.all_projects__link}>
          <ArrowMenu />
          {allProjectsText}
        </NavLink>
      )}
      {!allProjectsDisplay && <div></div>}
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
