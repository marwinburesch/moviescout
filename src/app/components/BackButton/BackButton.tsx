import React, { ReactNode } from 'react';

type BackButtonProps = {
  children: ReactNode;
};

export function BackButton({ children }: BackButtonProps): JSX.Element {
  return <button>{children}</button>;
}
