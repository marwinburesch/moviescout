import type { ReactNode } from 'react';
import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  className?: string;
};
function Button({ children, className }: ButtonProps): JSX.Element {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}

export default Button;
