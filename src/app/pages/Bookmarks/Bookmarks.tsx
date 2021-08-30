import React, { useState } from 'react';
import styles from './Bookmarks.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
export default function Bookmarks(): JSX.Element {
  const mockupData = [
    {
      title: 'Top Gun',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      title: 'Southpark',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      title: 'Lethal Weapon',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
  ];
  const [movieInfo] = useState(mockupData);
  function handleBookmarkClick(movie: string) {
    console.log(movie);
  }
  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Header isHighlighted withBackButton>
          Bookmarks
        </Header>
      </section>
      <main className={styles.cardWrapper}>
        {mockupData.length !== 0 &&
          movieInfo.map((movie) => (
            <Card
              key={movie.title}
              onBookmarkClick={() => handleBookmarkClick(movie.title)}
              {...movie}
            />
          ))}
      </main>
      <section>
        <Navigation activeLink="bookmark"></Navigation>
      </section>
    </div>
  );
}
