import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './AllProjects.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import AllProjectsFilter from 'components/AllProjectsFilter';
import { projects } from 'pages/projects';

const AllProjects = (): JSX.Element => {
  const [filter, setFilter] = useState<string>('all-projects');

  const handleClick = (filterParam: string) => {
    setFilter(filterParam);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
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
      <Footer />
    </Layout>
  );
};

export default AllProjects;
