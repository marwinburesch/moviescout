import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import TagGroup from '../../components/TagGroup/TagGroup';
import { mockCards, mockTagGroupProps } from './Mockdata';
import styles from './Search.module.css';

export default function Search(): JSX.Element {
  const [searchValue, setSearchValue] = useState('');
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log('huhu');
  }
  return (
    <div className={styles.page}>
      <Header withBackButton isHighlighted>
        Search
      </Header>
      <SearchBar
        className={styles.searchbar}
        searchResult={searchValue}
        setSearchResult={setSearchValue}
        handleSubmit={handleSubmit}
      />

      <TagGroup tagList={mockTagGroupProps} />
      <p className={styles.searchResult}>Search Results(3)</p>

      <main className={styles.cards}>
        {mockCards?.map((mockCard) => (
          <Card
            title={mockCard.title}
            rating={mockCard.rating}
            image={mockCard.image}
            layout="detail"
            genres={mockCard.genres}
            onBookmarkClick={() => console.log('hallo')}
          >
            {mockCard.children}
          </Card>
        ))}
      </main>
      <Navigation activeLink="search" />
    </div>
  );
}
