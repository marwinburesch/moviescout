import React from 'react';
import type { CardProps } from './Card';
import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const DetailCard = (): JSX.Element => (
  <Card
    layout="detail"
    title="Pulp Fiction"
    rating={4.5}
    genres={['Komödie', 'Action']}
    image="https://assets.cdn.moviepilot.de/files/07a61f8455bcdfa81b565fbae400e37f0ac2408717c5887cd63bba28fe8e/limit/500/1000/pulp-fiction-cover.jpg"
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde perspiciatis
    magnam, nobis laudantium incidunt harum eaque qui aperiam saepe quam
    consequuntur voluptate doloremque quae molestias magni maxime ut facere
    doloribus!
  </Card>
);

// export default {
//   title: 'Component/Card',
//   component: Card,
//   argTypes: {
//     layout: {
//       options: ['detail', 'compact', 'wide'],
//       control: { type: 'select' },
//     },
//   },
// };

// const Template: Story<CardProps> = (args) => <Card {...args} />;

// export const Card = Template.bind({});
// Card.args = {
//   layout: 'detail',
// };

// // export const Bookmark = Template.bind({});
// // Bookmark.args = {
// //   layout: 'compact',
// //   isActive: true,
// // };

// // export const SearchIcon = Template.bind({});
// // SearchIcon.args = {
// //   layout: 'wide',
// //   isActive: true,
// // };
