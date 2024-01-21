import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Previews.module.css';

const Previews = () => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs_element}>
          <Link to='/' className={styles.back_link_top}>
            Wróć
          </Link>
        </div>
        <div className={styles.breadcrumbs_element}>
          <Link to='/plany-wydawnicze' className={styles.catalog_link_top}>
            Plany wydawnicze
          </Link>
          <span className={styles.title}></span>
        </div>
      </div>

      <main className={styles.container_page}>
        <p>
          <a
            href='https://blogokomiksach.blogspot.com/2023/12/studio-lain-podsumowanie-mijajacego.html?fbclid=IwAR0rQzA8oL5OqhUmMtLzGAjX_KM9I3I6KZsmYyD3hBDsXrFtJZ5bvDnpMHo'
            target='_blank'
          >
            Przeczytaj wywiad: <b> Podsumowanie mijającego roku i zapowiedzi na 2024 r.</b>
          </a>
        </p>
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/acriborea.webp'></img>
          </div>
          <div>
            <h1 className={styles.title}>Acriborea</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Tytył oryginalny</li>
              <li>Acriboréa</li>
              <li>Scenariusz</li>
              <li>Sylvain Cordurié</li>
              <li>Ilustracje</li>
              <li>Stéphane Créty</li>
            </ul>
            <p>
              „Arciborea” to kolejna pozycja z francuskiego poletka. Militarna
              space opera dla tych, którym podobała się np. „Wieczna Wojna” czy
              też „Uniwersal War” 1-2. Generalnie dobra, mocna pozycja. Też
              zbieramy 5 tomów w jeden integral.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-13233-BD-Acriborea.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/ce.jpg'></img>
          </div>
          <div>
            <h1 className={styles.title}>CE</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>José Roosevelt</li>
              <li>Ilustracje</li>
              <li>José Roosevelt</li>
            </ul>
            <p>
              CE opowiada historię nieśmiertelnego bez imienia i przeszłości,
              żyjącego w technologicznym społeczeństwie. Ten nieśmiertelny
              obdarzony jest wyjątkowym darem: potrafi śnić. Aby zrozumieć treść
              swoich snów, wyrusza w podróż do miejsca zamieszkanego przez magów
              i mutantów, zwanego „Miastem”, gdzie spotyka barwne postacie i
              gdzie ostatecznie odkrywa, że ​​jego sny to znacznie więcej, niż
              sobie wyobrażał.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-27079-BD-CE-Roosevelt.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/solo-5.jpg'></img>
          </div>
          <div>
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
              Les disciples de Legatus ont continué à propager la parole du
              chien prophète. Les espèces décidées à vivre ensemble ont chassé
              les armées et créé des colonies ouvertes. Pour les gouverneurs
              humains c'en est trop et la guerre pour les territoires perdus se
              prépare. Alors qu'une armée d'herbivores fait son apparition, les
              idéaux de Legatus survivront-ils à ce nouveau conflit ?
              <p>
                <a
                  href='https://www.bedetheque.com/BD-Solo-Martin-Tome-5-Marcher-sans-soulever-de-poussiere-414088.html'
                  target='_blank'
                >
                  <b>Link BD</b>
                </a>
              </p>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/sinister-dexter.webp'></img>
          </div>
          <div>
            <h1 className={styles.title}>Sinister Dexter</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Oscar Martin</li>
              <li>Ilustracje</li>
              <li>Oscar Martin</li>
            </ul>
            <p>
              CE opowiada historię nieśmiertelnego bez imienia i przeszłości,
              żyjącego w technologicznym społeczeństwie. Ten nieśmiertelny
              obdarzony jest wyjątkowym darem: potrafi śnić. Aby zrozumieć treść
              swoich snów, wyrusza w podróż do miejsca zamieszkanego przez magów
              i mutantów, zwanego „Miastem”, gdzie spotyka barwne postacie i
              gdzie ostatecznie odkrywa, że ​​jego sny to znacznie więcej, niż
              sobie wyobrażał.
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/tenebres.webp'></img>
          </div>
          <div>
            <h1 className={styles.title}>Ténèbres</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Christophe Bec</li>
              <li>Ilustracje</li>
              <li>Iko</li>
            </ul>
            <p>
              Historia fantasty z elementami SF. Niezwykle fajnie rysowana, z
              rozmachem. Taki francuski komiksowy blockbuster, który zebrał
              dobre recenzje. Dość świeża rzecz. Zbieramy w jeden integral pięć
              tomów francuskich.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-21294-BD-Tenebres-Bec-Iko.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/shane.webp'></img>
          </div>
          <div>
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
              „Shane”. Komiksowa historia utrzymana w konwencji graficznej
              podobnej do „Thorgala”. Zresztą kolory do tego komiksu kładła
              Graza, czyli żona Zbigniewa Kasprzaka. Jak ktoś kocha takie
              komiksy w klimatach G. Rosińskiego czy Z. Kasprzaka, osadzone w
              realiach powiedzmy „średniowiecznych”, to myślę że będzie się
              bardzo dobrze bawił. Bardzo wysoko oceniana pozycja. Jeden z tych
              komiksów, które są uważane we Francji za ważne.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-1033-BD-Shane.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/chroniques-barbares.webp'></img>
          </div>
          <div>
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
              „Kroniki barbarzyńców” – kultowy komiks. Ma zresztą swoją polską
              historię, bo już kiedyś próbowano go wydać. Dawno temu, gdy rynek
              dopiero raczkował. Ostatecznie się nie udało. Brutalny komiks,
              realistycznie pokazujące zarówno sceny seksu, jak i przemocy czy
              tortur. To fikcyjna opowieść o wikingach, ale autor dołożył
              starań, by otoczka historyczna się zgadzała. Brutalnie, bez
              cenzury, mocno i dosadnie. Bardzo krwawy komiks. „Thorgal” to przy
              tym bajeczka dla dzieci.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-1153-BD-Chroniques-Barbares.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/tales-of-telguuth.webp'></img>
          </div>
          <div>
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
              Tales of Telguuth”. To hołd złożony Steve'owi Moore'owi kultowej
              postaci dla brytyjskiego rynku. Wstęp do komiksu napisał sam Alan
              Moore. To krótkie historie fantasy rysowane przez najlepszych
              twórców z „2000AD”. Bajka, po prostu piękna rzecz. Dwie historie z
              tego albumu ukazały się kiedyś w „Świecie Komiksu”.
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/zenith.webp'></img>
          </div>
          <div>
            <h1 className={styles.title}>Zenith</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Grant Morrison </li>
              <li>Ilustracje</li>
              <li>Steve Yewell</li>
            </ul>
            <p>
              Jak jesteś fanem superbohaterów, to musisz to mieć. Pozycja ta na
              nowo zdefiniowała bowiem superbohaterskie historie. Dzięki temu
              komiksowi Grant Morrison wdarł się do amerykańskiego świata
              super-hero. Opowieść, w której główny bohater jest owszem
              superbohaterem, ale zupełnie nie pasuje do takiego wyobrażenia jak
              Superman czy Batman. Jest ironiczny, mający wszystko gdzieś. Jest
              muzykiem rockowym, który najchętniej by imprezował. Zostaje
              zmuszony do walki z neofaszystowskimi grupami. Wszystko to w stylu
              Granta Morrisona, więc LSD i punk rock wyciekają z tego komiksu
              pełnymi garściami.
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/nemesis-the-warlock.webp'></img>
          </div>
          <div>
            <h1 className={styles.title}>Nemesis The Warlock</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Pat Mills</li>
              <li>Ilustracje</li>
              <li>Jesus Redondo i Kevin O’Neill</li>
            </ul>
            <p>
              To będą trzy tomy sprzedawane razem. Absolutnie kultowa rzecz na
              rynku brytyjskim. Komiks, który zdefiniował na nowo w zasadzie
              wszystko - odmienił nawet „2000AD”. Pat Mills i mnóstwo zdolnych,
              fantastycznych rysowników, głównie w czerni i bieli. Odjechana
              space opera ze sporym zacięciem społecznym i politycznym. Jest tam
              po prostu esencja tego, co jest w „2000AD”. Jak ktoś kocha komiksy
              brytyjskie z tego wydawnictwa, zwłaszcza ze złotego czasu lat
              80/90, to będzie po prostu wniebowzięty. Tłumaczyć będzie Jacek
              Żuławnik, czyli topka tłumaczy komiksowych i książkowych. Tylko
              czekać.
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/dans-lombre-du-soleil.webp'></img>
          </div>
          <div>
            <h1 className={styles.title}>Dans L'Ombre du Solei</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Scenariusz</li>
              <li>Colin Wilson</li>
              <li>Ilustracje</li>
              <li>Colin Wilson</li>
            </ul>
            <p>
              To komiks pochodzący z lat 80-tych, Jak się kocha Yansa G.
              Rosińskiego i Funky Kovala B. Polcha to gwarantujemy miłość od
              pierwszego wejrzenia. Piękna stara szkoła, realistyczna kreska.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-557-BD-Dans-l-ombre-du-soleil.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/berceuse-assassine.webp'></img>
          </div>
          <div>
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
              Fajna opowieść, której każdy tom pokazuje tę samą historię z innej
              perspektywy. Dopiero w finale - po trzecim tomie – uzyskujemy
              wiedzę na temat tego, co rzeczywiście wydarzyło się w tej historii
              kryminalnej.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/serie-95-BD-Berceuse-assassine.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.comics_preview}>
          <div className={styles.comics_preview_img}>
            <img src='./img/zapowiedzi/le-facteur-cratophane.webp'></img>
          </div>
          <div>
            <h1 className={styles.title}>Le Facteur Cratophane</h1>
            <ul className={`${styles.comics_data} ${styles.main_info}`}>
              <li>Tytył oryginalny</li>
              <li>Le Facteur Cratophane</li>
              <li>Scenariusz</li>
              <li>Éric Liberge</li>
              <li>Ilustracje</li>
              <li>Éric Liberge</li>
            </ul>
            <p>
              Dans un Moyen-Âge pieux et sévère, Philibert Étienne ordonne à son
              subalterne de réécrire les termes de la vie après la mort. Sans
              savoir qu'il va s'y trouver projeté et y contempler de ses propres
              yeux sa maudite création : une cité entière faite d'ossements,
              peuplée de squelettes sans chair mais à la conscience claire,
              repaire de voleurs et de criminels condamnés à errer sans fin sous
              un ciel plus noir que l'encre.
            </p>
            <p>
              La cratophanie est la représentation symbolique du pouvoir... et
              les lecteurs de la saga baroque d'Éric Liberge savent combien le
              personnage du facteur est un homme (un squelette !) de pouvoir.
              C'est à sa découverte que nous invite ce copieux prologue à
              Monsieur Mardi-Gras Descendres.
            </p>
            <p>
              <a
                href='https://www.bedetheque.com/BD-Monsieur-Mardi-Gras-Descendres-Tome-0-Le-Facteur-Cratophane-Prologue-a-Monsieur-Mardi-Gras-Descendres-274543.html'
                target='_blank'
              >
                <b>Link BD</b>
              </a>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Previews;
