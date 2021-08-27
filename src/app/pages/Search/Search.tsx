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
      <section className={styles.search}>
        <div className={styles.searchbar}>
          <SearchBar
            searchResult={searchValue}
            setSearchResult={setSearchValue}
            handleSubmit={handleSubmit}
          />
        </div>

        <TagGroup tagList={mockTagGroupProps} />
        <p>Search Results(3)</p>
      </section>
      <main>
        <section className={styles.cards}>
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
        </section>
      </main>
      <Navigation activeLink="search" />
    </div>
  );
}
