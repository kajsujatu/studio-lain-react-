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

const filterOptions = [
  { value: 'wszystkie', label: 'Wszystkie' },
  { value: 'zapowiedzi', label: 'Zapowiedzi', color: 'red' },
  { value: 'nowosci', label: 'Nowości' },
  { value: 'dostepne', label: 'Dostępne' },
  { value: 'ostatnie-sztuki', label: 'Ostatnie sztuki' },
  { value: 'wyprzedane', label: 'Wyprzedane' },
  { value: 'antologie-integrale', label: 'Antologie/Integrale' },
  { value: 'alan-moore', label: 'Alan Moore' },
  { value: 'enrique-fernandez', label: 'Enrique Fernandez' },
  { value: 'lukasz-kowalczuk', label: 'Łukasz Kowalczuk' },
  { value: 'seria-abc-warriors', label: 'seria ABC Warriors' },
  { value: 'seria-absalom', label: 'seria Absalom' },
  { value: 'seria-sedzia-dredd', label: 'seria Sędzia Dredd' },
  {
    value: 'seria-uniwersum-dredda-sedzia-anderson',
    label: 'seria uniwersum Dredda: Sędzia Anderson',
  },
  {
    value: 'seria-uniwersum-dredda-lawless',
    label: 'seria uniwersum Dredda: Lawless',
  },
  {
    value: 'seria-uniwersum-dredda-mroczni-sedziowie',
    label: 'seria uniwersum Dredda: Mroczni Sędziowie',
  },
  { value: 'seria-slaine', label: 'seria Sláine' },
  { value: 'seria-solo', label: 'seria SOLO' },
  { value: 'seria-stickleback', label: 'seria Stickleback' },
  { value: 'seria-straznicy-masery', label: 'seria Strażnicy Masery' },
  { value: 'seria-yiu', label: 'seria Yiu' },
];

const CustomizationPanel = ({ comicsData }) => {
  const [sortOption, setSortOption] = useState('najnowsze');
  const [filterOption, setFilterOption] = useState(['wszystkie']);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredComics, setFilteredComics] = useState(comicsData);
  useEffect(() => {
    if (!comicsData) {
      return;
    }

    const sortedComics = comicsData.slice().sort((a, b) => {
      switch (sortOption) {
        case 'najnowsze':
          return b.id - a.id;
        case 'najstarsze':
          return a.id - b.id;
        case 'alfabetycznie-a-z':
          return a.title.localeCompare(b.title);
        case 'alfabetycznie-z-a':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    const filteredComics = sortedComics.filter((comic) => {
      if (filterOption.includes('wszystkie')) {
        return true; // Zwróć wszystkie komiksy
      }
    
      return filterOption.some((option) => {
        switch (option) {
          case 'zapowiedzi':
            return comic.preview === true;
          case 'nowosci':
            return comic.new === true;
          case 'dostepne':
            return comic.availability === true;
          case 'ostatnie-sztuki':
            return comic.lastItems === true;
          case 'wyprzedane':
            return comic.availability === false && !comic.preview;
          default:
            return comic.filter.includes(option);
        }
      });
    }).filter((comic) => {
      return comic.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    setFilteredComics(filteredComics);
  }, [sortOption, filterOption, searchQuery, comicsData]);

  
  const handleSortChange = (e) => {
    setSortOption(e.value);
    console.log(e.value);
  };

  const handleFilterChange = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setFilterOption(selectedValues.length ? selectedValues : ['wszystkie']);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <div className={styles.customize}>
        <Select
          className='basic-single'
          classNamePrefix='select'
          name='sort'
          options={sortOptions}
          placeholder='Sortuj'
          onChange={handleSortChange}
        />

        <Select
          className='basic-single'
          classNamePrefix='select'
          isMulti
          name='filters'
          options={filterOptions}
          placeholder='Filtruj'
          onChange={handleFilterChange}
        />

        <div className={styles.search_main_cover}>
          <input
            className={styles.search_main_cover_input}
            value={searchQuery}
            onInput={handleSearchChange}
            placeholder='Szukaj tytułu...'
          />
        </div>
      </div>

      {comicsData ? <ComicList comicsData={filteredComics} /> : null}
    </>
  );
};

export default CustomizationPanel;
