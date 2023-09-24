import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Error404.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';

const Error404 = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Margot Chalmeton | Erreur 404</title>
        <meta name="description" content="Page d'erreur 404." />
      </Helmet>

      <Header url="/404" />
      <div className={styles.container}>
        <h1>Erreur 404</h1>
      </div>
      <Footer />
    </Layout>
  );
};

export default Error404;
