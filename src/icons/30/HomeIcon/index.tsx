import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './home.svg';

type Props = {
  fill?: string;
}

export const HomeIcon = ({ fill = '#262C3C' }: Props) => {
  return (
    <IconWrapper size={30} icon={icon} fill={fill} />
  );
}
