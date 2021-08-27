import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import type { CardProps } from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

function home(): JSX.Element {
  const mockLatestCards: CardProps[] = [
    {
      layout: 'detail',
      title: 'Inside',
      rating: 2.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
    {
      layout: 'detail',
      title: 'Ted',
      rating: 3.0,
      genres: ['Comedy'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://lh3.googleusercontent.com/proxy/PYYVWG85Gnr1TNrjy2gZPorvShitwCTYwV-Q60tMoqRYCIQN-oisJLJ6htkJiZAfTe37eIV8Yh8oe6vhhe5ck0JUBLD7FcswqJYSwbW-Q9o5C4b9',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
    {
      layout: 'detail',
      title: 'Snowpiercer',
      rating: 3.5,
      genres: ['Thriller'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image: 'https://de.web.img2.acsta.net/pictures/14/02/13/11/38/183661.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
    {
      layout: 'detail',
      title: 'Interstellar',
      rating: 4.0,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
  ];

  const mockTopCards: CardProps[] = [
    {
      layout: 'wide',
      title: 'Inside',
      rating: 4.5,
      genres: ['Comedy'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
    {
      layout: 'wide',
      title: 'Inside',
      rating: 0.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
    {
      layout: 'wide',
      title: 'Inside',
      rating: 1.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
    {
      layout: 'wide',
      title: 'Inside',
      rating: 2.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
    {
      layout: 'wide',
      title: 'Inside',
      rating: 3.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg',
      isBookmarked: false,
      onBookmarkClick: () => handleBookmarkClick(),
    },
  ];

  const [latestCards, setLatestCards] = useState<CardProps[]>(mockLatestCards);

  const [topCards, setTopCards] = useState<CardProps[]>(mockTopCards);

  function handleBookmarkClick() {
    console.log('object');
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <Header>Top Five</Header>
        </div>

        <section className={styles.topFiveCards}>
          {topCards.map((card) => {
            return (
              <Card
                layout={card.layout}
                title={card.title}
                rating={card.rating}
                genres={card.genres}
                image={card.image}
                isBookmarked={card.isBookmarked}
                onBookmarkClick={card.onBookmarkClick}
              >
                {card.children}
              </Card>
            );
          })}
        </section>

        <section className={styles.cardCompact}>
          <div className={styles.latestHeader}>
            <Header>Latest</Header>
            <div className={styles.seeMore}>
              <Link to="/discover">See more</Link>
            </div>
          </div>
          <div className={styles.latestContainer}>
            {latestCards.map((card) => {
              return (
                <Card
                  layout={card.layout}
                  title={card.title}
                  rating={card.rating}
                  genres={card.genres}
                  image={card.image}
                  isBookmarked={card.isBookmarked}
                  onBookmarkClick={card.onBookmarkClick}
                >
                  {card.children}
                </Card>
              );
            })}
          </div>
        </section>
      </div>
      <Navigation activeLink="home" />
    </div>
  );
}

export default home;
