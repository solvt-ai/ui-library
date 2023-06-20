import React from 'react';

import { Meta } from '@storybook/react';
import Button, { ButtonIntent, ButtonProps } from "./Button";

export default {
    title: 'components/Button',
    component: Button,
    argTypes: {
        intent: {
            options: ['primary', 'outline'],
            control: { type: 'radio' }
        },
        size: {
            options: ['small', 'medium', 'large'],
            control: { type: 'select' }
        }
    },
    args: {
        text: 'Test button',
        intent: 'primary'
    }
} as Meta<ButtonProps>

export const ButtonStoryTemplate = ({ ...args} ) => <Button {...args} />;

ButtonStoryTemplate.storyName = 'Button';