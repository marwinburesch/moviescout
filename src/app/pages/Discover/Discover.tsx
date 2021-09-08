import React, { useState } from 'react';
import styles from './Discover.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import TagGroup from '../../components/TagGroup/TagGroup';
import type { Movie } from '../../../lib/types';
import useDiscover from '../../hooks/useDiscover';
import { GENRES } from '../../../lib/genreMap';
import useBookmarks from '../../hooks/useBookmarks';

export default function Discover(): JSX.Element {
  const [selectedGenre, setSelectedGenre] = useState<string | null>(
    'Adventure'
  );
  const { movies } = useDiscover(selectedGenre);
  const { bookmarkIds, handleBookmarkClick } = useBookmarks();

  const genreList = Object.values(GENRES);
  const tagList = genreList.map((genre) => {
    return {
      children: genre,
      onClick: () => setSelectedGenre(genre),
      active: genre === selectedGenre,
    };
  });

  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <Header withBackButton isHighlighted>
          Discover
        </Header>
        <TagGroup tagList={tagList} />
      </section>
      <section className={styles.cardWrapper}>
        {movies !== null &&
          movies.map((movie: Movie) => (
            <Card
              key={movie.title}
              layout="compact"
              children={movie.overview}
              isBookmarked={bookmarkIds.includes(movie.id)}
              onBookmarkClick={() => handleBookmarkClick(movie.id)}
              {...movie}
            />
          ))}
      </section>
      <Navigation activeLink="home" />
    </div>
  );
}
