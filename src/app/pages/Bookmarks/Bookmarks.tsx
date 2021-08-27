import React, { useState } from 'react';
import styles from './Bookmarks.module.css';
import Header from '../../components/Header/Header';
import Card, { CardProps } from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';

// type MovieInfo = {
//   movieInfo: string;
// };

export default function Bookmarks(): JSX.Element {
  const mockupData: CardProps[] = [
    {
      layout: 'detail',
      title: 'Top Gun',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      onBookmarkClick: () => console.log(''),
      children: '???',
    },
    {
      layout: 'detail',
      title: 'Southpark',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      onBookmarkClick: () => console.log(''),
      children: '???',
    },
    {
      layout: 'detail',
      title: 'Lethal Weapon',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      onBookmarkClick: () => console.log(''),
      children: '???',
    },
  ];
  const [movieInfo, setMovieInfo] = useState(mockupData);

  return (
    <div className={styles.container}>
      <section className={styles.header}>
        <Header isHighlighted withBackButton>
          Bookmarks
        </Header>
      </section>
      <main className={styles.cardWrapper}>
        {movieInfo.map((movie) => (
          <Card key={movie.title} {...movie}></Card>
        ))}
      </main>
      <section className={styles.navigation}>
        <Navigation activeLink="bookmark"></Navigation>
      </section>
    </div>
  );
}
