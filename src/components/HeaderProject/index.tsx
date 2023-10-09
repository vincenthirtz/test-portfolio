import styles from './HeaderProject.module.sass';
import ArrowProjectLink from 'icons/ArrowProjectLink';

type PropsType = {
  title: string;
  index: number;
  titleLink: string;
  link: string;
  year: number;
  services: string[];
  elements: React.ReactElement[];
};

const HeaderProject = (props: PropsType): JSX.Element => {
  // Props pour changer le header des projets en fonction de la page
  const { title, titleLink, link, year, services, elements } = props;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1 className={styles.animation__background}>{title}</h1>
      </div>
      <div className={styles.about}>
        {titleLink !== '' && (
          <a
            href={link}
            target="_blank"
            className={`${styles.link} ${styles.animation__background}`}
          >
            {titleLink} <ArrowProjectLink />
          </a>
        )}
        <div className={styles.container__services}>
          <ul>
            {services.map((service, i) => {
              return (
                <li className={styles.animation__background} key={i}>
                  {service}
                </li>
              );
            })}
            {elements.map((element, i) => {
              return (
                <li className={styles.animation__background} key={i}>
                  {element}
                </li>
              );
            })}
          </ul>
          <p className={`${styles.year} ${styles.animation__background}`}>{year}</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderProject;
