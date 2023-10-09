import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Mun.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const Mun = (): JSX.Element => {
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
        <title>Margot Chalmeton | Projet Défilé Albert de Mun</title>
        <meta name="description" content={`Construction, préparation des chassis, patines.`} />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/albert-de-mun" />
      <div className={styles.container}>
        <HeaderProject
          title="Projet Défilé Albert de Mun"
          index={1}
          titleLink=""
          link=""
          year={2021}
          services={[`Construction, préparation des chassis, patines.`]}
          elements={[
            <span>
              Participation au décor pour le Défilé Albert de Mun - Théatre du Chatelêt 2021
            </span>,
            <span>Construction, préparation des chassis, patines. </span>,
            <span>Crédit photo : A. Bottard, M.Chalmeton</span>,
          ]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/accessoiresetdecors/MUN/photo1.webp" onClick={handleImage} />
            <img src="images/accessoiresetdecors/MUN/photo2.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/accessoiresetdecors/MUN/photo3.webp" onClick={handleImage} />
            <img src="images/accessoiresetdecors/MUN/photo4.webp" onClick={handleImage} />
          </div>
        </div>

        <div className={styles.footer__project}>
          <div className={styles.animation__background}>
            <LinkNextProject
              text={`Projet Tête de marionnette géante "Saint-Gorgon"`}
              link="/accessoires&decors/saint-gorgon"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mun;
