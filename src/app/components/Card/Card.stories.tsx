import React from 'react';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const DetailCard = (): JSX.Element => {
  return (
    <Card
      id={1}
      layout="detail"
      title="Pulp Fiction"
      rating={4.5}
      genres={['Komödie', 'Action']}
      image=""
      onBookmarkClick={() => console.log('')}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis
      magnam, nobis laudantium incidunt harum eaque qui aperiam saepe quam
      consequuntur voluptate doloremque quae molestias magni maxime ut facere
      doloribus!
    </Card>
  );
};

export const WideCard = (): JSX.Element => (
  <Card
    id={1}
    layout="wide"
    title="Pulp Fiction"
    rating={4.5}
    genres={['Komödie', 'Action']}
    image=""
    onBookmarkClick={() => console.log('')}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis
    magnam, nobis laudantium incidunt harum eaque qui aperiam saepe quam
    consequuntur voluptate doloremque quae molestias magni maxime ut facere
    doloribus!
  </Card>
);
export const CompactCard = (): JSX.Element => (
  <Card
    id={1}
    layout="compact"
    title="Pulp Fiction"
    rating={4.5}
    genres={['Komödie', 'Action']}
    image=""
    onBookmarkClick={() => console.log('')}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis
    magnam, nobis laudantium incidunt harum eaque qui aperiam saepe quam
    consequuntur voluptate doloremque quae molestias magni maxime ut facere
    doloribus!
  </Card>
);

export const TestCard = (): JSX.Element => (
  <Card
    id={1}
    layout="compact"
    title="Pulp Fiction"
    rating={4.5}
    genres={['Komödie', 'Action']}
    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHILF70VeqhsH_fzgLs2X_5X_zP1Q6_tuEqLeo8p_vIsfeigYK4xqyvWI5pzYZZ2Hf2Bk&usqp=CAU"
    onBookmarkClick={() => console.log('')}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis
    magnam, nobis laudantium incidunt harum eaque qui aperiam saepe quam
    consequuntur voluptate doloremque quae molestias magni maxime ut facere
    doloribus!
  </Card>
);

export const OverflowTestCard = (): JSX.Element => {
  return (
    <Card
      id={1}
      layout="detail"
      title="Pulp FictionPulp FictionPulp FictionPulp FictionPulp FictionPulp Fiction"
      rating={4.5}
      genres={[
        'Komödie',
        'Action',
        'Komödie',
        'Action',
        'Komödie',
        'Action',
        'Komödie',
        'Action',
        'Action',
        'Komödie',
        'Action',
      ]}
      image=""
      onBookmarkClick={() => console.log('')}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis
      magnam, nobis laudantium incidunt harum eaque qui aperiam saepe quam
      consequuntur voluptate doloremque quae molestias magni maxime ut facere
      doloribus!
    </Card>
  );
};
