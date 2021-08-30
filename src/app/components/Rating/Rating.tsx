import React from 'react';
import styles from './Rating.module.css';
import RatingIcon from '../RatingIcon/RatingIcon';

type RatingProps = { rating: number; maxRating?: number; className?: string };

function Rating({
  rating,
  maxRating = 5,
  className,
}: RatingProps): JSX.Element {
  return (
    <section className={`${styles.rating} ${className}`}>
      <p>{rating}</p>
      <div className={styles.starContainer}>
        {Array.from({ length: maxRating }, (_, i) => i + 1).map((value) => {
          let starStatus: 'active' | 'inactive' | 'halfActive';
          if (value < rating + 1) {
            if (rating % 1 === 0 || rating > value) {
              starStatus = 'active';
            } else {
              starStatus = 'halfActive';
            }
          } else {
            starStatus = 'inactive';
          }
          return <RatingIcon iconState={starStatus} />;
        })}
      </div>
    </section>
  );
}
export default Rating;
