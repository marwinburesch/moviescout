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
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
  {
    layout: 'compact',
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
  {
    layout: 'compact',
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
  {
    layout: 'compact',
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
  {
    layout: 'compact',
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
  {
    layout: 'compact',
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
  {
    layout: 'compact',
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
  {
    layout: 'compact',
    title: 'Real long Movie Title Number 1',
    genres: [''],
    image: null,
    onBookmarkClick: () => console.log(''),
    rating: 3.5,
    children: 'bliblablu',
  },
];

export default function Discover(): JSX.Element {
  return (
    <main className={styles.container}>
      <Header withBackButton isHighlighted>
        Discover
      </Header>
      <TagGroup tagList={tags} />
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
