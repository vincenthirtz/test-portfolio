import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Rush2022.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const Rush2022 = (): JSX.Element => {
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
        <title>
          Margot Chalmeton | Projet Scénographie pour “Rush” festival 2022 organisé par le 106 Rouen
        </title>
        <meta
          name="description"
          content={`Conception scénographie et fabrication des décors du festival par la compagnie “Les Plastiqueurs” `}
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/rush-festival-2022" />
      <div className={styles.container}>
        <HeaderProject
          title={`Scénographie pour “Rush” festival 2022 organisé par le 106 Rouen `}
          index={1}
          titleLink=""
          link=""
          year={2022}
          services={[
            `Conception scénographie et fabrication des décors du festival par la compagnie “Les Plastiqueurs” `,
          ]}
          elements={[<span>Crédit photo : Margot Chalmeton</span>]}
        />
        <div className={styles.images__container}>
          <video
            className={styles.animation__transform_top}
            controls
            controlsList="nodownload"
            poster="images/accessoiresetdecors/RUSH/photo1.jpg"
          >
            <source src="images/accessoiresetdecors/RUSH/video.MOV" type="video/mp4" />
          </video>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="/images/accessoiresetdecors/RUSH/photo1.jpg" onClick={handleImage} />
            <img src="/images/accessoiresetdecors/RUSH/photo2.jpg" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="/images/accessoiresetdecors/RUSH/photo3.jpg" onClick={handleImage} />
            <img src="/images/accessoiresetdecors/RUSH/photo4.jpg" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="/images/accessoiresetdecors/RUSH/photo5.jpg" onClick={handleImage} />
            <img src="/images/accessoiresetdecors/RUSH/photo6.jpg" onClick={handleImage} />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject text="Projet Othello" link="/accessoires&decors/othello" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Rush2022;
