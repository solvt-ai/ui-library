import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './expand.svg';

type Props = {
  fill?: string;
}

export const ExpandIcon = ({ fill = '#262C3C' }: Props) => {
  return (
    <IconWrapper size={24} icon={icon} fill={fill} />
  );
}
