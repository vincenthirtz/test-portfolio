import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Umdlf.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const Umdlf = (): JSX.Element => {
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
        <title>Margot Chalmeton | Projet Une mort dans la famille</title>
        <meta
          name="description"
          content="Participation à la réalisation des accessoires de jeu et mobiliers."
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/une-mort-dans-la-famille" />
      <div className={styles.container}>
        <HeaderProject
          title="Projet Une mort dans la famille"
          index={1}
          titleLink=""
          link=""
          year={2021}
          services={[`Participation à la réalisation des accessoires de jeu et mobiliers.`]}
          elements={[
            <span>
              Texte et mise en scène Alexander Zeldin, artiste associé création, réalisation du
              décor Atelier de construction de l’Odéon-Théâtre de l’Europe, du 4 au 20 février 2022,
              Berthier 17ème Participation à la réalisation des accessoires de jeu et mobiliers.
            </span>,
            <span>
              Crédit photos : Une mort dans la famille - Photos de répétitions © Simon Gosselin
            </span>,
            <a href="https://www.theatre-odeon.eu/fr/saison-2021-2022/spectacles-21-22/une_mort_dans_la_famille_2122">
              Article du site du Théâtre de l’Europe, l’Odéon
            </a>,
          ]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/ACCESSOIRES ET DECORS/UMDLF/photo1.webp" onClick={handleImage} />
            <img src="images/ACCESSOIRES ET DECORS/UMDLF/photo2.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/ACCESSOIRES ET DECORS/UMDLF/photo3.webp" onClick={handleImage} />
            <img src="images/ACCESSOIRES ET DECORS/UMDLF/photo4.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/ACCESSOIRES ET DECORS/UMDLF/photo5.webp" onClick={handleImage} />
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

export default Umdlf;
