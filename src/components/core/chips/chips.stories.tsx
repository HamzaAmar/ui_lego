import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { Chips, Flex } from '..';

export default {
  title: 'Components/Core/Chips',
  component: Chips,
} as ComponentMeta<typeof Chips>;

export const ChipsSolidColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Chips color="success" variant="solid">
        Hello
      </Chips>
      <Chips color="danger" variant="solid">
        Hello
      </Chips>
      <Chips color="warning" variant="solid">
        Hello
      </Chips>
      <Chips color="purple" variant="solid">
        Hello
      </Chips>
      <Chips color="indigo" variant="solid">
        Hello
      </Chips>
      <Chips color="mint" variant="solid">
        Hello
      </Chips>
      <Chips color="yellow" variant="solid">
        Hello
      </Chips>
      <Chips color="slate" variant="solid">
        Hello
      </Chips>
    </Flex>
  );
};
export const ChipOutlineColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Chips color="success" variant="outline">
        Hello
      </Chips>
      <Chips color="danger" variant="outline">
        Hello
      </Chips>
      <Chips color="warning" variant="outline">
        Hello
      </Chips>
      <Chips color="purple" variant="outline">
        Hello
      </Chips>
      <Chips color="indigo" variant="outline">
        Hello
      </Chips>
      <Chips color="mint" variant="outline">
        Hello
      </Chips>
      <Chips color="yellow" variant="outline">
        Hello
      </Chips>
      <Chips color="slate" variant="outline">
        Hello
      </Chips>
    </Flex>
  );
};

export const ChipSoftColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Chips color="success" variant="soft">
        Hello
      </Chips>
      <Chips color="danger" variant="soft">
        Hello
      </Chips>
      <Chips color="warning" variant="soft">
        Hello
      </Chips>
      <Chips color="purple" variant="soft">
        Hello
      </Chips>
      <Chips color="indigo" variant="soft">
        Hello
      </Chips>
      <Chips color="mint" variant="soft">
        Hello
      </Chips>
      <Chips color="yellow" variant="soft">
        Hello
      </Chips>
      <Chips color="slate" variant="soft">
        Hello
      </Chips>
    </Flex>
  );
};

export const ChipsSize = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Chips color="success" size="2xs" variant="soft">
        Hello
      </Chips>
      <Chips color="danger" size="xs" variant="soft">
        Hello
      </Chips>
      <Chips color="warning" size="sm" variant="soft">
        Hello
      </Chips>
      <Chips color="purple" size="md" variant="soft">
        Hello
      </Chips>
      <Chips color="indigo" size="lg" variant="soft">
        Hello
      </Chips>
      <Chips color="mint" size="xl" variant="soft">
        Hello
      </Chips>
      <Chips color="yellow" size="2xl" variant="soft">
        Hellos
      </Chips>
    </Flex>
  );
};

const Template: ComponentStory<typeof Chips> = (args) => <Chips {...args} />;

export const Playground = Template.bind({});
