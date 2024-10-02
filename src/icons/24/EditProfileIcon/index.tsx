import React from 'react';

import { IconWrapper } from '../../IconWrapper';
import { ReactComponent as icon } from './edit.svg';

type Props = {
	fill?: string;
}

export const EditProfileIcon = ({ fill = '#262C3C' }: Props) => {
	return (
		<IconWrapper size={24} icon={icon} fill={fill} />
	);
}
