import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  useEffect(() => {
    document.title = `Studio Lain - O nas`;
  }, []);

  return (
    <>
      <Breadcrumbs />
      <main className='container_page'>
        <h2 className='title'>O nas</h2>
        <div className={styles.bio}>
          <div>
            <img
              className={styles.image_logo}
              src='img/studio-lain_logo-big.jpg'
            />
          </div>
          <div>
            <p>
              Studio Lain to grupa pasjonatów komiksów z całego świata. Od
              dobrych kilku lat wydajemy na polskim rynku jedyny opiniotwórczy
              magazyn poświęcony azjatyckim historiom obrazkowym, jak i
              azjatyckiej animacji. W 2014 postanowiliśmy także sami wydawać
              komiksy. Na pierwszy ogień idą tytuły z jednego z naszych
              ulubionych wydawnictw – brytyjskiego 2000AD. Dla nich świetne
              komiksy robili najwięksi w branży. Jeśli czytelnicy, oczywiście
              poprzez swoje portfele, dadzą nam zielone światło, to lista
              planowanych pozycji jest i długa i piękna. Pojawią się komiksy z
              rynku francuskiego, z rynków azjatyckich oraz z USA. Z góry więc
              wielkie dzięki, bo zawsze marzyliśmy o wydawaniu historii
              obrazkowych.
            </p>
          </div>
        </div>

        <div>
          <div className={styles.bio_item}>
            <p>
              <b>WYWIADY</b>
            </p>
            <p>
              <a
                href='https://kolorowezeszyty.blogspot.com/2016/04/2113-pasja-aczy-nie-dzieli-ludzi-wywiad.html'
                target='_blank'
              >
                Kolorowe Zeszyty (5 kwietnia 2016)
              </a>
              <br />

              <a
                href='https://blogokomiksach.blogspot.com/2023/12/studio-lain-podsumowanie-mijajacego.html'
                target='_blank'
              >
                Blog o komiksach (20 grudnia 2023)
              </a>
            </p>
          </div>

          <div className={styles.bio_item}>
            <p>
              <b>KONTAKT</b>
            </p>
            <p>
              <b>Arkadiusz Dzierżawski</b> <br />
              <a href='mailto:a.dzierzawski@magazyn-arigato.pl'>
                a.dzierzawski@magazyn-arigato.pl
              </a>
            </p>

            <p>
              <b>Jacek Więckowski</b> <br />
              <a href='mailto:jacek.wieckowski@magazyn-arigato.pl'>
                jacek.wieckowski@magazyn-arigato.pl
              </a>
            </p>
          </div>

          <div className={styles.bio_item}>
            <p>
              <b>ADRES</b>
            </p>
            <p>
              ul. Sobieskiego 20a/5
              <br />
              14-202 Iława
              <br />
              <a href='tel:+48512257985'>tel. 512 257 985</a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
