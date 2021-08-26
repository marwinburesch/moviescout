import React from 'react';
import styles from './ActionLink.module.css';

export type ActionLinkProps = {
  children: React.ReactNode;
  link: string;
  hasIcon: boolean;
};

const ActionLink = ({
  children,
  link,
  hasIcon,
}: ActionLinkProps): JSX.Element => {
  return (
    <a className={styles.actionLink} href={link}>
      {children}
    </a>
  );
};

export default ActionLink;
