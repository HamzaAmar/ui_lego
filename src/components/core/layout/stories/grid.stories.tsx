import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Grid } from '../..';
import { BoxProps } from '../layout.type';

export default {
  title: 'Components/core/layout/Grid',
  component: Grid,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

const Box = ({ color = 'slate', content = 'Hello', className }: BoxProps) => {
  return (
    <div
      className={`u_${color} ${className}`}
      style={{
        padding: '.5rem',
        background: 'var(--color-shared-8)',
        border: '1px solid var(--color-shared-11)',
      }}
    >
      {content}
    </div>
  );
};

export const Playground = Template.bind({});

export const FlexNested = () => (
  <Grid columns="1fr 1fr" gap="sm">
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
    <Box />
  </Grid>
);
