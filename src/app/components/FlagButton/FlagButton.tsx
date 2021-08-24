import React, { ReactNode } from 'react';

type FlagButtonProps = {
  children: ReactNode;
};

export function FlagButton({ children }: FlagButtonProps): JSX.Element {
  return <button>{children}</button>;
}
