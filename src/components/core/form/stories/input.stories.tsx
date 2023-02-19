import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { User } from '../../../icons';
import { Flex, Input } from '../..';

export default {
  title: 'Components/core/form/Input',
  component: Input,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const FilledInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input autoFocus placeholder="Focus" variant="filled" />
      <Input placeholder="Normal" variant="filled" />
      <Input disabled placeholder="Disabled" variant="filled" />
      <Input readOnly placeholder="readOnly" variant="filled" />
      <Input isInvalid placeholder="Error" variant="filled" />
      <Input
        suffixInput={<User width="16" />}
        placeholder="Error"
        variant="filled"
      />
      <Input
        prefixInput={<User width="16" />}
        placeholder="Placeholder"
        variant="filled"
      />
      <Input
        prefixInput="https://"
        suffixInput=".com"
        defaultValue="Default Value"
        variant="filled"
      />
    </Flex>
  );
};

export const OutlineInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input autoFocus placeholder="Focus" />
      <Input placeholder="Normal" />
      <Input disabled placeholder="Disabled" />
      <Input readOnly placeholder="readOnly" />
      <Input isInvalid placeholder="isInvalid" />
      <Input suffixInput={<User width="16" />} placeholder="Error" />
      <Input prefixInput={<User width="16" />} placeholder="Placeholder" />
      <Input
        prefixInput="https://"
        suffixInput=".com"
        defaultValue="Default Value"
      />
    </Flex>
  );
};
export const CornerInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input corner="full" placeholder="radius" />
      <Input corner="sharp" placeholder="sharp" />
      <Input corner="2xs" placeholder="circle" />
      <Input corner="xs" placeholder="circle" />
      <Input corner="xl" placeholder="circle" />
      <Input corner="2xl" placeholder="circle" />
      <Input corner="md" placeholder="circle" />
      <Input corner="lg" placeholder="circle" />
    </Flex>
  );
};

export const SizeInput = () => {
  return (
    <Flex gap="sm" direction="column">
      <Input size="sm" placeholder="Small(sm)" />
      <Input placeholder="Medium (md default You don't need it)" />
      <Input size="lg" placeholder="Large(lg)" />
    </Flex>
  );
};

export const Playground = Template.bind({});
