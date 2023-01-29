import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Home.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProjectHomePage from 'components/ProjectHomePage';
import { projects } from 'pages/projects';

const Home = (): JSX.Element => {
  const [displayMouse, setDisplayMouse] = useState(true);

  // Fonction pour enlever l'animation de la souris après un certain temps
  setTimeout(() => {
    setDisplayMouse(false);
  }, 3000 + 6000); // 3000 c'est le temps avant l'apparition, puis on ajoute le temps qu'il faut avant de le faire disparaître

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Margot Chalmeton | Portfolio</title>
        <meta
          name="description"
          content="Conception et fabrication d'accessoires, de décors et de textiles et matières destinés à la scénographie de spectacle, la muséographie, aux décors de cinéma ou d'évènements et de vitrines."
        />
      </Helmet>

      <Header url="." />
      <div className={styles.container}>
        <ProjectHomePage projects={projects} />

        <div className={`${styles.mouse__container} ${styles.animation__opacity}`}>
          <div className={`${styles.mouse} ${displayMouse ? '' : styles.hidden}`}></div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
