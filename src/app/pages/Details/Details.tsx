import React from 'react';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Details.module.css';
import useMovieDetails from '../../hooks/useMovieDetails';
import { useParams } from 'react-router';
import ActionLink from '../../components/ActionLink/ActionLink';

export default function Details(): JSX.Element {
  const { id }: { id: string } = useParams();
  const { movie } = useMovieDetails(id);

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <Header withBackButton />
      </header>

      <section className={styles.details}>
        <img className={styles.image} src={movie?.image} />
        <div className={styles.info}>
          <h2 className={styles.title}>{movie?.title}</h2>
          <p className={styles.description}>{movie?.overview}</p>
          <ActionLink
            children="See on The Movie DB"
            url={`https://www.themoviedb.org/movie/${id}`}
            hasIcon={false}
          />
        </div>
      </section>

      <Navigation activeLink="search" />
    </main>
  );
}
