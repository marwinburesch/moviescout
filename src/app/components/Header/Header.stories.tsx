import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const TopFive = (): JSX.Element => <Header>TopFive</Header>;
export const Latest = (): JSX.Element => <Header>Latest</Header>;
export const Discover = (): JSX.Element => (
  <Header isHighlighted withBackButton>
    Discover
  </Header>
);
export const NoHeader = (): JSX.Element => <Header withBackButton />;
