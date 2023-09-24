import { useState } from 'react';
import styles from './ProjectHomePage.module.sass';
import { NavLink } from 'react-router-dom';

type PropsType = {
  projects: ProjectType[];
  home: boolean;
};

const ProjectHomePage = (props: PropsType): JSX.Element => {
  const { projects, home } = props;
  const [portfolioActivate] = useState<boolean>(home);

  return (
    <div className={`${styles.container} ${portfolioActivate ? styles.containerbis : ''}`}>
      {portfolioActivate && (
        <div className={styles.block}>
          <p>Créative transdisciplinaire</p>
          <div className={styles.containerH2}>
            <h2>
              Fabrication <span>d’accessoires et décors</span>
            </h2>
            <h2>
              Design <br /> <span>Textile & matières</span>
            </h2>
          </div>
          <div className={styles.line}></div>
          <div className={styles.containerButton}>
            <a className={styles.superbutton} href="/accessoires&decors">
              Voir le portfolio
            </a>
          </div>
        </div>
      )}
      {!portfolioActivate &&
        projects.map((project, index) => {
          return (
            <div key={index} className={`${styles.container__project__item} ${styles.active}`}>
              <div className={styles.project__item}>
                <div className={styles.project__title}>
                  <NavLink to={project.link} className={styles.project__link}>
                    <h2 className={styles.animation__background}>{project.name}</h2>
                  </NavLink>
                  <div className={styles.index__project}>
                    <span>
                      <div className={styles.animation__width}></div>
                    </span>
                    <p className={styles.animation__transform_top_small}>{'0' + (index + 1)}</p>
                  </div>
                </div>
                <div className={styles.item__container}>
                  <div className={styles.left__container}>
                    <div className={styles.services__container}>
                      <p
                        className={`${styles.project__services} ${styles.animation__transform_top_small}`}
                      >
                        {project.services} par {project.featuring}
                      </p>
                      <p
                        className={`${styles.project__services} ${styles.animation__transform_top_small}`}
                      >
                        {project.featuring2}
                      </p>
                      <p
                        className={`${styles.project__services} ${styles.animation__transform_top_small}`}
                      >
                        {project.featuring3}
                      </p>
                      <p
                        className={`${styles.project__year} ${styles.animation__transform_top_small}`}
                      >
                        {project.year}
                      </p>
                    </div>
                    <span className={styles.container__image}>
                      <NavLink to={project.link}>
                        <img
                          loading="lazy"
                          className={styles.animation__width}
                          src={project.image}
                          alt={project.alt}
                        />
                      </NavLink>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default ProjectHomePage;
