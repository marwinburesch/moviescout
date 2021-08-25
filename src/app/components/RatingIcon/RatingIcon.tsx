import React from 'react';
import StarIcon from '../assets/StarIcon';

export type RatingIconProps = {
  iconState: 'active' | 'inactive' | 'halfActive';
};

const RatingIcon = ({ iconState }: RatingIconProps): JSX.Element => {
  return <StarIcon iconState={iconState} />;
};

export default RatingIcon;
