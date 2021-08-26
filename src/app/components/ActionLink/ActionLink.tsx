import React from 'react';
import styles from './ActionLink.module.css';
import ChevronRightIcon from '../assets/ChevronRightIcon';

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
    <>
      {hasIcon ? (
        <a className={styles.actionLink} href={link}>
          {children}
          <ChevronRightIcon width="12" height="12" />
        </a>
      ) : (
        <a className={styles.actionLink} href={link}>
          {children}
        </a>
      )}
    </>
  );
};

export default ActionLink;
