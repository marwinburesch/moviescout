import React from 'react';
import styles from './Rating.module.css';
import RatingIcon from '../RatingIcon/RatingIcon';

type RatingProps = { rating: number };

function Rating({ rating }: RatingProps): JSX.Element {
  return (
    <section className={styles.rating}>
      <p>{rating}</p>
      <div className={styles.starContainer}>
        {[1, 2, 3, 4, 5].map((value) => {
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

