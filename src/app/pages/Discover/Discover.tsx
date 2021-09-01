import React from 'react';
import styles from './Discover.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import TagGroup from '../../components/TagGroup/TagGroup';
import useDiscover from '../../hooks/useDiscover';

const mockFunction = () => console.log('📽');

const mockTags = [
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

const mockMovies = [
  {
    title: 'Findet Nemo',
    genres: ['Animation'],
    image:
      'https://images-na.ssl-images-amazon.com/images/I/71EZScEcWuL._RI_.jpg',
    rating: 3.5,
    children: '',
  },
  {
    title: 'Resident Evil',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/510hYySJ6HL._AC_.jpg',
    rating: 3.5,
    children: '',
  },
  {
    title: 'Hero',
    genres: ['Adventure', 'Action', 'History'],
    image:
      'https://m.media-amazon.com/images/M/MV5BMWQ2MjQ0OTctMWE1OC00NjZjLTk3ZDAtNTk3NTZiYWMxYTlmXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    rating: 3.5,
    children: '',
  },
  {
    title: 'Avatar',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/41zWyLXIetL._AC_.jpg',
    rating: 3.5,
    children: '',
  },
  {
    title: 'Fight Club',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/51JyX1NtDfL._AC_.jpg',
    rating: 3.5,
    children: '',
  },
  {
    title: 'Ben Hur',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/51J69UGeCjL._AC_.jpg',
    rating: 3.5,
    children: '',
  },
  {
    title: 'Vier Fäuste für ein Halleluja',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/51PZ7G0YMTL.jpg',
    rating: 3.5,
    children: '',
  },
  {
    title: 'Adams Family',
    genres: [''],
    image: 'https://m.media-amazon.com/images/I/510cRdkFSXL._AC_SY450_.jpg',
    isBookmarked: false,
    rating: 3.5,
    children: '',
  },
];

export default function Discover(): JSX.Element {
  const { movies, isLoading, errorMessage } = useDiscover('Action');
  console.log(movies);
  console.log(errorMessage);
  function handleBookmarkClick(movie: string) {
    console.log(movie);
  }

  return (
    <div className={styles.container}>
      <section className={styles.topSection}>
        <Header withBackButton isHighlighted>
          Discover
        </Header>
        <div className={styles.tagGroup}>
          <TagGroup tagList={mockTags} />
        </div>
      </section>
      <section className={styles.cardWrapper}>
        {mockMovies.length !== 0 &&
          mockMovies.map((movie) => (
            <Card
              key={movie.title}
              layout="compact"
              onBookmarkClick={() => handleBookmarkClick(movie.title)}
              {...movie}
            />
          ))}
      </section>
      <Navigation activeLink="home" />
    </div>
  );
}
