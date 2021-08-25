import React from 'react';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';

export type MovieButtonProps = {
  iconType: 'search' | 'home' | 'bookmark';
  onHandleButtonClick: () => void;
  toggleActiveState: () => void;
  isActive: boolean;
};

const MovieButton = ({
  isActive,
  iconType,
  onHandleButtonClick,
  toggleActiveState,
}: MovieButtonProps): JSX.Element => {
  const active = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    fill: iconType !== 'bookmark' ? 'var(--text-primary)' : 'transparent',
    stroke: 'var(--text-primary)',
  };

  const getProps = () => {
    return isActive ? active : inactive;
  };

  const iconStateMap = {
    search: <SearchIcon {...getProps()} />,
    home: <HomeIcon {...getProps()} />,
    bookmark: <BookmarkIcon {...getProps()} />,
  };

  return (
    <>
      <a
        onClick={() => {
          toggleActiveState();
          onHandleButtonClick();
        }}
      >
        {iconStateMap[iconType]}
      </a>
    </>
  );
};

export default MovieButton;
