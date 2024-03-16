import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate(-1);

  return (
    <>
      <div className={styles.breadcrumbs}>
        <div className={styles.breadcrumbs_element}>
          <Link to='/' className={styles.back_link_top} onClick={handleClick}>
            Wróć
          </Link>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
