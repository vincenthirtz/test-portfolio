import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Lpdc.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const Lpdc = (): JSX.Element => {
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
        <title>Margot Chalmeton | Projet Le poids des choses</title>
        <meta
          name="description"
          content="Collecte d'objets anciens, fabrication d'accessoires, trucage. Travail réalisé en collaboration avec Alain Burkarth & Guillaume Béguinot"
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/le-poids-des-choses" />
      <div className={styles.container}>
        <HeaderProject
          title="Projet Le poids des choses"
          index={1}
          titleLink=""
          link=""
          year={2021}
          services={[
            `Collecte d'objets anciens, fabrication d'accessoires, trucage. Travail réalisé en collaboration avec Alain Burkarth & Guillaume Béguinot`,
          ]}
          elements={[
            <span> Crédit photos : Le Canal - Théâtre du Pays de Redon, I.Jouvante, 35600</span>,
            <a href="https://limmediat.com/le-poids-des-choses/">Site de la Compagnie</a>,
            <a href="https://www.lecanaltheatre.fr/spectacle-20202021-le-poids-des-choses">
              Article de Le Canal - Théâtre du Pays de Redon
            </a>,
          ]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="/images/accessoiresetdecors/LPDC/photo1.webp" onClick={handleImage} />
            <img src="/images/accessoiresetdecors/LPDC/photo2.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="/images/accessoiresetdecors/LPDC/photo3.webp" onClick={handleImage} />
            <img src="/images/accessoiresetdecors/LPDC/photo4.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="/images/accessoiresetdecors/LPDC/photo5.webp" onClick={handleImage} />
            <img src="/images/accessoiresetdecors/LPDC/photo6.webp" onClick={handleImage} />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject
              text="Projet La Constellation de l'Ours"
              link="/accessoires&decors/la-constellation-de-lours"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Lpdc;
