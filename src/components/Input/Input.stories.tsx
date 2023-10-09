import React from 'react';

import { Meta } from "@storybook/react";
import Input, { IconPosition, InputIntent, InputProps, InputSize, InputType } from './Input';
import { ClosedEyeIcon } from "../../icons";

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
    invalid: {
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
    },
    intent: {
      options: [InputIntent.Outline, InputIntent.Primary],
      control: { type: 'select' }
    }
  },
  args: {
    placeholder: 'Type text...',
    type: InputType.Default,
    size: InputSize.Medium,
    disabled: false,
    iconPosition: IconPosition.Right,
    icon: <ClosedEyeIcon />,
    invalid: false,
    intent: InputIntent.Outline
  }
} as Meta<InputProps>

export const InputStoryTemplate = (props: InputProps) => <Input {...props} />;

InputStoryTemplate.storyName = 'Input';
