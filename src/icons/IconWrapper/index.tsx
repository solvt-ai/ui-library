import React, { ReactElement } from 'react';

import styles from './styles.module.scss';

export type IconProps = {
  fill?: string;
  icon?: ReactElement;
  size?: 24 | 30;
}

export const IconWrapper = ({ fill, icon, size }: IconProps) => {
  const Icon = icon;
  return (
    <div className={styles.icon} style={{ width: size, height: size, '--color': fill }}>
      <Icon />
    </div>
  );
};
