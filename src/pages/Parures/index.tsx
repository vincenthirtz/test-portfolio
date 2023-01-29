import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Parures.module.sass';
import Header from 'components/Header';
import HeaderProject from 'components/HeaderProject';
import LinkNextProject from 'components/LinkNextProject';
import ModalImage from 'components/ModalImage';

const Parures = (): JSX.Element => {
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
        <title>Margot Chalmeton | Projet Parures, objets d'art à porter</title>
        <meta
          name="description"
          content={`Création de deux pièces pour l'exposition Parures, objets d'art à porter conçue par Isabelle Quéhé.`}
        />
      </Helmet>

      <ModalImage image={imageModal} alt={altModal} display={displayModal} />

      <Header url="/parures" />
      <div className={styles.container}>
        <HeaderProject
          title="Projet Parures, objets d'art à porter"
          index={1}
          titleLink=""
          link=""
          year={2019}
          services={[
            `Création de deux pièces pour l'exposition Parures, objets d'art à porter conçue par Isabelle Quéhé.`,
          ]}
          elements={[
            <span>
              Pièces retenues par un jury de professionnels, exposées puis mises aux enchères.
              Fabriquées à partir d'un vêtement et de matériaux recyclés. Techniques et savoir-faire
              issus des arts textile. Broderie, couture, appliqués, découpe-laser.
            </span>,
            <span>Modèle : Samuel Brioul</span>,
            <span>Crédit photo: Margot Chalmeton</span>,
            <a href="http://daac.ac-lille.fr/actualites/arts-appliques/jusquau-28-oct-2019-exposition-parures-objets-dart-a-porter-a-la-manufacture-de-roubaix/jigsaw-lamanufacture-parures-dossierdepresse-juin2019-compresse.pdf/view">
              Article
            </a>,
          ]}
        />
        <div className={styles.images__container}>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/ACCESSOIRES ET DECORS/PARURES/affiche.webp" onClick={handleImage} />
            <img
              src="images/ACCESSOIRES ET DECORS/PARURES/explications.webp"
              onClick={handleImage}
            />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/ACCESSOIRES ET DECORS/PARURES/photo1.webp" onClick={handleImage} />
            <img src="images/ACCESSOIRES ET DECORS/PARURES/photo2.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/ACCESSOIRES ET DECORS/PARURES/photo3.webp" onClick={handleImage} />
            v<img src="images/ACCESSOIRES ET DECORS/PARURES/photo4.webp" onClick={handleImage} />
          </div>
          <div className={`${styles.row} ${styles.animation__transform_top}`}>
            <img src="images/ACCESSOIRES ET DECORS/PARURES/photo5.webp" onClick={handleImage} />
            v<img src="images/ACCESSOIRES ET DECORS/PARURES/photo6.webp" onClick={handleImage} />
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

export default Parures;
