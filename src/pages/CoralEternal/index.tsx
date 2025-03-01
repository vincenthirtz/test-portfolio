import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './CoralEternal.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const CoralEternal = (): JSX.Element => {
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
        <title>Margot Chalmeton | Projet Coral Eternal</title>
        <meta
          name="description"
          content="Aide à la fabrication de l’oeuvre « Coral Eternal » de l’artiste Aude Bourgine"
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/aude-bourgine" />
      <div className={styles.container}>
        <HeaderProject
          title="Aude Bourgine"
          index={1}
          titleLink=""
          link=""
          year={2019}
          services={[
            `Aide à la fabrication de l’oeuvre « Coral Eternal » de l’artiste Aude Bourgine`,
            'Crédits photo: Aude Bourgine, images provenant du site de l’artiste',
          ]}
          elements={[
            <a href="https://www.audebourgine.fr">Site de l'artiste</a>,
            <a href="https://www.audebourgine.fr/fr/portfolio/coral-eternal/">
              Article de la création
            </a>,
          ]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/accessoiresetdecors/AUDE BOURGINE 2019/hermes-rouge.webp"
              onClick={handleImage}
            />
            <img
              src="images/accessoiresetdecors/AUDE BOURGINE 2019/hermes-bleu.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/accessoiresetdecors/AUDE BOURGINE 2019/WIN_HK_2019_0078-scaled.jpg"
              onClick={handleImage}
            />
            <img
              src="images/accessoiresetdecors/AUDE BOURGINE 2019/WIN_HK_2019_0080-1-scaled.jpg"
              onClick={handleImage}
            />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="Cafete" link="/accessoires&decors/cafete" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoralEternal;
