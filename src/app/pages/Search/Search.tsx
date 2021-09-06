import React, { useState } from 'react';
import { GENRES } from '../../../lib/genreMap';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import TagGroup from '../../components/TagGroup/TagGroup';
import useSearchMovies from '../../hooks/useSearchMovies';
import styles from './Search.module.css';

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const { movies } = useSearchMovies(searchValue, activeTag);

  const genres = Object.values(GENRES);
  genres.sort();
  const tags = genres.map((tag) => {
    return {
      children: tag,
      onClick: () =>
        tag !== activeTag ? setActiveTag(tag) : setActiveTag(null),
      active: tag === activeTag,
    };
  });

  return (
    <div className={styles.page}>
      <Header className={styles.header} withBackButton isHighlighted>
        Search
      </Header>
      <SearchBar
        className={styles.searchbar}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={(event) => event.preventDefault()}
      />

      <TagGroup className={styles.tagGroup} tagList={tags} />
      <p className={styles.searchResult}>
        {movies && movies.length > 0
          ? `Search Results (${movies.length})`
          : 'No Results'}
      </p>

      <main className={styles.cards}>
        {movies &&
          movies[0]?.title &&
          movies.map((movie) => (
            <Card
              id={movie.id}
              key={movie.id}
              title={movie.title}
              rating={movie.rating}
              image={movie.image}
              layout="detail"
              genres={movie.genres}
              onBookmarkClick={() => console.log('bookmark')}
            >
              {movie.overview}
            </Card>
          ))}
      </main>
      <Navigation activeLink="search" />
    </div>
  );
}
