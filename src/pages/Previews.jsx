import React, { useEffect } from 'react';
import styles from './Previews.module.css';

const Previews = () => {
  useEffect(() => {
    document.title = `Studio Lain | Plany wydawnicze`;
  }, []);
  return (
    <>
      <main className='container_page'>
        <h2 className='title'>Nasze plany wydawnicze</h2>
        <p className={styles.text_introduce}>
          <a
            href='https://blogokomiksach.blogspot.com/2023/12/studio-lain-podsumowanie-mijajacego.html'
            target='_blank'
          >
            Przeczytaj wywiad:{' '}
            <b> Podsumowanie mijającego roku i zapowiedzi na 2024 r.</b>
          </a>
        </p>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/ce.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>CE</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>José Roosevelt</li>
              <li>Ilustracje</li>
              <li>José Roosevelt</li>
            </ul>
            <p>
              Przewidywana data polskiego wydania: <b>kwiecień 2024</b>
            </p>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-27079-BD-CE-Roosevelt.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/chroniques-barbares.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Kroniki barbarzyńców</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Tytył oryginalny</li>
              <li>Chroniques Barbares</li>
              <li>Scenariusz</li>
              <li>Jean-Yves Mitton</li>
              <li>Ilustracje</li>
              <li>Jean-Yves Mitton</li>
            </ul>
            <p>
              Przewidywana data polskiego wydania: <b>kwiecień 2024</b>
            </p>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-1153-BD-Chroniques-Barbares.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/shane.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Shane</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Jean-François Di Giorgio</li>
              <li>Ilustracje</li>
              <li>Paul Teng</li>
              <li>Kolory</li>
              <li>Graza</li>
            </ul>
            <p>
              Przewidywana data polskiego wydania: <b>maj 2024</b>
            </p>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-1033-BD-Shane.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/slaine-dragontamer.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Slaine: Pogramca Smoków</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Tytył oryginalny</li>
              <li>Slaine Dragontamer</li>
              <li>Scenariusz</li>
              <li>Pat Mills</li>
              <li>Ilustracje</li>
              <li>Leonardo Manco</li>
            </ul>
            <p>
              Przewidywana data polskiego wydania: <b>czerwiec 2024</b>
            </p>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://shop.2000ad.com/catalogue/GRN696'
                target='_blank'
              >
                <b> Link 2000 AD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/tenebres.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Ténèbres</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Christophe Bec</li>
              <li>Ilustracje</li>
              <li>Iko</li>
            </ul>
            <p>
              Przewidywana data polskiego wydania: <b>lipiec 2024</b>
            </p>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-21294-BD-Tenebres-Bec-Iko.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/tales-of-telguuth.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Tales of Telguuth </h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Steve Moore </li>
              <li>Ilustracje</li>
              <li>
                Carl Critchlow, Clint Langley, Dean Ormston, Greg Staples, John
                Stokes, Jon Haward, Pat Wright, Paul Johnson, Siku, Simon Davis,
                Stefano Cardoselli, Dave Kendall I David Kendall
              </li>
            </ul>
            <p>
              Przewidywana data polskiego wydania: <b>sierpień 2024</b>
            </p>

            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a href='https://shop.2000ad.com/catalogue/XB539' target='_blank'>
                <b> Link 2000 AD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/solo-5.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Solo 4</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Tytył oryginalny</li>
              <li>Solo: Marcher sans soulever de poussière</li>
              <li>Scenariusz</li>
              <li>Oscar Martin</li>
              <li>Ilustracje</li>
              <li>Oscar Martin</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/BD-Solo-Martin-Tome-5-Marcher-sans-soulever-de-poussiere-414088.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/zenith.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Zenith</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Grant Morrison </li>
              <li>Ilustracje</li>
              <li>Steve Yewell</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://shop.2000ad.com/catalogue/graphic-novels/zenith'
                target='_blank'
              >
                <b> Link 2000 AD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/nemesis-the-warlock.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Nemesis The Warlock</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Pat Mills</li>
              <li>Ilustracje</li>
              <li>Jesus Redondo i Kevin O’Neill</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://shop.2000ad.com/catalogue/graphic-novels/nemesis-the-warlock'
                target='_blank'
              >
                <b> Link 2000 AD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/altor.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Altor</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Moebius</li>
              <li>Ilustracje</li>
              <li>Marc Bati</li>
            </ul>
            <p>Wydanie zbiorcze, kompletne (razem ok. 370 stron).</p>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-84-BD-Altor.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/dans-lombre-du-soleil.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}> W cieniu słońca</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Tytył oryginalny</li>
              <li>Dans L'Ombre du Soleil</li>
              <li>Scenariusz</li>
              <li>Colin Wilson</li>
              <li>Ilustracje</li>
              <li>Colin Wilson</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-557-BD-Dans-l-ombre-du-soleil.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/sinister-dexter.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Sinister Dexter</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Oscar Martin</li>
              <li>Ilustracje</li>
              <li>Oscar Martin</li>
            </ul>
            <p>
              Przewidywana data polskiego wydania: <b>II połowa 2024</b>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/berceuse-assassine.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Mordercza kołysanka</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Tytył oryginalny</li>
              <li>Berceuse Assassine</li>
              <li>Scenariusz</li>
              <li>Tome</li>
              <li>Ilustracje</li>
              <li>Ralph Meyer</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-95-BD-Berceuse-assassine.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/abc.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>ABC Warriors</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Pat Mills</li>
              <li>Ilustracje</li>
              <li>Clint Langley</li>
            </ul>
            <p>
              Wydanie zbiorcze ABC Warriors w skład którego wejdą: Wojna
              Volgańska, Powrót na Ziemię, Powrót na Marsa i powrót Ro-Busterów.
              Planujemy dwa zbiorcze tomy sprzedawane w jednym pakiecie.
            </p>
            <p>
              Więcej informacji na temat zagranicznych wydań:
              <br />
              <a
                href='https://shop.2000ad.com/catalogue/GRN453/abc-warriors-the-volgan-war-vol-01'
                target='_blank'
              >
                <b> 2000 AD - The Volgan War Book I</b>
              </a>
              <br />
              <a
                href='https://shop.2000ad.com/catalogue/XB461/abc-warriors-the-volgan-war-vol-02'
                target='_blank'
              >
                <b> 2000 AD - The Volgan War Book II</b>
              </a>
              <br />
              <a
                href='https://shop.2000ad.com/catalogue/GRN481/abc-warriors-the-volgan-war-vol-03'
                target='_blank'
              >
                <b> 2000 AD - The Volgan War Book III</b>
              </a>
              <br />
              <a
                href='https://shop.2000ad.com/catalogue/XB496/abc-warriors-the-volgan-war-vol-04'
                target='_blank'
              >
                <b> 2000 AD - The Volgan War Book IV</b>
              </a>
              <br />
              <a
                href='https://shop.2000ad.com/catalogue/XB541/abc-warriors-return-to-mars'
                target='_blank'
              >
                <b> 2000 AD - Return to Mars</b>
              </a>
              <br />
              <a
                href='https://shop.2000ad.com/catalogue/XB575/abc-warriors-return-to-ro-busters'
                target='_blank'
              >
                <b> 2000 AD - Return to Ro-Busters</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/rogue-trooper.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Rogue Trooper: Blighty Valley</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Garth Ennis</li>
              <li>Ilustracje</li>
              <li>Patrick Goddard</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://shop.2000ad.com/catalogue/XB867/rogue-trooper-blighty-valley'
                target='_blank'
              >
                <b> Link 2000 AD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/kingdom.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Kingdom</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Dan Abnett</li>
              <li>Ilustracje</li>
              <li>Richard Elson</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a href='https://shop.2000ad.com/series/kingdom' target='_blank'>
                <b> Link 2000 AD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/stone.jpeg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Stone The Awakening</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Brian Haberlin</li>
              <li>Ilustracje</li>
              <li>Brian Haberlin, Whilce Portacio</li>
            </ul>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/hellcop.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Hellcop</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Brian Haberlin</li>
              <li>Ilustracje</li>
              <li>Brian Haberlin, Geirrod van Dyke</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://imagecomics.com/comics/series/hellcop'
                target='_blank'
              >
                <b> Link imagecomics.com</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/sonata.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Sonata</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Brian Haberlin, David Hine</li>
              <li>Ilustracje</li>
              <li>Brian Haberlin, Geirrod van Dyke</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://imagecomics.com/comics/series/sonata'
                target='_blank'
              >
                <b> Link imagecomics.com</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/fathom.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Fathom</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Michael Turner</li>
              <li>Ilustracje</li>
              <li>Michael Turner</li>
            </ul>
            <p>
              Cały cykl Michaela Turnera (wszystko przed All New Fathom),
              pozycja będzie liczyć ok. tysiąca stron.
            </p>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/serie-69662-BD-Fathom-1998.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/aphrodite-ix.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Aphrodite IX</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>David Wohl, Matt Hawkins</li>
              <li>Ilustracje</li>
              <li>David Finch, Stjepan Šejić</li>
            </ul>
            <p>
              W jednym tomie album z rysunkami Davida Fincha i Rebrith z
              rysunkami Stjepana Šejića.
            </p>
            <p>Więcej informacji na temat zagranicznych wydań:</p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-6104-BD-Aphrodite-IX.html'
                target='_blank'
              >
                <b> Link BD Aphrodite IX</b>
              </a>
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-81303-BD-Aphrodite-IX-Rebirth.html'
                target='_blank'
              >
                <b> Link BD Aphrodite IX - Rebirth</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/darkness.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Darkness</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Garth Ennis</li>
              <li>Ilustracje</li>
              <li>Marc Silvestri</li>
            </ul>
            <p>Complete Edition vol. 1 & 2, czyli kompletny run (0-40 zeszyty plus wszystkie 1/2 i crossovery z tego okresu).</p>
            <p>Więcej informacji na temat zagranicznego wydania:</p>

            <a
              href='https://www.bedetheque.com/serie-2638-BD-Darkness-Editions-USA.html'
              target='_blank'
            >
              <b> Link BD</b>
            </a>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/cyberforce.jpg'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Cyberforce</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Marc Silvestri</li>
              <li>Ilustracje</li>
              <li>Marc Silvestri</li>
            </ul>
            <p>W skład albumu wejdzie: CYBERFORCE #0, CYBERFORCE THE TIN MEN OF WAR #1-4, THE KILLER INSTINCT CROSSOVER WITH WILDCATS #5-7, CYBERFORCE VOLUME 2 #1-13, CYBERFORCE ORIGINS: #1 CYBLADE, CYBERFORCE ORIGINS #2 STRYKER and the CYBERFORCE ANNUAL #1</p>
            <p>Więcej informacji na temat zagranicznych wydań:</p>
<p>
            <a
              href='https://www.bedetheque.com/serie-45810-BD-Cyberforce-1992.html'
              target='_blank'
            >
              <b> Link BD Cyberforce 1992 Mindgames, The tin men of war</b>
            </a>
            </p>
            <p>
            <a
              href='https://www.bedetheque.com/serie-45745-BD-Cyberforce-1993.html'
              target='_blank'
            >
              <b> Link BD Cyberforce 1993 Killer instinct </b>
            </a>
            </p>
            <p>
            <a
              href='https://www.bedetheque.com/serie-66942-BD-Cyberforce-Origins-1996.html'
              target='_blank'
            >
              <b> Link BD Cyberforce 1996 Origins</b>
            </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/le-facteur-cratophane.webp'></img>
          </div>
          <div className={styles.comics_preview_info}>
            <h1 className={styles.title}>Le Facteur Cratophane</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Éric Liberge</li>
              <li>Ilustracje</li>
              <li>Éric Liberge</li>
            </ul>
            <p>
              Więcej informacji na temat zagranicznego wydania:
              <a
                href='https://www.bedetheque.com/BD-Monsieur-Mardi-Gras-Descendres-Tome-0-Le-Facteur-Cratophane-Prologue-a-Monsieur-Mardi-Gras-Descendres-274543.html'
                target='_blank'
              >
                <b> Link BD</b>
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Previews;
