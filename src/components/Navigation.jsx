import React, { useState, useEffect } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import styles from './Navigation.module.css';
import parse from 'html-react-parser';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Navigation = ({ comicsData }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  const toggleDarkMode = (checked) => {
    toggleTheme();
  };

  const [navbarLinksVisible, setNavbarLinksVisible] = useState(false);

  const [searchBarVisible, setSearchBarVisible] = useState(false);

  const toggleNavbarLinks = () => {
    setNavbarLinksVisible(!navbarLinksVisible);
  };

  const toggleSearchBar = () => {
    setSearchBarVisible(!searchBarVisible);
  };

  const { url } = useParams();
  const selectedComic = comicsData.find((comic) => comic.url === url);

  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInput = () => {
    const newSearchResults = comicsData.filter(
      (comic) =>
        comic.title.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.writer.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.art.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.translator.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.proofreader.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.description.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.details.format
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        comic.details.print.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.details.paper.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.details.typeOfBookCover
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        comic.details.date.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.details.edition
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        comic.details.ISBN.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.details.price.toLowerCase().includes(searchInput.toLowerCase()) ||
        comic.detailsOriginalEdition.title
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        comic.detailsOriginalEdition.publisher
          .toLowerCase()
          .includes(searchInput.toLowerCase()) ||
        comic.detailsOriginalEdition.date
          .toLowerCase()
          .includes(searchInput.toLowerCase())
    );

    setSearchResults(newSearchResults);
  };

  useEffect(() => {}, [searchResults]);

  const clearSearchResults = () => {
    setSearchInput('');
    setSearchResults([]);
  };

  return (
    <header>
      <nav className={styles.navbar}>
        <NavLink
          to='/'
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          <img
            className={styles.logo}
            src='../img/studio-lain_logo.png'
            alt='Studio Lain'
          />
        </NavLink>
        <ul
          aria-label='Primary'
          className={`${styles.navbar_links} ${
            navbarLinksVisible ? styles.visible : styles.hidden
          }`}
        >
          <li>
            <NavLink
              to='/plany-wydawnicze'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              plany
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              katalog
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/o-nas'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              o nas
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/gdzie-kupic'
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
            >
              gdzie kupić?
            </NavLink>
          </li>
          <li className={styles.facebook}>
            <a
              aria-label='facebook'
              href='https://pl-pl.facebook.com/StudioLain'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className={styles.icon}
                src='../img/icon-facebook.svg'
                alt='Facebook'
              />
            </a>
          </li>
        </ul>
        <div className={styles.additions}>
          <img
            onClick={toggleSearchBar}
            className={styles.icon_search}
            src='../img/icon-search.svg'
            alt='Wyszukaj'
          />
          <DarkModeSwitch
            className={styles.toggle_button_theme}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={28}
            moonColor='#9d9d9d'
            sunColor='#9d9d9d'
          />
        </div>
      </nav>
      <a href='#' className={styles.toggle_button} onClick={toggleNavbarLinks}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
      <div
        className={`${styles.search_options} ${
          searchBarVisible ? styles.hidden : styles.visible
        }`}
      >
        <div className={styles.search_layout}>
          <div className={styles.container}>
            <input
              className={styles.search_input}
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
                handleSearchInput();
              }}
            />
            <div className={styles.icon_container}>
              <img
                className={`${styles.icon} ${styles.icon_search_content}`}
                src='../img/icon-search.svg'
                alt='Wyszukaj'
                onClick={handleSearchInput}
              />
              <img
                className={styles.icon}
                src='../img/icon-return.svg'
                alt='Wyczyść'
                onClick={clearSearchResults}
              />
              <img
                className={styles.icon}
                onClick={toggleSearchBar}
                src='../img/icon-close.svg'
                alt='Zamknij'
              />
            </div>
            <output className={styles.search_output}>
              {searchResults.map((result) => (
                <Link to={`/komiks/${result.url}`} onClick={toggleSearchBar}>
                  <div className={styles.search_output_single} key={result.id}>
                    {parse(result.title)}
                  </div>
                </Link>
              ))}
            </output>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
