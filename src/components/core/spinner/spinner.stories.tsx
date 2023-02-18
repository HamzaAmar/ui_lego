import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Flex, Spinner } from '..';

export default {
  title: 'COMPONENTS/CORE/Spinner',
  component: Spinner,
} as ComponentMeta<typeof Spinner>;

export const SpinnerColor = () => {
  return (
    <Flex gap="sm">
      <Spinner />
      <Spinner color="purple" />
      <Spinner color="success" />
      <Spinner color="warning" />
      <Spinner color="danger" />
      <Spinner color="indigo" />
      <Spinner color="yellow" />
      <Spinner color="slate" />
    </Flex>
  );
};

export const SpinnerSize = () => {
  return (
    <Flex gap="sm" items="center">
      <Spinner color="success" size="2xs" />
      <Spinner color="purple" size="xs" />
      <Spinner color="danger" size="sm" />
      <Spinner color="warning" size="md" />
      <Spinner color="indigo" size="lg" />
      <Spinner color="yellow" size="xl" />
      <Spinner color="slate" size="2xl" />
    </Flex>
  );
};

export const SpinnerThick = () => {
  return (
    <Flex gap="sm" items="center">
      <Spinner color="success" size="lg" thickness="2px" />
      <Spinner color="purple" size="lg" thickness="4px" />
      <Spinner color="danger" size="lg" thickness="6px" />
      <Spinner color="warning" size="lg" thickness="8px" />
      <Spinner color="indigo" size="lg" thickness="10px" />
      <Spinner color="yellow" size="lg" thickness="12px" />
      <Spinner color="slate" size="lg" thickness="14px" />
      <Spinner color="slate" size="lg" thickness="140px" />
    </Flex>
  );
};

const Template: ComponentStory<typeof Spinner> = (args) => (
  <Spinner {...args} />
);

export const Playground = Template.bind({});
