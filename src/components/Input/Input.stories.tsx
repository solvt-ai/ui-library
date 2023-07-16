import React from 'react';

import { Meta } from "@storybook/react";
import Input, { IconPosition, InputProps, InputSize, InputType } from './Input';

export default {
  title: 'components/Input',
  component: Input,
  argTypes: {
    size: {
      options: [InputSize.Small, InputSize.Medium, InputSize.Large],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    type : {
      options: [InputType.Password, InputType.Default],
      control: { type: 'select' }
    },
    icon: {
      options: [],
      control: { type: 'select' }
    },
    iconPosition: {
      options: [IconPosition.Left, IconPosition.Right],
      control: { type: 'radio' }
    }
  },
  args: {
    placeholder: 'Type text...',
    type: InputType.Default,
    size: InputSize.Medium,
    disabled: false,
    iconPosition: IconPosition.Right,
    icon: undefined
  }
} as Meta<InputProps>

export const InputStoryTemplate = (props: InputProps) => <Input {...props} />;

InputStoryTemplate.storyName = 'Input';
