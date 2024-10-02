import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './lock.svg';

type Props = {
	fill?: string;
}

export const LockIcon = ({ fill = '#262C3C' }: Props) => {
	return (
		<IconWrapper size={24} icon={icon} fill={fill} />
	);
}
