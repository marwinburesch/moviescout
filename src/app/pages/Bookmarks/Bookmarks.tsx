import React from 'react';
import styles from './Bookmarks.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import useBookmarkedMovies from '../../hooks/useBookmarkedMovies';

export default function Bookmarks(): JSX.Element {
  const { bookmarkedMovies, isLoading, errorMessage, handleBookmarkClick } =
    useBookmarkedMovies();

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Header isHighlighted withBackButton>
          Bookmarks
        </Header>
      </section>
      <main className={styles.cardWrapper}>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        {!errorMessage && isLoading && <p>Loading...</p>}
        {bookmarkedMovies &&
          bookmarkedMovies.length > 0 &&
          bookmarkedMovies.map((movie) => (
            <Card
              key={movie.id}
              onBookmarkClick={() => handleBookmarkClick(movie.id)}
              isBookmarked={true}
              children={movie.overview}
              {...movie}
            />
          ))}
      </main>

      <Navigation activeLink="bookmark"></Navigation>
    </div>
  );
}
