import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Navigation from '../../components/Navigation/Navigation';
import styles from './Home.module.css';

function home(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.header}>
          <Header>Top Five</Header>
        </div>
        <section className={styles.topFiveCards}>
          <Card
            layout="wide"
            title="Pulp Fiction"
            rating={3.5}
            genres={['action']}
            image="https://www.sportaktiv.com/sites/default/files/2018-07/berge_andrijter.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            soluta!
          </Card>
          <Card
            layout="wide"
            title="Pulp Fiction"
            rating={3.5}
            genres={['action']}
            image="https://www.sportaktiv.com/sites/default/files/2018-07/berge_andrijter.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            soluta!
          </Card>
          <Card
            layout="wide"
            title="Pulp Fiction"
            rating={3.5}
            genres={['action']}
            image="https://www.sportaktiv.com/sites/default/files/2018-07/berge_andrijter.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            soluta!
          </Card>
          <Card
            layout="wide"
            title="Pulp Fiction"
            rating={3.5}
            genres={['action']}
            image="https://www.sportaktiv.com/sites/default/files/2018-07/berge_andrijter.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            soluta!
          </Card>
          <Card
            layout="wide"
            title="Pulp Fiction"
            rating={3.5}
            genres={['action']}
            image="https://www.sportaktiv.com/sites/default/files/2018-07/berge_andrijter.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo,
            soluta!
          </Card>
        </section>
        <section className={styles.cardCompact}>
          <div className={styles.latestHeader}>
            <Header>Latest</Header>
            <div className={styles.seeMore}>See more</div>
          </div>
          <div className={styles.latestContainer}>
            <Card
              layout="detail"
              title="Lola rennt"
              rating={3.5}
              genres={['Action']}
              image="https://images.herz-fuer-tiere.de/images/_aliases/1280w/9/8/5/7/117589-1-de-DE/Ziegen_Zucht_1200x800.jpg"
              isBookmarked={false}
              onBookmarkClick={() => console.log('Hi')}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo, soluta!
            </Card>
            <Card
              layout="detail"
              title="Lola rennt"
              rating={3.5}
              genres={['action']}
              image="https://images.herz-fuer-tiere.de/images/_aliases/1280w/9/8/5/7/117589-1-de-DE/Ziegen_Zucht_1200x800.jpg"
              isBookmarked={false}
              onBookmarkClick={() => console.log('Hi')}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo, soluta!
            </Card>
          </div>
        </section>
      </div>
      <Navigation activeLink="home" />
    </div>
  );
}

export default home;
