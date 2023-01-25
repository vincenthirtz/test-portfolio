import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Instagram from 'icons/Instagram';
import Layout from 'components/Layout';
import styles from './About.module.sass';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { NavLink } from 'react-router-dom';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const About = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // On utilise le parallax provider autour de toute ma page
    <ParallaxProvider>
      <Layout>
        {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
        <Helmet>
          <title>Margot Chalmeton | À propos</title>
          <meta
            name="description"
            content="Conception et fabrication d'accessoires, de décors et de textiles et matières destinés à la scénographie de spectacle, la muséographie, aux décors de cinéma ou d'évènements et de vitrines."
          />
        </Helmet>

        <Header url="/à-propos" />
        <div className={styles.container}>
          {/* On utilise le parallax sur notre container avec des valeurs un peu aléatoire mais qui fait que ça marche */}
          <Parallax className={styles.citation__container} translateX={['380px', '-250px']}>
            <div className={`${styles.citation} ${styles.animation__background}`}>
              {/* <h1>L’art est dans l’infini detail.</h1> */}
              {/* <h2>Federico Fellini</h2> */}
            </div>
          </Parallax>
          {/* On utilise le parallax sur notre container avec des valeurs un peu aléatoire mais qui fait que ça marche */}
          <Parallax className={styles.text} translateY={['-250px', '450px']}>
            <div className={`${styles.item} ${styles.animation__transform_top}`}>
              <h4>1. Margot Chalmeton</h4>
              <p>
                Je suis diplômée d’un BTS Design de mode, textile et environnement spécialité
                matériaux et surface et d’un CAP d’accessoiriste réalisateur. Intermittente du
                spectacle et auto-entrepreneuse, je travaille depuis 2018 pour la conception et la
                fabrication de décors et accessoires dédiés aux arts de la rue, au théâtre, cinéma,
                vitrines, muséographie et évènementiel. Je participe également aux montages,
                démontages, à l’exploitation de sites et à la régie plateau de spectacles.
              </p>
              <br />
              <p>
                J’exerce mon travail au sein de compagnies, telles que la compagnie de scénographie
                Les Plastiqueurs à Rouen, de théâtres nationaux, notamment pour le Théâtre de
                l’Odéon ou encore aux cotés d’artistes comme Aude Bourgine ou de sociétés de
                production de films. Je réalise des projets de décors seule, pour des particuliers
                et entreprises mais aussi en collaboration avec des artistes, constructeurs et
                techniciens.
              </p>
            </div>
            <div className={`${styles.item} ${styles.animation__transform_top}`}>
              <h4>2. Associations</h4>
            </div>
            <div className={`${styles.item} ${styles.animation__transform_top}`}>
              <h4>3. Presse</h4>
            </div>
            <div className={`${styles.item} ${styles.animation__transform_top}}`}>
              <h4>4. Réseaux</h4>
              <ul>
                <li>
                  <div className={`${styles.contact__logo}`}>
                    <a href="https://www.instagram.com/margotchalmeton/" target="_blank">
                      <Instagram />
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`${styles.item} ${styles.animation__transform_top}`}>
              <h4>5. CV</h4>
              <ul>
                <li>
                  {' '}
                  <a href="../pdf/cv.pdf" target="_blank">
                    cv.pdf
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.item} ${styles.animation__transform_top}`}>
              <h4>6. Crédits</h4>
              <div className={styles.credit}>
                <h5>Développement web</h5>
                <a href="https://www.vincenthirtz.fr" target="_blank">
                  Vincent Hirtz
                </a>
              </div>
              <div className={styles.credit}>
                <h5>Typographies</h5>
                <ul>
                  <li>Agenda</li>
                </ul>
              </div>
            </div>
            <div className={`${styles.item} ${styles.animation__transform_top}`}>
              <h4>7. Légales</h4>
              <NavLink to="/legal-notices">mentions-legales.html</NavLink>
            </div>
          </Parallax>
        </div>
        <Footer allProjectsDisplay={false} />
      </Layout>
    </ParallaxProvider>
  );
};

export default About;
