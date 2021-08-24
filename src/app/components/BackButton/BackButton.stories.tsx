import React from 'react';
import BackButton from './BackButton';

export default {
  title: 'component/BackButton',
  component: BackButton,
};

export const BackButtonActive = (): JSX.Element => (
  <BackButton>
    <img src="src/app/components/assets/backButton.svg" />
  </BackButton>
);
export const BackButtonInactive = (): JSX.Element => (
  <BackButton>
    <img src="src/app/components/assets/backButtonInactive.svg" />
  </BackButton>
);
