import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Checkbox, Flex } from '..';

export default {
  title: 'Components/Core/CheckBox',
  component: Checkbox,
  args: {
    label: 'Hello',
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CheckboxColor = () => (
  <Flex gap="sm" items="center">
    <Checkbox color="danger" label="hello" />
    <Checkbox color="indigo" label="hello" />
    <Checkbox color="warning" label="hello" />
    <Checkbox color="success" label="hello" />
    <Checkbox color="purple" label="hello" />
    <Checkbox color="yellow" label="hello" />
    <Checkbox color="slate" label="hello" />
  </Flex>
);

export const DefaultCheck = () => (
  <Flex wrap gap="md" items="center">
    <Checkbox defaultChecked color="danger" label="danger" />
    <Checkbox defaultChecked color="success" label="success" />
    <Checkbox defaultChecked color="purple" label="purple" />
    <Checkbox defaultChecked color="indigo" label="indigo" />
    <Checkbox defaultChecked color="slate" label="slate" />
    <Checkbox defaultChecked color="warning" label="warning" />
  </Flex>
);
export const CheckboxSize = () => (
  <Flex gap="sm" items="center">
    <Checkbox size="2xs" label="hello" />
    <Checkbox size="xs" label="hello" />
    <Checkbox size="sm" label="hello" />
    <Checkbox size="md" label="hello" />
    <Checkbox size="lg" label="hello" />
    <Checkbox size="xl" label="hello" />
    <Checkbox size="2xl" label="hello" />
  </Flex>
);

export const CheckboxDisabled = () => (
  <Flex gap="sm" items="center">
    <Checkbox disabled defaultChecked color="danger" label="danger" />
    <Checkbox disabled color="success" label="success" />
    <Checkbox disabled color="purple" label="purple" />
    <Checkbox disabled color="indigo" label="indigo" />
    <Checkbox disabled color="slate" label="slate" />
    <Checkbox disabled defaultChecked color="warning" label="warning" />
  </Flex>
);

export const Playground = Template.bind({});
