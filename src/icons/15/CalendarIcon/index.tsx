import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './calendar.svg';

type Props = {
  fill?: string;
}

export const CalendarIcon = ({ fill = '#262C3C' }: Props) => {
  return (
    <IconWrapper size={16} icon={icon} fill={fill} />
  );
}
