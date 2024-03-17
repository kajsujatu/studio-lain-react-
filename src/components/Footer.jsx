import React, { useState, useEffect } from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const updateYear = () => {
      setCurrentYear(new Date().getFullYear());
    };

    const intervalId = setInterval(updateYear, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return <div className={styles.footer}>Studio Lain © {currentYear}</div>;
};

export default Footer;
