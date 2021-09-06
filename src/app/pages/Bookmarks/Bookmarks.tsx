import React, { useState } from 'react';
import styles from './Bookmarks.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';

export default function Bookmarks(): JSX.Element {
  const mockupData = [
    {
      id: 1,
      title: 'Top Gun',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 2,
      title: 'Southpark 2',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 3,
      title: 'Lethal Weapon 3',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 4,
      title: 'Lupin',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 5,
      title: 'Independence Day',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 6,
      title: 'Kill Bill',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 7,
      title: 'Wu-Tang',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 8,
      title: 'Kids',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 9,
      title: 'Lion King',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 10,
      title: 'Der Pate',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 11,
      title: 'Der Pate 2',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 12,
      title: 'Star Wars',
      rating: 5,
      genres: [''],
      image: 'string | null',
      isBookmarked: true,
      children: '???',
    },
    {
      id: 13,
      title: 'Casino',
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
              key={movie.id}
              onBookmarkClick={() => handleBookmarkClick(movie.title)}
              {...movie}
            />
          ))}
      </main>

      <Navigation activeLink="bookmark"></Navigation>
    </div>
  );
}
