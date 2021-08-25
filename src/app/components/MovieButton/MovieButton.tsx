import React, { useState } from 'react';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';

type icons = 'search' | 'home' | 'bookmark';

export type MovieButtonProps = {
  iconType: `${icons}`;
  onHandleButtonClick: () => void;
};

const MovieButton = ({
  iconType,
  onHandleButtonClick,
}: MovieButtonProps): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  const active = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    fill: 'var(--text-primary)',
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
