import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Lcdo.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const Lcdo = (): JSX.Element => {
  // Fonction pour être en haut de la page quand on arrive sur une page --> merci React.js
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Les variables pour le modal des images
  const [imageModal, setImageModal] = useState<string>('');
  const [altModal, setAltModal] = useState<string>('');
  const [displayModal, setDisplayModal] = useState<boolean>(false);

  // Fonction pour changer l'image en fonction de l'image sur laquelle on clique
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleImage = (e: any) => {
    // On affiche le modal uniquement si l'écran est supérieur à 900px --> quand on est en row
    if (window.innerWidth > 900) {
      setImageModal((e.target as HTMLImageElement).src);
      setAltModal((e.target as HTMLImageElement).alt);
      setDisplayModal(true);
    }
  };

  // Fonction pour cacher l'image au clique ou au scroll
  useEffect(() => {
    // On désactive l'image si et seulement si l'image est déjà activé
    const clickOrScrollHandler = () => {
      if (displayModal) {
        setDisplayModal(false);
      }
    };

    // On utilie un listener pour chaque clique
    window.addEventListener('click', clickOrScrollHandler, false);

    // On utilie un listener en fonction du navigateur
    // IE9, Chrome, Safari, Opera
    window.addEventListener('mousewheel', clickOrScrollHandler, false);
    // Firefox
    window.addEventListener('DOMMouseScroll', clickOrScrollHandler, false);
    // Mobile
    window.addEventListener('touchmove', clickOrScrollHandler, false);

    return () => {
      window.removeEventListener('click', clickOrScrollHandler, false);

      // On utilie un listener en fonction du navigateur
      // IE9, Chrome, Safari, Opera
      window.removeEventListener('mousewheel', clickOrScrollHandler, false);
      // Firefox
      window.removeEventListener('DOMMouseScroll', clickOrScrollHandler, false);
      // Mobile
      window.removeEventListener('touchmove', clickOrScrollHandler, false);
    };
  });

  return (
    <Layout>
      {/* Pour le SEO on utilise Helmet, on peut y rajouter tout les tags du Head que l'on veut pour cette page spécifiquement */}
      <Helmet>
        <title>Margot Chalmeton | Projet La Constellation de l'Ours</title>
        <meta
          name="description"
          content="A l'occasion de l'année de commémoration Gustave Flaubert Rouen 2021.
          Fabrication d'accessoires et de décors, montage, démontage. "
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/la-constellation-de-lours" />
      <div className={styles.container}>
        <HeaderProject
          title="Projet La Constellation de l'Ours"
          index={1}
          titleLink=""
          link=""
          year={2021}
          services={[
            `A l'occasion de l'année de commémoration Gustave Flaubert Rouen 2021.
            Fabrication d'accessoires et de décors, montage, démontage. `,
          ]}
          elements={[
            <span>
              Réalisé en collaboration avec Les Plastiqueurs, groupe d'intervention en milieu urbain
            </span>,
            <span>
              Crédit photos : Julien Hélie Photographe, Facebook "Vivre Beauvoisine", Catherine
              Morin-Desailly, Valérie Chrétien
            </span>,
            <a href="https://leballonvert.com">Site de la Compagnie Le Ballon Vert</a>,
            <a href="https://les-plastiqueurs.com">Site de la Compagnie Les Plastiqueurs</a>,
          ]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/decor.webp"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo1.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo2.webp"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo3.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo4.webp"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo5.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo6.webp"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo7.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo8.webp"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo9.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo10.webp"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo11.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo12.webp"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/CONSTELLATION DE LOURS/Julien Helie Photographe/photo13.webp"
              onClick={handleImage}
            />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="A venir" link="/fissure" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lcdo;
