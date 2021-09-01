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
    let newBookmarked = null;
    if (bookmarked.includes(id)) {
      newBookmarked = bookmarked.filter((element) => element !== id);
      setBookmarked(newBookmarked);
    } else {
      newBookmarked = [...bookmarked, id];
      setBookmarked(newBookmarked);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Header className={styles.header}>Top Five</Header>
        <section className={styles.topFiveCards}>
          {latestMovies?.map((element) => {
            return (
              <Card
                key={element.id}
                layout="wide"
                {...element}
                children={element.overview}
                isBookmarked={bookmarked.includes(element.id)}
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
            {topFiveMovies?.map((element) => {
              return (
                <Card
                  key={element.id}
                  layout="detail"
                  {...element}
                  children={element.overview}
                  isBookmarked={bookmarked.includes(element.id)}
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
