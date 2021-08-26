import React, { useState } from 'react';
import MovieButton from '../MovieButton/MovieButton';
import RatingIcon from '../RatingIcon/RatingIcon';
import styles from './Card.module.css';

export type CardProps = {
  layout: 'detail' | 'compact' | 'wide';
  title: string;
  rating: number | null;
  genres: string[];
  image: string | null;
  isBookmarked?: boolean;
  children: React.ReactNode;
};

export default function Card({
  layout,
  title,
  rating,
  genres,
  image,
  isBookmarked = false,
  children,
}: CardProps): JSX.Element {
  const [isBookmarkActive, setIsBookmarkActive] = useState(isBookmarked);
  return (
    <article className={styles.article}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className={styles.bookmark}>
          <MovieButton
            iconType="bookmark"
            isActive={isBookmarkActive}
            onButtonClick={() => setIsBookmarkActive(!isBookmarkActive)}
          ></MovieButton>
        </div>
      </div>
      <div>
        <p className={styles.title}>{title}</p>
        <div>
          {rating}
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
          <RatingIcon iconState="active" />
        </div>
        <p className={styles.genres}>{genres.join(', ')}</p>
        <p className={styles.description}>{children}</p>
      </div>
    </article>
  );
}
