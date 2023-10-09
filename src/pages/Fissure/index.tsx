import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Fissure.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const Fissure = (): JSX.Element => {
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
        <title>Margot Chalmeton | Projet spectacle de la Cie L'immédiat</title>
        <meta
          name="description"
          content="Collecte d'objets anciens, fabrication d'accessoires, trucage, décors"
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/fissure" />
      <div className={styles.container}>
        <HeaderProject
          title="Projet spectacle de la Cie L'immédiat"
          index={1}
          titleLink=""
          link=""
          year={2022}
          services={[
            `Collecte d'objets anciens, fabrication d'accessoires, trucage, décors.`,
            `Travail réalisé en collaboration avec Vincent GADRAS, L’immédiat, Guillaume BÉGUINOT et Margot CHALMETON, avec l’aide de Franck LIMON-DUPARCMEUR, Maxime BUROCHAIN, Sylvain GIRAUDEAU, Hervé VIEUSSE et Louise DIEBOLD. 
            `,
          ]}
          elements={[
            <p> Crédit photos : Compagnie L’Immédiat</p>,
            <a href="https://limmediat.com/le-poids-des-choses/">Site de la Cie L'immédiat</a>,
          ]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="/images/accessoiresetdecors/FISSURE/plan-flou.webp" onClick={handleImage} />
            <img src="/images/accessoiresetdecors/FISSURE/photo-rouge.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img
              src="images/accessoiresetdecors/FISSURE/photo-noir-blanc.webp"
              onClick={handleImage}
            />
            <img src="/images/accessoiresetdecors/FISSURE/focus.jpg" onClick={handleImage} />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="Projet Hybride" link="/accessoires&decors/hybride" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Fissure;
