import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Badge, Flex } from '..';
import { User } from '../../icons';

export const BadgeVariant = () => {
  return (
    <Flex items="center" gap="sm">
      <Badge variant="dot" />
      <Badge variant="icon" icon={<User />} />
      <Badge variant="numeric" value={10} max={20} />
    </Flex>
  );
};

export const BadgeColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Badge variant="numeric" value={10} max={20} color="danger" />
      <Badge variant="numeric" value={10} max={20} color="success" />
      <Badge variant="numeric" value={10} max={20} color="purple" />
      <Badge variant="numeric" value={10} max={20} color="success" />
      <Badge variant="numeric" value={10} max={20} color="yellow" />
      <Badge variant="numeric" value={10} max={20} color="warning" />
    </Flex>
  );
};

export const BadgeNumericMax = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Flex wrap gap="md" items="center">
        <Badge variant="numeric" color="danger" value={10} max={5} />
        <Badge variant="numeric" color="danger" value={10} max={9} />
        <Badge variant="numeric" color="danger" value={20} max={15} />
        <Badge variant="numeric" color="danger" value={1000} max={10} />
        <Badge variant="numeric" color="danger" value={99999} max={100} />
      </Flex>
    </Flex>
  );
};

export const BadgeSize = () => {
  return (
    <Flex direction="column" gap="md">
      <Flex wrap gap="md" items="center">
        <Badge variant="numeric" value={10} max={20} size="2xs" />
        <Badge variant="numeric" value={10} max={20} size="xs" />
        <Badge variant="numeric" value={10} max={20} size="sm" />
        <Badge variant="numeric" value={10} max={20} size="md" />
        <Badge variant="numeric" value={10} max={20} size="lg" />
        <Badge variant="numeric" value={10} max={20} size="xl" />
        <Badge variant="numeric" value={10} max={20} size="2xl" />
      </Flex>
      <Flex wrap gap="md" items="center">
        <Badge variant="icon" icon={<User />} size="2xs" />
        <Badge variant="icon" icon={<User />} size="xs" />
        <Badge variant="icon" icon={<User />} size="sm" />
        <Badge variant="icon" icon={<User />} size="md" />
        <Badge variant="icon" icon={<User />} size="lg" />
        <Badge variant="icon" icon={<User />} size="xl" />
        <Badge variant="icon" icon={<User />} size="2xl" />
      </Flex>
      <Flex wrap gap="md" items="center">
        <Badge variant="dot" size="2xs" />
        <Badge variant="dot" size="xs" />
        <Badge variant="dot" size="sm" />
        <Badge variant="dot" size="md" />
        <Badge variant="dot" size="lg" />
        <Badge variant="dot" size="xl" />
        <Badge variant="dot" size="2xl" />
      </Flex>
    </Flex>
  );
};

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

export const Playground = Template.bind({});
