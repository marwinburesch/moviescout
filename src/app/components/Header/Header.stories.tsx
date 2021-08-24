import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
};

export const TopFive = (): JSX.Element => <Header>TopFive</Header>;
export const Search = (): JSX.Element => <Header>Search</Header>;
export const Discover = (): JSX.Element => <Header>Discover</Header>;
export const Bookmarks = (): JSX.Element => <Header>Bookmarks</Header>;
