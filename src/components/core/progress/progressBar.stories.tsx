import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from '..';
import { ProgressBar } from './progress';

export default {
  title: 'COMPONENTS/CORE/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

export const ProgressBarSize = () => {
  return (
    <Flex direction="column" gap="sm">
      <ProgressBar size="2xs" value={90} label="hello" />
      <ProgressBar size="xs" value={90} label="hello" />
      <ProgressBar size="sm" label="Hello" value={50} />
      <ProgressBar size="md" label="Hello" value={50} />
      <ProgressBar size="lg" label="Hello" value={50} />
      <ProgressBar size="xl" label="Hello" value={50} />
      <ProgressBar size="2xl" label="Hello" value={50} />
    </Flex>
  );
};

export const ProgressBarColor = () => {
  return (
    <Flex direction="column" gap="md">
      <ProgressBar color="danger" value={90} label="hello" />
      <ProgressBar color="success" label="Hello" value={50} />
      <ProgressBar color="mint" label="Hello" value={50} />
      <ProgressBar color="yellow" label="Hello" value={50} />
      <ProgressBar color="purple" label="Hello" value={50} />
      <ProgressBar color="indigo" label="Hello" value={50} />
      <ProgressBar color="warning" label="Hello" value={50} />
      <ProgressBar color="slate" label="Hello" value={50} />
    </Flex>
  );
};

export const ProgressValue = () => {
  return (
    <Flex direction="column" gap="md">
      <ProgressBar value={10} label="hello" />
      <ProgressBar label="Hello" value={30} />
      <ProgressBar label="Hello" value={50} />
      <ProgressBar label="Hello" value={70} />
      <ProgressBar label="Hello" value={90} />
      <ProgressBar label="Hello" value={100} />
    </Flex>
  );
};

export const ProgressShowValue = () => {
  return (
    <Flex direction="column" gap="md">
      <ProgressBar showLabel value={10} label="hello" />
      <ProgressBar showLabel label="Hello" value={30} />
      <ProgressBar showLabel label="Hello" value={50} />
      <ProgressBar showLabel label="Hello" value={70} />
      <ProgressBar showLabel label="Hello" value={90} />
      <ProgressBar showLabel label="Hello" value={100} />
    </Flex>
  );
};

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Playground = Template.bind({});
Playground.args = {
  value: 50,
};
