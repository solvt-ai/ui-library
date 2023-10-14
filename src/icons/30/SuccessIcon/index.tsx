import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './success.svg';

type Props = {
  fill?: string;
}

export const SuccessIcon = ({ fill = '#262C3C' }: Props) => {
  return (
    <IconWrapper size={30} icon={icon} fill={fill} />
  );
}
