import { ReactChild } from 'react';
import styles from './Layout.module.sass';
import { Analytics } from '@vercel/analytics/react';

type PropsType = {
  children: ReactChild | ReactChild[];
};

const Layout = (props: PropsType): JSX.Element => {
  // Props pour afficher les pages
  const { children } = props;

  return (
    <div className={styles.container}>
      {children} <Analytics />
    </div>
  );
};

export default Layout;
