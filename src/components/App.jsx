import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import ComicDetails from './ComicDetails';
import { ThemeProvider } from './ThemeContext';
import CustomizationPanel from './CustomizationPanel';
import Footer from './Footer';
import Previews from '../pages/Previews';
import AboutUs from '../pages/AboutUs';
import WhereToBuy from '../pages/WhereToBuy';

const App = () => {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);

  
  
  useEffect(() => {
    fetch('/comics.json')
      .then((response) => response.json())
      .then((data) => setComics(data))
      .catch((error) => console.error('Error fetching comics:', error));
  }, []);

  const handleComicClick = (comicId) => {
    const selected = comics.find((comic) => comic.id === comicId);
    setSelectedComic(selected);
  };

  return (
    <Router>
      <ThemeProvider>
        <Navigation comicsData={comics} selectedComic={selectedComic} />

        <Routes>
          <Route
            path='/'
            element={<CustomizationPanel comicsData={comics} />}
          />
          <Route
            path='/komiks/:url'
            element={<ComicDetails comicsData={comics} />}
          />
          <Route path='/plany-wydawnicze' element={<Previews />} />
          <Route path='/o-nas' element={<AboutUs />} />
          <Route path='/gdzie-kupic' element={<WhereToBuy />} />
        </Routes>

        {selectedComic &&
          selectedComic.img &&
          selectedComic.img.coverMainSiteDesktop(
            <ComicDetails comicsData={comics} selectedComic={selectedComic} />
          )}

        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
