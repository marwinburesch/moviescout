import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import useLatestMovies from '../../hooks/useLatestMovies';
import useTopFiveMovies from '../../hooks/useTopFiveMovies';

export default function Home(): JSX.Element {
  const [bookmarked, setBookmarked] = useState<number[]>([436969, 675445]);

  const { latestMovies } = useLatestMovies();

  const { topFiveMovies } = useTopFiveMovies();

  function handleBookmarkClick(id: number) {
    if (bookmarked.includes(id)) {
      setBookmarked(bookmarked.filter((element) => element !== id));
    } else {
      setBookmarked([...bookmarked, id]);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Header className={styles.header}>Top Five</Header>
        <section className={styles.topFiveCards}>
          {latestMovies?.map((movie) => {
            return (
              <Card
                key={movie.id}
                layout="wide"
                {...movie}
                children={movie.overview}
                isBookmarked={bookmarked.includes(movie.id)}
                onBookmarkClick={handleBookmarkClick}
              />
            );
          })}
        </section>

        <section className={styles.cardCompact}>
          <div className={styles.latestHeader}>
            <Header>Latest</Header>
            <div className={styles.seeMore}>
              <Link to="/discover">See more</Link>
            </div>
          </div>
          <div className={styles.latestContainer}>
            {topFiveMovies?.map((movie) => {
              return (
                <Card
                  key={movie.id}
                  layout="detail"
                  {...movie}
                  children={movie.overview}
                  isBookmarked={bookmarked.includes(movie.id)}
                  onBookmarkClick={handleBookmarkClick}
                />
              );
            })}
          </div>
        </section>
      </div>
      <Navigation activeLink="home" />
    </div>
  );
}
