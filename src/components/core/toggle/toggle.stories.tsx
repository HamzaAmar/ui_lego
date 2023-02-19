import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Toggle, Flex } from '..';

export default {
  title: 'Components/Core/Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => <Toggle {...args} />;

export const Playground = Template.bind({});

export const ToggleColor = () => (
  <Flex gap="sm">
    <Toggle label="red" color="red" />
    <Toggle label="green" color="green" />
    <Toggle label="warning" color="warning" />
    <Toggle label="purple" color="purple" />
    <Toggle label="slate" color="slate" />
    <Toggle label="indigo" color="indigo" />
    <Toggle label="mint" color="mint" />
  </Flex>
);

export const ToggleDefaultCheck = () => (
  <Flex gap="sm">
    <Toggle defaultPressed label="red" color="red" />
    <Toggle defaultPressed label="green" color="green" />
    <Toggle defaultPressed label="warning" color="warning" />
    <Toggle defaultPressed label="purple" color="purple" />
    <Toggle defaultPressed label="slate" color="slate" />
    <Toggle defaultPressed label="indigo" color="indigo" />
    <Toggle defaultPressed label="mint" color="mint" />
  </Flex>
);

export const ToggleSize = () => (
  <Flex items="center" gap="sm">
    <Toggle label="red" size="2xs" color="red" />
    <Toggle label="green" size="xs" color="green" />
    <Toggle label="warning" size="sm" color="warning" />
    <Toggle label="purple" size="md" color="purple" />
    <Toggle label="slate" size="lg" color="slate" />
    <Toggle label="indigo" size="xl" color="indigo" />
    <Toggle label="mint" size="2xl" color="mint" />
  </Flex>
);

export const ToggleDisabled = () => (
  <Flex wrap gap="md" items="center">
    <Toggle label="hello" defaultPressed disabled color="danger" />
    <Toggle label="hello" disabled color="success" />
    <Toggle label="hello" disabled color="purple" />
    <Toggle label="hello" disabled color="indigo" />
    <Toggle label="hello" disabled color="slate" />
    <Toggle label="hello" disabled color="warning" />
  </Flex>
);
