import React from 'react';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import StarIcon from '../assets/StarIcon';

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

const MovieButton = ({ iconType }: MovieButtonProps): JSX.Element => {
  const iconStateMap = {
    searchActive: (
      <SearchIcon fill="var(--color-primary)" stroke="var(--color-primary)" />
    ),
    searchInactive: (
      <SearchIcon fill="var(--text-primary)" stroke="var(--text-primary)" />
    ),
    homeActive: (
      <HomeIcon fill="var(--color-primary)" stroke="var(--color-primary)" />
    ),
    homeInactive: (
      <HomeIcon fill="var(--text-primary)" stroke="var(--text-primary)" />
    ),
    starActive: <StarIcon iconState="active" />,
    starInactive: <StarIcon iconState="inactive" />,
    starHalfActive: <StarIcon iconState="halfActive" />,
    bookmarkActive: (
      <BookmarkIcon fill="var(--color-primary)" stroke="var(--color-primary)" />
    ),
    bookmarkInactive: (
      <BookmarkIcon fill="var(--text-primary)" stroke="var(--text-primary)" />
    ),
  };

  return <>{iconStateMap[iconType]}</>;
};

export default MovieButton;
