import React from 'react';
import styles from './Discover.module.css';
import Header from '../../components/Header/Header';
import Card, { CardProps } from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import TagGroup from '../../components/TagGroup/TagGroup';

const mockFunction = () => console.log('📽');

const tags = [
  {
    count: '',
    active: false,
    onClick: mockFunction,
    children: 'all',
  },
  {
    count: '4',
    active: false,
    onClick: mockFunction,
    children: 'animation',
  },
  {
    count: '6',
    active: true,
    onClick: mockFunction,
    children: 'action',
  },
  {
    count: '9',
    active: false,
    onClick: mockFunction,
    children: 'comedy',
  },
  {
    count: '7',
    active: false,
    onClick: mockFunction,
    children: 'sci fi',
  },
];

const mockMovies: CardProps[] = [
  {
    layout: 'compact',
    title: 'Findet Nemo',
    genres: ['Animation'],
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71EZScEcWuL._RI_.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
  {
    layout: 'compact',
    title: 'Resident Evil',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/510hYySJ6HL._AC_.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
  {
    layout: 'compact',
    title: 'Hero',
    genres: ['Adventure', 'Action', 'History'],
    image:
      'https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
  {
    layout: 'compact',
    title: 'Avatar',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/41zWyLXIetL._AC_.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
  {
    layout: 'compact',
    title: 'Fight Club',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/51JyX1NtDfL._AC_.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
  {
    layout: 'compact',
    title: 'Ben Hur',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/51J69UGeCjL._AC_.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
  {
    layout: 'compact',
    title: 'Vier Fäuste für ein Halleluja',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/51PZ7G0YMTL.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
  {
    layout: 'compact',
    title: 'Adams Family',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/510cRdkFSXL._AC_SY450_.jpg',
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: '',
  },
];

export default function Discover(): JSX.Element {
  return (
    <main className={styles.container}>
      <section className={styles.topSection}>
        <div className={styles.header}>
          <Header withBackButton isHighlighted>
            Discover
          </Header>
        </div>
        <div className={styles.tagGroup}>
          <TagGroup tagList={tags} />
        </div>
      </section>
      <div className={styles.cardWrapper}>
        {mockMovies.length !== 0 &&
          mockMovies.map((movie) => <Card {...movie} />)}
      </div>
      <div className={styles.navigation}>
        <Navigation activeLink="home" />
      </div>
    </main>
  );
}
