import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '..';
import { ProgressCircle } from './progress';

export default {
  title: 'COMPONENTS/CORE/ProgressCircle',
  component: ProgressCircle,
} as ComponentMeta<typeof ProgressCircle>;

export const ProgressCircleSize = () => {
  return (
    <Flex items="center" gap="sm">
      <ProgressCircle size="2xs" value={90} label="hello" />
      <ProgressCircle size="xs" value={90} label="hello" />
      <ProgressCircle size="sm" label="Hello" value={50} />
      <ProgressCircle size="md" label="Hello" value={50} />
      <ProgressCircle size="lg" label="Hello" value={50} />
      <ProgressCircle size="xl" label="Hello" value={50} />
      <ProgressCircle size="2xl" label="Hello" value={50} />
    </Flex>
  );
};

export const ProgressCircleColor = () => {
  return (
    <Flex gap="md">
      <ProgressCircle color="danger" value={90} label="hello" />
      <ProgressCircle color="success" label="Hello" value={50} />
      <ProgressCircle color="mint" label="Hello" value={50} />
      <ProgressCircle color="yellow" label="Hello" value={50} />
      <ProgressCircle color="purple" label="Hello" value={50} />
      <ProgressCircle color="indigo" label="Hello" value={50} />
      <ProgressCircle color="warning" label="Hello" value={50} />
      <ProgressCircle color="slate" label="Hello" value={50} />
    </Flex>
  );
};

export const ProgressValue = () => {
  return (
    <Flex direction="column" gap="md">
      <ProgressCircle value={10} label="hello" />
      <ProgressCircle label="Hello" value={30} />
      <ProgressCircle label="Hello" value={50} />
      <ProgressCircle label="Hello" value={70} />
      <ProgressCircle label="Hello" value={90} />
      <ProgressCircle label="Hello" value={100} />
    </Flex>
  );
};

export const ProgressShowValue = () => {
  return (
    <Flex direction="column" gap="md">
      <ProgressCircle showLabel value={10} label="hello" />
      <ProgressCircle showLabel label="Hello" value={30} />
      <ProgressCircle showLabel label="Hello" value={50} />
      <ProgressCircle showLabel label="Hello" value={70} />
      <ProgressCircle showLabel label="Hello" value={90} />
      <ProgressCircle showLabel label="Hello" value={100} />
    </Flex>
  );
};

const Template: ComponentStory<typeof ProgressCircle> = (args) => (
  <ProgressCircle {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  value: 50,
};
