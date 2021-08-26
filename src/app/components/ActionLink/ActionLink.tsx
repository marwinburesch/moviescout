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
        <a
          className={`${styles.actionLink} ${styles.actionLinkWithIcon}`}
          href={link}
          target="_blank"
        >
          <span className={styles.title}>{children}</span>
          <ChevronRightIcon
            className={styles.chevronRightIcon}
            width="1.5rem"
            height="1.5rem"
          />
        </a>
      ) : (
        <a className={styles.actionLink} href={link} target="_blank">
          {children}
        </a>
      )}
    </>
  );
};

export default ActionLink;
