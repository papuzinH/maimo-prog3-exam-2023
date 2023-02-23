import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import styles from './Show.module.css';

const Show = ({ id }) => {
  const [objectShow, setObjectShow] = useState({
    name: '',
    image: {
      original: '',
    },
    rating: '',
    language: '',
    genres: [],
  });
  const [loading, setLoading] = useState(false);
  const getShow = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
      setObjectShow(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getShow();
  }, []);

  return (
    <div className={styles.showCardContainer}>
      {loading ? (
        <p>Loading</p>
      ) : (
        <div className={styles.showCard}>
          {objectShow.image && (
            <Image src={objectShow.image.original} width={200} height={200} />
          )}
          <h1>{objectShow.name}</h1>
          <div className={styles.infoShowCardContainer}>
            <div className={styles.firstInfoShowCard}>
              <p>Rating: {objectShow.rating.average}</p>
              <p>Language: {objectShow.language}</p>
            </div>
            <p>Genres:</p>
            <ul className={styles.genresShowCard}>
              {objectShow.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
          <Link href={`/shows/${objectShow.id}`} >
            <a className={styles.buttonShowCard}>More info</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Show;
