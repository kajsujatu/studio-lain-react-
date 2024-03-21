// CustomizationPanel.jsx
import React, { useState, useEffect } from 'react';
import styles from './CustomizationPanel.module.css';
import ComicList from './ComicList';
import Select from 'react-select';


const sortOptions = [
  { value: 'najnowsze', label: 'Najnowsze' },
  { value: 'najstarsze', label: 'Najstarsze' },
  { value: 'alfabetycznie-a-z', label: 'Alfabetycznie A-Z' },
  { value: 'alfabetycznie-z-a', label: 'Alfabetycznie Z-A' },
];


const CustomizationPanel = ({ comicsData }) => {



  const [sortOption, setSortOption] = useState('najnowsze');
  const [filterOption, setFilterOption] = useState('wszystkie');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredComics, setFilteredComics] = useState([]);

  
  useEffect(() => {
    if (!comicsData) {
      return;
    }

    const filteredAndSortedComics = comicsData
    .filter((comic) => {
      if (filterOption === 'wszystkie') {
        return true;
      } else if (filterOption === 'zapowiedzi') {
        return comic.preview === true;
      } else if (filterOption === 'nowosci') {
        return comic.new === true;
      } else if (filterOption === 'dostepne') {
        return comic.availability === true;
      } else if (filterOption === 'ostatnie-sztuki') {
        return comic.lastItems === true;
      } else if (filterOption === 'wyprzedane') {
        return comic.availability === false &&  !comic.preview;
      } else {
        return comic.filter.includes(filterOption);
      }
    })
      .filter((comic) => {
        return comic.title.toLowerCase().includes(searchQuery.toLowerCase());
      })
      .sort((a, b) => {

        if (sortOptions[0].value === 'najnowsze') {
          return b.id - a.id;
        } else if (sortOptions[1].value === 'najstarsze') {
          return a.id - b.id;
        } else if (sortOptions[2].value === 'alfabetycznie-a-z') {
          return a.title.localeCompare(b.title);
        } else if (sortOptions[3].value === 'alfabetycznie-z-a') {
          return b.title.localeCompare(a.title);
        }
      });

    setFilteredComics(filteredAndSortedComics);
  }, [sortOptions, filterOption, searchQuery, comicsData]);

  const handleSortChange = (e) => {
    setSortOption(e.value);
    console.log(e.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className={styles.customize}>


      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={sortOptions[0]}
               name="color"
        options={sortOptions}
        placeholder="Sortuj"
        onChange={handleSortChange}
      />

    
     {/*    <div className={styles.sort}>
          <select
            name='sort'
            className={styles.sort_input}
            size='1'
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value='najnowsze'>Najnowsze</option>
            <option value='najstarsze'>Najstarsze</option>
            <option value='alfabetycznie-a-z'>Alfabetycznie A-Z</option>
            <option value='alfabetycznie-z-a'>Alfabetycznie Z-A</option>
          </select>
        </div> */}






  
        <div className={styles.filters}>
          <label htmlFor='filters'>Filtruj:</label>
          <select
            name='filters'
            className={styles.filters_input}
            size='1'
            value={filterOption}
            onChange={handleFilterChange}
          >
            <option value='wszystkie'>Wszystkie</option>
            <option value='zapowiedzi'>Zapowiedzi</option>
            <option value='nowosci'>Nowości</option>
            <option value='dostepne'>Dostępne</option>
            <option value='ostatnie-sztuki'>Ostatnie sztuki</option>
            <option value='wyprzedane'>Wyprzedane</option>
            <option value='antologie-integrale'>Antologie/Integrale</option>
            <option value='alan-moore'>Alan Moore</option>
            <option value='enrique-fernandez'>Enrique Fernandez</option>
            <option value='lukasz-kowalczuk'>Łukasz Kowalczuk</option>
            <option value='seria-abc-warriors'>seria ABC Warriors</option>
            <option value='seria-absalom'>seria Absalom</option>
            <option value='seria-sedzia-dredd'>seria Sędzia Dredd</option>
            <option value='seria-uniwersum-dredda-sedzia-anderson'>
              seria uniwersum Dredda - Sędzia Anderson
            </option>
            <option value='seria-uniwersum-dredda-lawless'>
              seria uniwersum Dredda - Lawless
            </option>
            <option value='seria-uniwersum-dredda-mroczni-sedziowie'>
              seria uniwersum Dredda - Mroczni Sędziowie
            </option>
            <option value='seria-slaine'>seria Sláine</option>
            <option value='seria-solo'>seria SOLO</option>
            <option value='seria-stickleback'>seria Stickleback</option>
            <option value='seria-straznicy-masery'>
              seria Strażnicy Masery
            </option>
            <option value='seria-yiu'>seria Yiu</option>
          </select>
        </div>

        <div className={styles.search_main_cover}>
          <label htmlFor='search-main-cover-input'>Szukaj tytułu:</label>
          <input
            className={styles.search_main_cover_input}
            value={searchQuery}
            onInput={handleSearchChange}
          />
        </div>
      </div>

      {/* Sprawdź, czy comicsData są dostępne przed przekazaniem do ComicList */}
      {comicsData ? <ComicList comicsData={filteredComics} /> : null}
    </>
  );
};

export default CustomizationPanel;
