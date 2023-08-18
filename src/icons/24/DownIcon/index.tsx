import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './down.svg';

type Props = {
  fill?: string;
}

export const DownIcon = ({ fill = '#262C3C' }: Props) => {
  return (
    <IconWrapper size={24} icon={icon} fill={fill} />
  );
}
