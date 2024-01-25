import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './ComicList.module.css';
import parse from 'html-react-parser';

const ComicList = ({ comicsData }) => {

  useEffect(() => {
    document.title = `Studio Lain`;
  }, []);
  
  const [soldCovers, setSoldCovers] = useState([]);

  useEffect(() => {
    const unavailableCovers = comicsData.filter((comic) => !comic.availability);
    setSoldCovers(unavailableCovers);
  }, [comicsData]);

  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 533px)').matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 533px)');
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={styles.container}>
      {comicsData.map((comic) => (
        <Link
          to={`/komiks/${comic.url}`}
          key={comic.url}
          className={`${styles.cover} 
        ${soldCovers.includes(comic) & !comic.preview ? styles.sold : ''} 
        ${comic.new ? styles.new : ''} 
        ${comic.lastItems ? styles.last_items : ''}
        ${comic.preview ? styles.preview : ''}
        `}
        >
          <img
            src={
              isMobile
                ? comic.img.coverMainSiteMobile
                : comic.img.coverMainSiteDesktop
            }
            alt={comic.title}
            className={styles.cover_picture}
          />
          <div className={styles.title_under_cover}>{parse(comic.title)}</div>
        </Link>
      ))}
    </div>
  );
};

export default ComicList;
