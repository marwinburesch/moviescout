import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const ActiveCount = (): JSX.Element => (
  <Tag active count="8">
    Hallo
  </Tag>
);
export const ActiveNoCount = (): JSX.Element => <Tag active>Hallo</Tag>;

export const InactiveCount = (): JSX.Element => <Tag count="8">Hallo</Tag>;
export const InactiveNoCount = (): JSX.Element => <Tag>Hallo</Tag>;
