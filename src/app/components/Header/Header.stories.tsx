import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const TopFive = (): JSX.Element => <Header>TopFive</Header>;
export const Discover = (): JSX.Element => <Header>Discover</Header>;
export const NoHeader = (): JSX.Element => <Header> </Header>;
