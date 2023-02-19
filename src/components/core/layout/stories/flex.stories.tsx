import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex, Text } from '../..';
import { BoxProps } from '../layout.type';

export default {
  title: 'Components/core/layout/Flex',
  component: Flex,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof Flex>;

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

function boxes(size: number) {
  return Array.from({ length: size }, (_, index) => <Box key={index} />);
}

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const FlexLayout = () => <Flex gap="sm">{boxes(6)}</Flex>;

export const FlexGaps = () => (
  <Flex direction="column" gap="sm">
    <Flex gap="2xs">{boxes(6)}</Flex>
    <Flex gap="xs">{boxes(6)}</Flex>
    <Flex gap="sm">{boxes(6)}</Flex>
    <Flex gap="md">{boxes(6)}</Flex>
    <Flex gap="lg">{boxes(6)}</Flex>
    <Flex gap="xl">{boxes(6)}</Flex>
    <Flex gap="2xl">{boxes(6)}</Flex>
  </Flex>
);

export const FlexAlignment = () => (
  <Flex direction="column" gap="lg">
    <Text size="lg">Center Center</Text>
    <Flex gap="sm" items="center" justify="center">
      {boxes(6)}
    </Flex>
    <Text size="lg">Center Between</Text>
    <Flex gap="sm" items="center" justify="between">
      {boxes(6)}
    </Flex>
    <Text size="lg">Center Around</Text>
    <Flex gap="sm" items="center" justify="around">
      {boxes(6)}
    </Flex>
    <Text size="lg">Center Evenly</Text>

    <Flex gap="sm" items="center" justify="evenly">
      {boxes(6)}
    </Flex>
  </Flex>
);

export const FlexWrap = () => (
  <Flex gap="sm" wrap>
    {boxes(40)}
  </Flex>
);

export const FlexGrow = () => (
  <Flex direction="column" gap="lg">
    <Flex gap="sm">
      {Array.from({ length: 4 }, (_, index) => (
        <Box className="u_flex-1" key={index} />
      ))}
    </Flex>
    <Flex gap="sm">
      <Box className="u_flex-1" />
      <Box className="u_flex-2" />
      <Box className="u_flex-1" />
      <Box className="u_flex-2" />
    </Flex>
  </Flex>
);
export const FlexNested = () => (
  <Flex gap="sm" direction="column">
    <Box className="u_flex-1" content="header" />
    <Flex gap="sm">
      <Box className="u_flex-1" content="sidebar" />
      <Box className="u_flex-2" content="main" />
      <Box className="u_flex-1" content="sidebar" />
    </Flex>
    <Box className="u_flex-1" content="footer" />
  </Flex>
);

export const Playground = Template.bind({});
