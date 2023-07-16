import React from 'react';

import styles from './Link.module.scss';
import cn from "classnames";

export enum LinkSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

export interface LinkProps {
  text: string;
  size?: LinkSize;
  disabled?: boolean;
  onClick?: () => void;
  linkElement?: boolean;
  href?: string;
  bold?: boolean
}

const Link = ({
  text, size = LinkSize.Medium,
  disabled = false, onClick,
  href, bold = false
}: LinkProps) => (
  <a
    href={href ? href : undefined}
    onClick={disabled ? undefined : onClick}
    className={cn(styles.link, styles[size], { [styles.disabled]: disabled, [styles.bold]: bold })}
  >
    {text}
  </a>
);

export default Link;
