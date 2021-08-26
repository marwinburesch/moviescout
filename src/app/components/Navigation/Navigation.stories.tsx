import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
};

export const Home = (): JSX.Element => <Navigation activeLink="home" />;
export const Search = (): JSX.Element => <Navigation activeLink="search" />;
export const Bookmark = (): JSX.Element => <Navigation activeLink="bookmark" />;
