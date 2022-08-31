import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import Badge from '.';

export default {
  title: 'COMPONENTS/CORE/Badge',
  component: Badge,
  argTypes: {
    classNames: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const NumericPrimary = Template.bind({});

NumericPrimary.args = {
  value: 10,
  max: 20,
  variant: 'numeric',
};

export const NumericSmallMaxDanger = Template.bind({});

NumericSmallMaxDanger.args = {
  value: 12,
  max: 9,
  variant: 'numeric',
  color: 'danger',
};

export const SecondaryDot = Template.bind({});

SecondaryDot.args = {
  variant: 'dot',
  color: 'secondary',
};
