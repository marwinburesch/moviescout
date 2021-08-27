import React from 'react';
import styles from './ActionLink.module.css';
import ChevronRightIcon from '../assets/ChevronRightIcon';

export type ActionLinkProps = {
  children: React.ReactNode;
  url: string;
  hasIcon: boolean;
};

const ActionLink = ({
  children,
  url,
  hasIcon,
}: ActionLinkProps): JSX.Element => {
  return (
    <a
      className={`${styles.actionLink} ${
        hasIcon ? styles.actionLinkWithIcon : ''
      }`}
      href={url}
      target="_blank"
    >
      <span className={styles.title}>{children}</span>
      {hasIcon && (
        <ChevronRightIcon
          className={styles.chevronRightIcon}
          width="1.5rem"
          height="1.5rem"
        />
      )}
    </a>
  );
};

export default ActionLink;
