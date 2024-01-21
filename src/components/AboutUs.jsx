import React from 'react';
import { Link } from 'react-router-dom';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs_element}>
          <Link to='/' className={styles.back_link_top}>
            Wróć
          </Link>
        </div>
        <div className={styles.breadcrumbs_element}>
          <Link to='/o-nas' className={styles.catalog_link_top}>
            O nas
          </Link>
          <span className={styles.title}></span>
        </div>
      </div>

      <main className={styles.container_page}>
        <p>
          Studio Lain to grupa pasjonatów komiksów z całego świata. Od dobrych
          kilku lat wydajemy na polskim rynku jedyny opiniotwórczy magazyn
          poświęcony azjatyckim historiom obrazkowym, jak i azjatyckiej
          animacji. W 2014 postanowiliśmy także sami wydawać komiksy. Na
          pierwszy ogień idą tytuły z jednego z naszych ulubionych wydawnictw –
          brytyjskiego 2000AD. Dla nich świetne komiksy robili najwięksi w
          branży. Jeśli czytelnicy, oczywiście poprzez swoje portfele, dadzą nam
          zielone światło, to lista planowanych pozycji jest i długa i piękna.
          Pojawią się komiksy z rynku francuskiego, z rynków azjatyckich oraz z
          USA. Z góry więc wielkie dzięki, bo zawsze marzyliśmy o wydawaniu
          historii obrazkowych.
        </p>
      </main>
    </>
  );
};

export default AboutUs;
