import React from 'react';
import MovieButton from './MovieButton';
import { Story } from '@storybook/react';

type MovieButtonProps = {
  iconType:
    | 'searchActive'
    | 'searchInactive'
    | 'homeActive'
    | 'homeInactive'
    | 'starActive'
    | 'starHalfActive'
    | 'starInactive'
    | 'bookmarkActive'
    | 'bookmarkInactive';
};

export default {
  title: 'Component/MovieButton',
  component: MovieButton,
  argTypes: {
    iconType: {
      options: [
        'searchActive',
        'searchInactive',
        'homeActive',
        'homeInactive',
        'starActive',
        'starHalfActive',
        'starInactive',
        'bookmarkActive',
        'bookmarkInactive',
      ],
      control: { type: 'select' },
    },
  },
};

const Template: Story<MovieButtonProps> = (args) => <MovieButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  iconType: 'homeActive',
};
