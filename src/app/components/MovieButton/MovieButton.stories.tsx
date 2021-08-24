import React from 'react';
import MovieButton from './MovieButton';

export default {
  title: 'Component/MovieButton',
  component: MovieButton,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
    },
  },
};

export const BookmarkActive = (): JSX.Element => (
  <MovieButton iconType="searchActive" />
);

export const BookmarkInactive = (): JSX.Element => (
  <MovieButton iconType="searchInactive" />
);

export const StarActive = (): JSX.Element => (
  <MovieButton iconType="starActive" />
);

export const StarInactive = (): JSX.Element => (
  <MovieButton iconType="starInactive" />
);

export const StarHalfActive = (): JSX.Element => (
  <MovieButton iconType="starHalfActive" />
);
