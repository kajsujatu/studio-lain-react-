import React, { useEffect } from 'react';
import Breadcrumbs from '../components/Breadcrumbs';
import styles from './WhereToBuy.module.css';

const WhereToBuy = () => {
  useEffect(() => {
    document.title = `Studio Lain - Gdzie kupić?`;
  }, []);

  return (
    <>
      <Breadcrumbs />

      <main className={styles.container_page}>
        <div className={styles.contact}>
          <p>
            <b>Nasze komiksy kupicie w sklepach:</b>
          </p>

          <p className={styles.shop}>
            <b>Sklep Gildia</b>
          </p>
          <p>
            <a
              href='https://www.gildia.pl/szukaj/wydawnictwo/studio-lain'
              target='_blank'
            >
              www.gildia.pl
            </a>
          </p>

          <p className={styles.shop}>
            <b>Komiksiarnia</b>
          </p>
          <a href='https://komiksiarnia.pl/399-studio-lain' target='_blank'>
            komiksiarnia.pl
          </a>
          <p>ul. Kościuszki 14, Katowice</p>
          <p>ul. Radziwiłłowska 26, Kraków</p>
          <p></p>

          <p className={styles.shop}>
            <b>Komikslandia</b>
          </p>
          <p>
            <a
              href='https://komikslandia.pl/pl/producer/Studio-Lain/16'
              target='_blank'
            >
              www.komikslandia.pl
            </a>
          </p>
          <p>Metro Centrum Pawilon 2001A, Warszawa</p>

          <p className={styles.shop}>
            <b>Centrum Komiksu</b>
          </p>
          <p>
            <a
              href='https://www.facebook.com/CentrumKomiksuPL/'
              target='_blank'
            >
              www.facebook.com/CentrumKomiksuPL/
            </a>
          </p>
          <p>Al. Niepodległości 148, Warszawa</p>

          <p className={styles.shop}>
            <b>KIK</b>
          </p>
          <p>ul. Św. Marcin 26, Poznań</p>

          <p className={styles.shop}>
            <b>Fankomiks</b>
          </p>
          <p>
            <a href='http://www.fankomiks.pl' target='_blank'>
              www.fankomiks.pl
            </a>
          </p>
          <p>ul. Stefana Batorego 2, Kraków</p>

          <p className={styles.shop}>
            <b>Fantastyczne Światy</b>
          </p>
          <p>al. J. Piłsudskiego 11/3 lokal 01, Białystok</p>
        </div>

        <div className={styles.contact}>
          <p>
            <b>Bezpośrednio u nas:</b>
          </p>
          <p className={styles.shop}>77 1060 0076 0000 3260 0156 1688</p>
          <p>Studio Lain</p>
          <p>Arkadiusz Dzierżawski</p>
          <p>ul. Sobieskiego 20a/5</p>
          <p>14-202 Iława</p>
          <p>
            więcej informacji -{' '}
            <a href='mailto:a.dzierzawski@magazyn-arigato.pl'>
              a.dzierzawski@magazyn-arigato.pl
            </a>
          </p>
        </div>
      </main>
    </>
  );
};

export default WhereToBuy;
