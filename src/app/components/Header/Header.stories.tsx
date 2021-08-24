import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const TopFive = (): JSX.Element => <Header>TopFive</Header>;
export const BackTopFive = (): JSX.Element => <Header>Search</Header>;
export const Discover = (): JSX.Element => <Header> </Header>;
