import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './search.svg';

type Props = {
  fill?: string;
}

export const SearchIcon = ({ fill = '#262C3C' }: Props) => {
  return (
    <IconWrapper size={12} icon={icon} fill={fill} />
  );
}
