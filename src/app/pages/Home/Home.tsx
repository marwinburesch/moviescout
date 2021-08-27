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
            title="Inside"
            rating={2.5}
            genres={['action']}
            image="https://m.media-amazon.com/images/M/MV5BMDE3MjcxNjEtODUzNi00NzdmLWFlMGMtMzhmMTg3NDdmM2IyXkEyXkFqcGdeQXVyNjYyMjE4NDY@._V1_FMjpg_UX1000_.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            ...
          </Card>
          <Card
            layout="wide"
            title="Interstellar"
            rating={4.0}
            genres={['action']}
            image="https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            ...
          </Card>
          <Card
            layout="wide"
            title="Fear and Loathing in Las Vegas"
            rating={3.0}
            genres={['action']}
            image="https://m.media-amazon.com/images/I/51xwUF92c4L.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            ...
          </Card>
          <Card
            layout="wide"
            title="Snowpiercer"
            rating={3.5}
            genres={['action']}
            image="https://de.web.img2.acsta.net/pictures/14/02/13/11/38/183661.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            ...
          </Card>
          <Card
            layout="wide"
            title="Deadpool"
            rating={4.5}
            genres={['action']}
            image="https://m.media-amazon.com/images/I/51owAmcQ1jL._AC_.jpg"
            isBookmarked={false}
            onBookmarkClick={() => console.log('Hi')}
          >
            ...
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
              title="Ted"
              rating={4.5}
              genres={['Comedy']}
              image="https://lh3.googleusercontent.com/proxy/gaEetQt9_9Q3mwnDVhmR881eCaa-C4OfWdp--o5vvuvLetGKfI52xJMvBaAZnQQS36kIIsp7fluigkje7vCHW0cIMN3O01Z_PvNoSvJ5_hTIa8q6"
              isBookmarked={false}
              onBookmarkClick={() => console.log('Hi')}
            >
              John Bennett, a man whose childhood wish of bringing his teddy
              bear to life came true, now must decide between keeping the
              relationship with the bear, Ted or his girlfriend, Lori.
            </Card>
            <Card
              layout="detail"
              title="Grand Budapest Hotel"
              rating={4.0}
              genres={['action']}
              image="https://m.media-amazon.com/images/I/71uQuT3t47L._SL1200_.jpg"
              isBookmarked={false}
              onBookmarkClick={() => console.log('Hi')}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo, soluta!
            </Card>
            <Card
              layout="detail"
              title="Inception"
              rating={3.5}
              genres={['action']}
              image="https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg"
              isBookmarked={false}
              onBookmarkClick={() => console.log('Hi')}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Explicabo, soluta!
            </Card>
            <Card
              layout="detail"
              title="Parasite"
              rating={2.0}
              genres={['action']}
              image="https://le-cdn.website-editor.net/83fbab195c334c53aead9b299ad002bc/dms3rep/multi/opt/Unbenannt-960w.png"
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
