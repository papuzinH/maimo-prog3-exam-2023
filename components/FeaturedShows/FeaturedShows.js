import React from 'react';
import Show from '../Show/Show';
import styles from './FeaturedShows.module.css';

const FeaturedShows = () => {
  const shows = [167, 200, 190];
  return (
    <>
      <h1 className={styles.title}>Featured Shows</h1>
      <div className={`grid ${styles.featuredShowsContainer}`}>
        {shows.map((show) => (
          <div key={show} className={'col_4'}>
            <Show  id={show} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedShows;
