import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import styles from './ComicDetails.module.css';
import parse from 'html-react-parser';
import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { useTheme } from './ThemeContext';

const ComicDetails = ({ comicsData }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const [showBuyLinks, setShowBuyLinks] = useState(false);

  const { url } = useParams();
  const selectedComic = comicsData.find((comic) => comic.url === url);

  const [selectedCover, setSelectedCover] = useState(
    selectedComic?.img?.coverBasic
  );

  const [selectedComicCover, setSelectedComicCover] = useState(null);

  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  useEffect(() => {
    if (selectedComic) {
      setSelectedComicCover(selectedComic);
      setSelectedCover(selectedComic?.img.coverBasic);
    }
  }, [selectedComic]);

  useEffect(() => {
    if (selectedComic) {
      document.title = selectedComic
        ? `Studio Lain - ${selectedComic.title}`
        : 'Studio Lain';
    }
  }, [selectedComic]);

  useEffect(() => {
    // window.scrollTo(0, 0);
  }, [selectedComicCover]);

  const handleThumbnailClick = (thumbnail) => {
    setSelectedCover(thumbnail);
    setSelectedComicCover(selectedComic.relatedComic);
  };
  const handleBuyClick = () => {
    setShowBuyLinks(!showBuyLinks);
  };

  // simplelightbox
  useEffect(() => {
    if (!selectedComic) {
      return;
    }

    const lightbox = new SimpleLightbox('.gallery a');

    lightbox.on('show.simplelightbox', function (e) {
      console.log('Image ' + (e.index + 1) + ' shown');
    });

    return () => {
      lightbox.destroy();
    };
  }, [selectedComic]);

  if (!selectedComic) {
    return <div>Nie znalazłem takiej strony.</div>;
  }

  return (
    <>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs_element}>
          <Link className={styles.back_link_top} onClick={handleClick}>
            &#8678; Wróć
          </Link>
        </div>
        <div className={styles.breadcrumbs_element}>
          <Link to='/' className={styles.catalog_link_top}>
            Katalog
          </Link>
        </div>
      {/*   <div className={styles.breadcrumbs_element}>
          <span className={styles.title}>{parse(selectedComic.title)}</span>
        </div> */}
      </div>

      <main className={styles.container_page}>
        <div className={styles.container_covers}>
          <img src={selectedCover} alt='' className={styles.cover_big} />

          {selectedComic.img.coverAlternative1Thumbnail && (
            <>
              <p className={styles.choose_cover}>Wybierz wariant okładki:</p>
              <div className={styles.covers_thumbnails}>
                <div
                  className={styles.cover_regular_thumbnail}
                  style={{
                    backgroundImage: `url(${selectedComic.img.coverBasicThumbnail})`,
                    display: 'inline-block',
                    opacity:
                      selectedCover === selectedComic.img.coverBasic
                        ? '50%'
                        : '100%',
                  }}
                  onClick={() =>
                    handleThumbnailClick(selectedComic.img.coverBasic)
                  }
                ></div>
                <div
                  className={styles.cover_alternative1_thumbnail}
                  style={{
                    backgroundImage: `url(${selectedComic.img.coverAlternative1Thumbnail})`,
                    display: 'inline-block',
                    opacity:
                      selectedCover === selectedComic.img.coverAlternative1
                        ? '50%'
                        : '100%',
                  }}
                  onClick={() =>
                    handleThumbnailClick(selectedComic.img.coverAlternative1)
                  }
                ></div>
                {selectedComic.img.coverAlternative2Thumbnail && (
                  <div
                    className={styles.cover_alternative2_thumbnail}
                    style={{
                      backgroundImage: `url(${selectedComic.img.coverAlternative2Thumbnail})`,
                      display: 'inline-block',
                      opacity:
                        selectedCover === selectedComic.img.coverAlternative2
                          ? '50%'
                          : '100%',
                    }}
                    onClick={() =>
                      handleThumbnailClick(selectedComic.img.coverAlternative2)
                    }
                  ></div>
                )}
              </div>
            </>
          )}
        </div>

        <div className={styles.container_info}>
          <h1 className={styles.title}>{parse(selectedComic.title)}</h1>

          <ul className={`${styles.comics_data} ${styles.main_info}`}>
            <li>Scenariusz</li>
            <li>{parse(selectedComic.writer)}</li>
            <li>Ilustracje</li>
            <li>{parse(selectedComic.art)}</li>
            <li>Tłumaczenie</li>
            <li>{parse(selectedComic.translator)}</li>
            <li>Korekta</li>
            <li>{parse(selectedComic.proofreader)}</li>
          </ul>

          <span className={styles.comics_data_headline}>Dane techniczne:</span>
          <ul className={`${styles.comics_data} ${styles.details}`}>
            <li>Format</li>
            <li>{selectedComic.details.format}</li>
            <li>Liczba stron</li>
            <li>{selectedComic.details.pages}</li>
            <li>Druk</li>
            <li>{selectedComic.details.print}</li>
            <li>Papier</li>
            <li>{selectedComic.details.paper}</li>
            <li>Oprawa</li>
            <li>{selectedComic.details.typeOfBookCover}</li>
            <li>Data wydania</li>
            <li>{selectedComic.details.date}</li>
            <li>Wydanie</li>
            <li>{selectedComic.details.edition}</li>
            <li>ISBN</li>
            <li>{selectedComic.details.ISBN}</li>
            <li>Cena</li>
            <li>{selectedComic.details.price}</li>
          </ul>

          {selectedComic.availability &&
            selectedComic.availability === true && (
              <div className={styles.buy_element}>
                <button className={styles.buy} onClick={handleBuyClick}>
                  TU KUPISZ ONLINE
                </button>

                <ul
                  className={`${styles.buy_links} ${
                    showBuyLinks ? styles.buy_links_on : ''
                  }`}
                >
                  {/* Iteruj przez buyShops i buyLinks, tworząc <li> dla każdego */}
                  {Object.keys(selectedComic.buyShops).map((key, index) => (
                    <li className={styles.buy_link} key={index}>
                      <a
                        href={selectedComic.buyLinks[`buyLink${index + 1}`]}
                        target='_blank'
                      >
                        {selectedComic.buyShops[`buyShop${index + 1}`]}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}

          <span className={styles.comics_data_headline}>
            Dane oryginalnego wydania:
          </span>
          <ul
            className={`${styles.comics_data} ${styles.details_original_edition}`}
          >
            <li>Tytuł</li>
            <li>{parse(selectedComic.detailsOriginalEdition.title)}</li>
            <li>Wydawca</li>
            <li>{selectedComic.detailsOriginalEdition.publisher}</li>
            <li>Data wydania</li>
            <li>{selectedComic.detailsOriginalEdition.date}</li>
          </ul>
        </div>

        <div className={styles.description}>
          {parse(selectedComic.description)}
        </div>

        <div className={styles.inside_panels}>
          <div className={styles.inside_panels_headline}>
            <img
              className={`${styles.icon} ${styles.icon_zoom_in}`}
              src='../img/icon-zoom-in.svg'
              alt='Powiększ'
            />
            <span className={styles.inside_samples}>PRZYKŁADOWE PLANSZE</span>
          </div>
          <div className={`gallery ${styles.img_inside}`}>
            {selectedComic.img.insidePanels &&
              Object.keys(selectedComic.img.insidePanels).map((key, index) => (
                <Link key={index} to={selectedComic.img.insidePanels[key]}>
                  <img
                    className={styles.inside_thumbnails}
                    src={
                      selectedComic.img.insidePanelsThumbnails[
                        `${key}Thumbnail`
                      ]
                    }
                    alt={selectedComic.img.insidePanelsAlt[`${key}Alt`]}
                  />
                </Link>
              ))}
          </div>
        </div>

        {selectedComic.review &&
          selectedComic.review.reviewLinks &&
          Object.keys(selectedComic.review.reviewLinks).length > 0 && (
            <div className={styles.review_panel}>
              <span className={styles.inside_samples}>RECENZJE</span>

              {Object.keys(selectedComic.review.reviewLinks).map(
                (key, index) => (
                  <Link
                    key={index}
                    to={selectedComic.review.reviewLinks[key]}
                    rel='noopener noreferrer'
                    className={styles.review_link}
                    target='_blank'
                  >
                    <p className='title'>
                      {selectedComic.review.reviewTitles[`${key}Title`]}
                    </p>
                  </Link>
                )
              )}
            </div>
          )}

        {selectedComic.relatedComics &&
          selectedComic.relatedComics.relatedComicsLinks &&
          Object.keys(selectedComic.relatedComics.relatedComicsLinks).length >
            0 && (
            <div className={styles.related_comics_section}>
              {Object.keys(selectedComic.relatedComics.relatedComicsLinks).map(
                (key, index) => (
                  <Link
                    key={index}
                    to={`/komiks/${selectedComic.relatedComics.relatedComicsLinks[key]}`}
                    className={styles.related_comics}
                    onClick={() => {
                      handleThumbnailClick(selectedComic.img.coverBasic);
                      window.scrollTo(0, 0);
                    }}
                  >
                    <img
                      src={
                        selectedComic.relatedComics.relatedComicsImg[
                          `${key}Img`
                        ]
                      }
                      alt={`Powiązany tytuł ${index + 1}`}
                      className={styles.related_comics}
                    />
                  </Link>
                )
              )}
            </div>
          )}
      </main>
    </>
  );
};

export default ComicDetails;
