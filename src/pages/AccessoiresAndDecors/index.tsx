import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './AccessoiresAndDecors.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import ProjectHomePage from 'components/ProjectHomePage';
import { projects } from 'pages/projects';

const AccessoiresAndDecors = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Margot Chalmeton | Portfolio Accessoires & Décors</title>
        <meta
          name="description"
          content="Conception et fabrication d'accessoires, de décors et de textiles et matières destinés à la scénographie de spectacle, la muséographie, aux décors de cinéma ou d'évènements et de vitrines."
        />
      </Helmet>

      <Header url="/accessoires&decors" />
      <div className={styles.container}>
        <ProjectHomePage projects={projects} home={false} />
      </div>
      <Footer />
    </Layout>
  );
};

export default AccessoiresAndDecors;
