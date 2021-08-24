import React from 'react';
import { FlagButton } from './FlagButton';

export default {
  title: 'component/FlagButton',
  component: FlagButton,
};

export const flag = (): JSX.Element => (
  <FlagButton>
    <img src="src/app/components/assets/flagButton.svg" />
  </FlagButton>
);
