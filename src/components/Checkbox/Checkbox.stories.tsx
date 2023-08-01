import React from 'react';

import { Meta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    value: {
      control: { type: 'boolean' }
    },
    disabled: {
      control: { type: 'boolean' }
    }
  },
  args: {
    value: true,
    label: 'Label for checkbox',
    disabled: false,
  }
} as Meta<CheckboxProps>

export const CheckboxStoryTemplate = (props: CheckboxProps) => <Checkbox {...props} />;

CheckboxStoryTemplate.storyName = 'Checkbox';
