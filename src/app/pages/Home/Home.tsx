import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import type { CardProps } from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

type CardPropsWithoutFunction = Omit<CardProps, 'onBookmarkClick'>;

function home(): JSX.Element {
  const mockLatestCards: CardPropsWithoutFunction[] = [
    {
      layout: 'detail',
      title: 'Hangover',
      rating: 2.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://gfx.videobuster.de/archive/v/c3CGWmml_8WJgNmxlETXfzAcz0lMkawqyUyRqclMkZpbWGZJTJGanBlZyUyRmNiYjBlYWIzZtRjlWM5ZDRh0WZi7WO-72EzLmpwZyZyPXfvOA/ted-2.jpg',
      isBookmarked: false,
    },
    {
      layout: 'detail',
      title: 'Ted',
      rating: 3.0,
      genres: ['Comedy'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://de.web.img3.acsta.net/medias/nmedia/18/71/10/38/19283541.jpg',
      isBookmarked: false,
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
    },
  ];

  const mockTopCards: CardPropsWithoutFunction[] = [
    {
      layout: 'wide',
      title: 'Big meets bigger',
      rating: 4.5,
      genres: ['Comedy'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://i.pinimg.com/474x/ce/34/09/ce3409b5eae0a48c691c48edf6a866cc.jpg',
      isBookmarked: false,
    },
    {
      layout: 'wide',
      title: 'Ted',
      rating: 0.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://lh3.googleusercontent.com/proxy/PYYVWG85Gnr1TNrjy2gZPorvShitwCTYwV-Q60tMoqRYCIQN-oisJLJ6htkJiZAfTe37eIV8Yh8oe6vhhe5ck0JUBLD7FcswqJYSwbW-Q9o5C4b9',
      isBookmarked: false,
    },
    {
      layout: 'wide',
      title: 'Film',
      rating: 1.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image: 'https://de.web.img2.acsta.net/pictures/14/02/13/11/38/183661.jpg',
      isBookmarked: false,
    },
    {
      layout: 'wide',
      title: 'Serie',
      rating: 2.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image: 'https://images-na.ssl-images-amazon.com/images/I/91kFYg4fX3L.jpg',
      isBookmarked: false,
    },
    {
      layout: 'wide',
      title: 'Test',
      rating: 3.5,
      genres: ['Action'],
      children:
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae exercitationem modi aspernatur laudantium corrupti voluptate, doloribus dolorum ut est? Deserunt, inventore natus repellat enim ab soluta necessitatibus recusandae earum molestias exercitationem nemo blanditiis accusantium ipsum odit praesentium alias veniam? Veritatis nostrum corrupti praesentium velit libero molestias dicta labore nemo quibusdam.',
      image:
        'https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg',
      isBookmarked: false,
    },
  ];

  const [latestCards, setLatestCards] =
    useState<CardPropsWithoutFunction[]>(mockLatestCards);

  const [topFiveCards, setTopFiveCards] =
    useState<CardPropsWithoutFunction[]>(mockTopCards);

  function handleTopFiveClick(title: string) {
    const newTopFiveCards = topFiveCards.map((card) => {
      if (card.title === title) {
        card.isBookmarked = !card.isBookmarked;
      }

      return card;
    });
    setTopFiveCards(newTopFiveCards);
  }

  function handleLatestClick(title: string) {
    const newLatestCards = latestCards.map((card) => {
      if (card.title === title) {
        card.isBookmarked = !card.isBookmarked;
      }
      return card;
    });
    setLatestCards(newLatestCards);
  }

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <Header>Top Five</Header>
        </div>

        <section className={styles.topFiveCards}>
          {topFiveCards.map((card) => {
            return <Card {...card} onBookmarkClick={handleTopFiveClick} />;
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
              return <Card {...card} onBookmarkClick={handleLatestClick} />;
            })}
          </div>
        </section>
      </div>
      <Navigation activeLink="home" />
    </div>
  );
}

export default home;
