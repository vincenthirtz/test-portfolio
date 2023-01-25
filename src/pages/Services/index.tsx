import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Services.module.sass';
import Header from 'components/Header';
import LinkNextProject from 'components/LinkNextProject';

const Services = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Margot Chalmeton | Mes services</title>
        <meta
          name="description"
          content="Production de beaux films et de beaux visuels, qui racontent avec élégance les histoires des marques et artistes. Design graphique, tournage, production 3D, shooting photo, motion design, VFX, Piboyeux prend tout en charge, de la conception à la production."
        />
      </Helmet>

      <Header url="/services" />
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.animation__transform_top}>
            Production de beaux films et de beaux visuels, qui racontent avec élégance les histoires
            des marques et artistes. <span>Design graphique</span>, <span>tournage</span>,{' '}
            <span>production 3D</span>, <span>shooting photo</span>, <span>motion design</span>,{' '}
            <span>VFX</span>, Piboyeux prend tout en charge, de la conception à la production.
          </p>
        </div>
        <div className={`${styles.link__contact} ${styles.animation__background}`}>
          <LinkNextProject text="Contact" link="/contact" />
        </div>
      </div>
    </Layout>
  );
};

export default Services;
