import React from 'react';

import { Meta } from '@storybook/react';
import Button, { ButtonIntent, ButtonProps, ButtonSize } from "./Button";

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        intent: {
            options: [ButtonIntent.Primary, ButtonIntent.Outline],
            control: { type: 'radio' }
        },
        size: {
            options: [ButtonSize.Small, ButtonSize.Medium, ButtonSize.Large],
            control: { type: 'select' }
        },
        disabled: {
            control: { type: 'boolean' }
        }
    },
    args: {
        text: 'Test button',
        intent: ButtonIntent.Primary,
        size: ButtonSize.Medium,
        disabled: false
    }
} as Meta<ButtonProps>

export const ButtonStoryTemplate = ({ text, ...args }: ButtonProps ) => <Button text={text} {...args} />;

ButtonStoryTemplate.storyName = 'Button';