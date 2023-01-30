import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './AnUnderseaOdyssey.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const AnUnderseaOdyssey = (): JSX.Element => {
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
        <title>Margot Chalmeton | Projet “An Undersea Odyssey”</title>
        <meta
          name="description"
          content={`Aide à la fabrication de l’oeuvre « An Undersea Odyssey »`}
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/an-undersea-odyssey" />
      <div className={styles.container}>
        <HeaderProject
          title={`Projet “An Undersea Odyssey”`}
          index={1}
          titleLink=""
          link=""
          year={2022}
          services={[`Aide à la fabrication de l’oeuvre « An Undersea Odyssey »`]}
          elements={[<span>Fabrications d’accessoires.</span>]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/AN UNDERSEA ODYSSEY/Photo1.jpg"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/AN UNDERSEA ODYSSEY/Photo2.jpg"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/ACCESSOIRES ET DECORS/AN UNDERSEA ODYSSEY/Photo3.jpg"
              onClick={handleImage}
            />
            <img
              src="images/ACCESSOIRES ET DECORS/AN UNDERSEA ODYSSEY/Photo4.jpg"
              onClick={handleImage}
            />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="Projet Nemesis" link="/nemesis" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnUnderseaOdyssey;
