import React from 'react';
import BackButton from './BackButton';

export default {
  title: 'Component/BackButton',
  component: BackButton,
};

export const Backyellow = (): JSX.Element => <BackButton isHighlighted />;
export const BackBlack = (): JSX.Element => <BackButton />;
