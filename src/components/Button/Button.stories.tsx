import React from 'react';

import { Meta } from '@storybook/react';
import Button, { ButtonIntent, ButtonProps, ButtonSize } from "./Button";
import  {InfoIcon, SuccessIcon, WarningIcon } from "../../icons";

const ICONS = { InfoIcon, SuccessIcon, WarningIcon };

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        intent: {
            options: [ButtonIntent.Primary, ButtonIntent.Outline, ButtonIntent.Danger, ButtonIntent.Alert],
            control: { type: 'radio' }
        },
        size: {
            options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
            control: { type: 'select' }
        },
        disabled: {
            control: { type: 'boolean' }
        },
        fluid: {
            control: { type: 'boolean' }
        },
        icon: {
            options: Object.keys(ICONS),
            mapping: {
                InfoIcon: <InfoIcon />,
                SuccessIcon: <SuccessIcon />,
                WarningIcon: <WarningIcon />
            },
            control: { type: 'select' }
        },
    },
    args: {
        text: 'Test button',
        intent: ButtonIntent.Primary,
        size: ButtonSize.Medium,
        disabled: false,
        fluid: false,
    }
} as Meta<ButtonProps>

export const ButtonStoryTemplate = ({ text, ...args }: ButtonProps ) => <Button text={text} {...args} />;

ButtonStoryTemplate.storyName = 'Button';
