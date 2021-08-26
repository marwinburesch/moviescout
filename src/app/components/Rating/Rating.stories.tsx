import React from 'react';
import Rating from './Rating';

export default {
  title: 'Component/Rating',
  component: Rating,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const RatingStars = (): JSX.Element => (
  <Rating rating={3.5} maxRating={5} />
);

export const RatingFiveStars = (): JSX.Element => (
  <Rating rating={5} maxRating={5} />
);

export const RatingGreaterStars = (): JSX.Element => (
  <Rating rating={8.5} maxRating={10} />
);

export const RatingSingelStar = (): JSX.Element => (
  <Rating rating={3.5} maxRating={1} />
);
