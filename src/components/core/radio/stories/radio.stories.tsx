import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio, Flex } from '../..';

export default {
  title: 'COMPONENTS/CORE/Radio',
  component: Radio,

  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Radio>;

export const RadioColor = () => {
  return (
    <Flex gap="sm" items="center">
      <Radio name="color" label="Red" color="red" />
      <Radio name="color" label="Indigo" color="indigo" />
      <Radio name="color" label="Green" color="green" />
      <Radio name="color" label="yellow" color="yellow" />
      <Radio name="color" label="Slate" color="slate" />
      <Radio name="color" label="Purple" color="purple" />
      <Radio name="color" label="Orange" color="orange" />
    </Flex>
  );
};

export const RadioSize = () => {
  return (
    <Flex gap="sm" items="center">
      <Radio name="color" size="2xs" label="Red" color="red" />
      <Radio name="color" size="xs" label="Indigo" color="indigo" />
      <Radio name="color" size="sm" label="Green" color="green" />
      <Radio name="color" size="md" label="yellow" color="yellow" />
      <Radio name="color" size="lg" label="Slate" color="slate" />
      <Radio name="color" size="xl" label="Purple" color="purple" />
      <Radio name="color" size="2xl" label="Orange" color="orange" />
    </Flex>
  );
};

export const RadioDisabled = () => {
  return (
    <Flex gap="sm" items="center">
      <Radio name="color" disabled label="Red" color="red" />
      <Radio name="color" disabled label="Indigo" color="indigo" />
      <Radio name="color" disabled label="Green" color="green" />
    </Flex>
  );
};

export const RadioWithDescription = () => {
  return (
    <Flex gap="sm" items="center">
      <Radio
        name="color"
        label="Green"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis nulla nisi velit, tenetur neque, hic veritatis ipsam voluptates molestias beatae, sed dolores id pariatur repudiandae commodi qui dignissimos tempora!"
        color="green"
      />
    </Flex>
  );
};

export const RadioRTL = () => {
  return (
    <Flex gap="sm" items="center" dir="rtl">
      <Radio name="color" label="احمر" color="red" />
      <Radio name="color" label="ازرق" color="indigo" />
      <Radio name="color" label="اخضر" color="green" />
    </Flex>
  );
};

export const RadioLongText = () => {
  return (
    <Flex gap="sm" items="center">
      <Radio
        name="color"
        label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis nulla nisi velit, tenetur neque, hic veritatis ipsam voluptates molestias beatae, sed dolores id"
        color="red"
      />
      <Radio
        name="color"
        label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis nulla nisi velit, tenetur neque, hic veritatis ipsam voluptates molestias beatae, sed dolores id"
        color="indigo"
      />
      <Radio
        name="color"
        label="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam debitis nulla nisi velit, tenetur neque, hic veritatis ipsam voluptates molestias beatae, sed dolores id"
        color="green"
      />
    </Flex>
  );
};

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  name: 'gender',
  title: 'Choose Your Gender',
  label: 'Hello',
};
