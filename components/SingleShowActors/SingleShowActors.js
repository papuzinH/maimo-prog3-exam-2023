import React from 'react';
import Image from 'next/image';
import styles from './SingleShowActors.module.css';

const SingleShowActors = ({ actors }) => {
  return (
    <section className={styles.singleShowActorsContainer}>
      <h2>Actors</h2>
      <div className="grid">
        {actors.map((actor) => (
          //person.name, person.country.name, person.image.medium, person.character.name.
          <div key={actor.person.id} className={`col_3 ${styles.actorsCard}`}>
            {actor.person.image && (
              <Image
                src={actor.person.image.medium}
                width={100}
                height={100}
                alt={actor.person.name}
              />
            )}
            <h4>{actor.person.name}</h4>
            <p>Country: {actor.person.country.name}</p>
            {actor.character ? <p>Character: {actor.character.name}</p> : 'pepe'}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SingleShowActors;
