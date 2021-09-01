import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import TagGroup from '../../components/TagGroup/TagGroup';
import useSearchMovies from '../../hooks/useSearchMovies';
import { mockTagGroupProps } from './Mockdata';
import styles from './Search.module.css';

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const { data: movies } = useSearchMovies(searchQuery);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSearchQuery(searchValue);
  }

  return (
    <div className={styles.page}>
      <Header className={styles.header} withBackButton isHighlighted>
        Search
      </Header>
      <SearchBar
        className={styles.searchbar}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSubmit={handleSubmit}
      />

      <TagGroup className={styles.tagGroup} tagList={mockTagGroupProps} />
      <p className={styles.searchResult}>Search Results(3)</p>

      <main className={styles.cards}>
        {movies &&
          movies[0]?.title &&
          movies.map((movie) => (
            <Card
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
