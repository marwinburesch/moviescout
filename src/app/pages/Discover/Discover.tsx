import React from 'react';
import styles from './Discover.module.css';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';

export default function Discover(): JSX.Element {
  return (
    <main className={styles.container}>
      <Header withBackButton isHighlighted>
        Discover
      </Header>

      <div className={styles.cardWrapper}>
        <Card
          layout="compact"
          title="Real long Movie Title Number 1"
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
        <Card
          layout="compact"
          title="Addams Family - Reunion"
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
        <Card
          layout="compact"
          title=""
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
        <Card
          layout="compact"
          title=""
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
        <Card
          layout="compact"
          title=""
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
        <Card
          layout="compact"
          title=""
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
        <Card
          layout="compact"
          title=""
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
        <Card
          layout="compact"
          title=""
          genres={['']}
          image={null}
          onBookmarkClick={() => console.log('')}
          rating={3.5}
        >
          Lorem ipsum
        </Card>
      </div>
      <div className={styles.navigation}>
        <Navigation />
      </div>
    </main>
  );
}
