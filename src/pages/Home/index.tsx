import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Home.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProjectHomePage from 'components/ProjectHomePage';

const Home = (): JSX.Element => {
  const [displayMouse, setDisplayMouse] = useState(true);

  // Fonction pour enlever l'animation de la souris après un certain temps
  setTimeout(() => {
    setDisplayMouse(false);
  }, 3000 + 6000); // 3000 c'est le temps avant l'apparition, puis on ajoute le temps qu'il faut avant de le faire disparaître

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Margot Chalmeton | Portfolio</title>
        <meta
          name="description"
          content="Conception et fabrication d'accessoires, de décors et de textiles et matières destinés à la scénographie de spectacle, la muséographie, aux décors de cinéma ou d'évènements et de vitrines."
        />
      </Helmet>

      <Header url="." />
      <div className={styles.container}>
        <ProjectHomePage
          projects={[
            {
              name: '',
              year: 2019,
              featuring: 'Aude Bourgine',
              featuring2: '',
              featuring3: '',
              services: `Projet vitrines Coral Eternal`,
              link: 'aude-bourgine',
              image: 'images/ACCESSOIRES ET DECORS/AUDE BOURGINE 2019/hermes-rouge.webp',
              alt: 'Aide à la fabrication de l’oeuvre « Coral Eternal » de l’artiste Aude Bourgine',
            },
            {
              name: '',
              year: 2020,
              featuring: 'Frank Oettgen',
              featuring2: 'Laura Reboul',
              featuring3: 'La compagnie Les Grandes Personnes',
              services: `Projet Cafete`,
              link: 'cafete',
              image: 'images/ACCESSOIRES ET DECORS/CAFETE/cafete-two.webp',
              alt: 'Construction à la Villa Mais D’Ici, Aubervillers',
            },
          ]}
        />

        <div className={`${styles.mouse__container} ${styles.animation__opacity}`}>
          <div className={`${styles.mouse} ${displayMouse ? '' : styles.hidden}`}></div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
