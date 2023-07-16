import React from 'react';

import { Meta } from '@storybook/react';
import Link, { LinkSize, LinkProps } from './Link';

export default {
  title: 'components/Link',
  component: Link,
  argTypes: {
    size: {
      options: [LinkSize.Small, LinkSize.Medium, LinkSize.Large],
      control: { type: 'select' }
    },
    disabled: {
      control: { type: 'boolean' }
    },
    bold: {
      control: { type: 'boolean' }
    }
  },
  args: {
    text: 'Custom Link Component',
    size: LinkSize.Medium,
    disabled: false,
    bold: false,
  }
} as Meta<LinkProps>

export const LinkStoryTemplate = ({ text, ...args }: LinkProps) => <Link text={text} {...args} />;

LinkStoryTemplate.storyName = 'Link';
