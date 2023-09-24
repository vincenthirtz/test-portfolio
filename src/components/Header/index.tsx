import styles from './Header.module.sass';
import { NavLink } from 'react-router-dom';
import Menu from 'components/Menu';

type PropsType = {
  url: string;
};

const Header = (props: PropsType): JSX.Element => {
  const { url } = props;
  const redirection = window.location.origin;

  return (
    <header className={styles.container}>
      <div className={styles.logo__container}>
        {url !== '.' ? (
          <NavLink to="/" className={styles.logo}>
            Margot Chalmeton
          </NavLink>
        ) : (
          <NavLink to={redirection} className={styles.logo}>
            Margot Chalmeton
          </NavLink>
        )}
        <p className={styles.logo__url}>{url}</p>
      </div>
      <Menu />
    </header>
  );
};

export default Header;
