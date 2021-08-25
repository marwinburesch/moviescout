import React from 'react';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';

export type MovieButtonProps = {
  iconType: 'search' | 'home' | 'bookmark';
  onButtonClick: () => void;
  isActive: boolean;
};

const MovieButton = ({
  isActive,
  iconType,
  onButtonClick,
}: MovieButtonProps): JSX.Element => {
  const active = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    fill: iconType !== 'bookmark' ? 'var(--text-primary)' : 'transparent',
    stroke: 'var(--text-primary)',
  };

  const iconStateMap = {
    search: <SearchIcon {...(isActive ? active : inactive)} />,
    home: <HomeIcon {...(isActive ? active : inactive)} />,
    bookmark: <BookmarkIcon {...(isActive ? active : inactive)} />,
  };

  return <a onClick={onButtonClick}>{iconStateMap[iconType]}</a>;
};

export default MovieButton;
