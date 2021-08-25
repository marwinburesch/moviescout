import React from 'react';
import BookmarkIcon from '../assets/BookmarkIcon';
import HomeIcon from '../assets/HomeIcon';
import SearchIcon from '../assets/SearchIcon';
import StarIcon from '../assets/StarIcon';

export type MovieButtonProps = {
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
  const active = {
    fill: 'var(--color-primary)',
    stroke: 'var(--color-primary)',
  };

  const inactive = {
    fill: 'var(--text-primary)',
    stroke: 'var(--text-primary)',
  };

  const iconStateMap = {
    searchActive: <SearchIcon {...active} />,
    searchInactive: <SearchIcon {...inactive} />,
    homeActive: <HomeIcon {...active} />,
    homeInactive: <HomeIcon {...inactive} />,
    starActive: <StarIcon iconState="active" width="100" height="100" />,
    starInactive: <StarIcon iconState="inactive" />,
    starHalfActive: <StarIcon iconState="halfActive" />,
    bookmarkActive: <BookmarkIcon {...active} />,
    bookmarkInactive: <BookmarkIcon {...inactive} />,
  };

  return <>{iconStateMap[iconType]}</>;
};

export default MovieButton;
