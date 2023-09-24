import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from 'components/Layout';
import styles from './Contact.module.sass';
import Header from 'components/Header';

const Contact = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Margot Chalmeton | Contact</title>
        <meta name="description" content="Contactez Margot Chalmeton par mail." />
      </Helmet>

      <Header url="/contact" />
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.link}>
            <a href="mailto:margotchalmeton@gmail.com" target="_blank">
              <p className={`${styles.contact__link} ${styles.animation__background}`}>
                margotchalmeton (@) gmail.com
              </p>
            </a>
          </div>
          <div className={styles.link}>
            <a href="tel:0760085727" target="_blank">
              <p className={`${styles.contact__link} ${styles.animation__background}`}>
                Tel: 07 60 08 57 27
              </p>
            </a>
          </div>
          <div className={styles.link}>
            <a href="https://www.linkedin.com/in/margotchalmetonworkshop/" target="_blank">
              <p className={`${styles.contact__link} ${styles.animation__background}`}>
                Linkedin @margotchalmetonworkshop
              </p>
            </a>
          </div>
          <div className={styles.link}>
            <a href="https://www.instagram.com/margotchalmeton/" target="_blank">
              <p className={`${styles.contact__link} ${styles.animation__background}`}>
                Instagram @margotchalmeton
              </p>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
