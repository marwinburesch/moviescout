import React from 'react';
import Typography from './Typography';

export default {
  title: 'Component/Typography',
  component: Typography,
};

export const Large = (): JSX.Element => (
  <Typography size="l">Discover</Typography>
);

export const Medium = (): JSX.Element => (
  <Typography size="m">Gunpowder Milkshake</Typography>
);

export const All = (): JSX.Element => (
  <>
    <Typography size="l">Discover</Typography>
    <Typography size="m">Gunpowder Milkshake</Typography>
  </>
);
