import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Details.module.css';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useParams } from 'react-router';
import ActionLink from '../../components/ActionLink/ActionLink';

export default function Details(): JSX.Element {
  const { id }: { id: string } = useParams();
  const { movie } = useMovieDetails(id);
  const [readMore, setReadMore] = useState(false);

  function handleReadMore() {
    setReadMore(!readMore);
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Header withBackButton />
      </header>

      <section className={styles.details}>
        <img className={styles.image} src={movie?.image} />
        <div className={styles.info}>
          <h2 className={styles.title}>{movie?.title}</h2>
          <p className={!readMore ? styles.description : styles.readMore}>
            {movie?.overview}
          </p>
          <span onClick={handleReadMore} className={styles.ctaText}>
            {!readMore ? 'Read more' : 'Read less'}
          </span>
          <ActionLink
            children="See on The Movie DB"
            url={`https://www.themoviedb.org/movie/${id}`}
            hasIcon={false}
            className={styles.actionLink}
          />
        </div>
      </section>

      <Navigation activeLink="search" />
    </main>
  );
}
