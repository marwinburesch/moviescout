import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import Navigation from '../../components/Navigation/Navigation';
import SearchBar from '../../components/SearchBar/SearchBar';
import TagGroup from '../../components/TagGroup/TagGroup';
import { mockCard, mockTagGroupProps } from './Mockdata';
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
        searchResult={searchValue}
        setSearchResult={setSearchValue}
        handleSubmit={handleSubmit}
        className={styles.searchbar}
      />
      <section className={styles.search}>
        <TagGroup tagList={mockTagGroupProps} />
        <p>Search Results(3)</p>
      </section>
      <main className={styles.cards}>
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
      </main>
      <Navigation activeLink="search" />
    </div>
  );
}
