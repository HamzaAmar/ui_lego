import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Radio, RadioGroup, Flex } from '../..';

export default {
  title: 'COMPONENTS/CORE/RadioGroup',
  component: RadioGroup,
  args: {
    children: (
      <>
        <Radio label="M" value="m" id="men" defaultChecked />
        <Radio label="Mme" value="mme" id="women" />
      </>
    ),
    name: 'gender',
    title: 'Choose Your Gender',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof RadioGroup>;

export const RadioGroupColor = () => {
  return (
    <Flex direction="column" gap="2xs">
      <RadioGroup name="sex" label="Your Color" id="primary">
        <Radio label="M" value="m" id="men.primary" defaultChecked />
        <Radio label="Mme" value="mme" id="women.primary" />
      </RadioGroup>
      <RadioGroup color="red" name="red" label="Your Color" id="red">
        <Radio label="M" value="m" id="men.red" defaultChecked />
        <Radio label="Mme" value="mme" id="women.red" />
      </RadioGroup>
      <RadioGroup color="green" name="green" label="Your Color" id="green">
        <Radio label="M" value="m" id="men.green" defaultChecked />
        <Radio label="Mme" value="mme" id="women.green" />
      </RadioGroup>
      <RadioGroup color="indigo" name="indigo" label="Your Color" id="indigo">
        <Radio label="M" value="m" id="men.indigo" defaultChecked />
        <Radio label="Mme" value="mme" id="women.indigo" />
      </RadioGroup>
      <RadioGroup color="purple" name="purple" label="Your Color" id="purple">
        <Radio label="M" value="m" id="men.purple" defaultChecked />
        <Radio label="Mme" value="mme" id="women.purple" />
      </RadioGroup>
      <RadioGroup color="slate" name="slate" label="Your Color" id="slate">
        <Radio label="M" value="m" id="men.slate" defaultChecked />
        <Radio label="Mme" value="mme" id="women.slate" />
      </RadioGroup>
    </Flex>
  );
};

export const RadioGroupColorShowLabel = () => {
  return (
    <Flex direction="column" gap="xs">
      <RadioGroup name="sex" showLabel label="Your Color" id="primary">
        <Radio label="M" value="m" id="men.primary" defaultChecked />
        <Radio label="Mme" value="mme" id="women.primary" />
      </RadioGroup>
      <RadioGroup color="red" showLabel name="red" label="Your Color" id="red">
        <Radio label="M" value="m" id="men.red" defaultChecked />
        <Radio label="Mme" value="mme" id="women.red" />
      </RadioGroup>
      <RadioGroup
        color="green"
        showLabel
        name="green"
        label="Your Color"
        id="green"
      >
        <Radio label="M" value="m" id="men.green" defaultChecked />
        <Radio label="Mme" value="mme" id="women.green" />
      </RadioGroup>
      <RadioGroup
        color="indigo"
        showLabel
        name="indigo"
        label="Your Color"
        id="indigo"
      >
        <Radio label="M" value="m" id="men.indigo" defaultChecked />
        <Radio label="Mme" value="mme" id="women.indigo" />
      </RadioGroup>
      <RadioGroup
        color="purple"
        showLabel
        name="purple"
        label="Your Color"
        id="purple"
      >
        <Radio label="M" value="m" id="men.purple" defaultChecked />
        <Radio label="Mme" value="mme" id="women.purple" />
      </RadioGroup>
    </Flex>
  );
};

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Playground = Template.bind({});
