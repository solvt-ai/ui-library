import React from 'react';

import { Meta } from '@storybook/react';

import Toast, { ToastProps, ToastStatus } from "./Toast";

export default {
  title: 'components/Toast',
  component: Toast,
  argTypes: {
    status: {
      options: [ToastStatus.Success, ToastStatus.Info, ToastStatus.Warning, ToastStatus.Error],
      control: { type: 'select' }
    }
  },
  args: {
    status: ToastStatus.Success,
    title: 'Success',
    description: 'We are currently experiencing issues with Zoom integration. Try to use other services'
  }
  
} as Meta<ToastProps>

export const ToastStoryTemplate = (props: ToastProps) => <Toast {...props} />

ToastStoryTemplate.storyName = 'Toast';
