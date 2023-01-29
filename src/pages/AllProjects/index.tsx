import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './AllProjects.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AllProjectsFilter from 'components/AllProjectsFilter';
import { projects } from 'pages/projects';

const AllProjects = (): JSX.Element => {
  // On initialise le filtre en affichant tous les projets
  const [filter, setFilter] = useState<string>('all-projects');

  // Fonction pour changer le filtre quand on clique sur un bouton
  const handleClick = (filterParam: string) => {
    setFilter(filterParam);
  };

  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Margot Chalmeton | Mes projets</title>
        <meta
          name="description"
          content="Retrouvez sur cette page différents projets de Margot Chalmeton."
        />
      </Helmet>

      <Header url="/mes-projets" />
      <div className={styles.container}>
        <div className={styles.container__filter}>
          <ul>
            {/* On met la classe active que si c'est le filtre actuel */}
            <li
              className={`${filter == 'all-projects' ? styles.active : ''}`}
              onClick={() => handleClick('all-projects')}
            >
              Tous les projets
            </li>
            <li
              className={`${filter == 'accessoires&decors' ? styles.active : ''}`}
              onClick={() => handleClick('accessoires&decors')}
            >
              Accessoires et Décors
            </li>
          </ul>
        </div>
        <AllProjectsFilter filter={filter} projects={projects} />
      </div>
      <Footer allProjectsAreShow={true} />
    </Layout>
  );
};

export default AllProjects;
