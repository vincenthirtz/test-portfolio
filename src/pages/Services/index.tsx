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
          content="
          Je suis diplômée d’un BTS Design de mode, textile et environnement spécialité
          matériaux et surface et d’un CAP d’accessoiriste réalisateur. Intermittente du
          spectacle et auto-entrepreneuse, je travaille depuis 2018 pour la conception et la
          fabrication de décors et accessoires dédiés aux arts de la rue, au théâtre, cinéma,
          vitrines, muséographie et évènementiel. Je participe également aux montages,
          démontages, à l’exploitation de sites et à la régie plateau de spectacles.
          J’exerce mon travail au sein de compagnies, telles que la compagnie de scénographie
          Les Plastiqueurs à Rouen, de théâtres nationaux, notamment pour le Théâtre de
          l’Odéon ou encore aux cotés d’artistes comme Aude Bourgine ou de sociétés de
          production de films. Je réalise des projets de décors seule, pour des particuliers
          et entreprises mais aussi en collaboration avec des artistes, constructeurs et
          techniciens."
        />
      </Helmet>

      <Header url="/services" />
      <div className={styles.container}>
        <div className={styles.text}>
          <p className={styles.animation__transform_top}>
            Je suis diplômée d’un{' '}
            <span>
              BTS Design de mode, textile et environnement spécialité matériaux et surface
            </span>{' '}
            et d’un <span>CAP d’accessoiriste réalisateur</span>. Intermittente du spectacle et
            auto-entrepreneuse, je travaille depuis 2018 pour la conception et la fabrication de
            décors et accessoires dédiés aux arts de la rue, au théâtre, cinéma, vitrines,
            muséographie et évènementiel. Je participe également aux montages, démontages, à
            l’exploitation de sites et à la régie plateau de spectacles.
          </p>
          <br />
          <p className={styles.animation__transform_top}>
            J’exerce mon travail au sein de compagnies, telles que la compagnie de scénographie{' '}
            <span>Les Plastiqueurs</span> à Rouen, de théâtres nationaux, notamment pour le{' '}
            <span>Théâtre de l’Odéon</span> ou encore aux cotés d’artistes comme{' '}
            <span>Aude Bourgine</span> ou de sociétés de production de films. Je réalise des projets
            de décors seule, pour des particuliers et entreprises mais aussi en collaboration avec
            des artistes, constructeurs et techniciens.
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
