import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconButton, Flex } from '../..';
import { User } from '../../../icons';

export default {
  title: 'COMPONENTS/CORE/IconIconButton',
  component: IconButton,
  args: {
    children: 'Hello world',
  },
  argTypes: {
    icon: {
      table: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof IconButton>;

export const IconButtonSolidColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <IconButton icon={<User />} variant="solid" title="Hello world" />
      <IconButton
        icon={<User />}
        variant="solid"
        title="Hello xorld"
        color="danger"
      />

      <IconButton
        icon={<User />}
        variant="solid"
        title="Hello xorld"
        color="warning"
      />

      <IconButton
        icon={<User />}
        variant="solid"
        title="Hello xorld"
        color="success"
      />

      <IconButton
        icon={<User />}
        variant="solid"
        title="Hello xorld"
        color="indigo"
      />

      <IconButton
        icon={<User />}
        variant="solid"
        title="Hello xorld"
        color="purple"
      />

      <IconButton
        icon={<User />}
        variant="solid"
        title="Hello xorld"
        color="yellow"
      />

      <IconButton
        icon={<User />}
        variant="solid"
        title="Hello xorld"
        color="slate"
      />
    </Flex>
  );
};
export const IconButtonOutlineColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <IconButton icon={<User />} variant="outline" title="Hello world" />
      <IconButton
        icon={<User />}
        variant="outline"
        title="Hello xorld"
        color="danger"
      />

      <IconButton
        icon={<User />}
        variant="outline"
        title="Hello xorld"
        color="warning"
      />

      <IconButton
        icon={<User />}
        variant="outline"
        title="Hello xorld"
        color="success"
      />

      <IconButton
        icon={<User />}
        variant="outline"
        title="Hello xorld"
        color="indigo"
      />

      <IconButton
        icon={<User />}
        variant="outline"
        title="Hello xorld"
        color="purple"
      />

      <IconButton
        icon={<User />}
        variant="outline"
        title="Hello xorld"
        color="yellow"
      />

      <IconButton
        icon={<User />}
        variant="outline"
        title="Hello xorld"
        color="slate"
      />
    </Flex>
  );
};
export const IconButtonSoftColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <IconButton icon={<User />} variant="soft" title="Hello world" />
      <IconButton
        icon={<User />}
        variant="soft"
        title="Hello xorld"
        color="danger"
      />

      <IconButton
        icon={<User />}
        variant="soft"
        title="Hello xorld"
        color="warning"
      />

      <IconButton
        icon={<User />}
        variant="soft"
        title="Hello xorld"
        color="success"
      />

      <IconButton
        icon={<User />}
        variant="soft"
        title="Hello xorld"
        color="indigo"
      />

      <IconButton
        icon={<User />}
        variant="soft"
        title="Hello xorld"
        color="purple"
      />

      <IconButton
        icon={<User />}
        variant="soft"
        title="Hello xorld"
        color="yellow"
      />

      <IconButton
        icon={<User />}
        variant="soft"
        title="Hello xorld"
        color="slate"
      />
    </Flex>
  );
};

export const IconButtonSize = () => {
  return (
    <Flex wrap gap="md" items="center">
      <IconButton icon={<User />} size="2xs" title="Hello world" />
      <IconButton
        icon={<User />}
        size="xs"
        title="Hello xorld"
        color="danger"
      />

      <IconButton
        icon={<User />}
        size="sm"
        title="Hello xorld"
        color="warning"
      />

      <IconButton
        icon={<User />}
        size="md"
        title="Hello xorld"
        color="success"
      />

      <IconButton
        icon={<User />}
        size="lg"
        title="Hello xorld"
        color="indigo"
      />

      <IconButton
        icon={<User />}
        size="xl"
        title="Hello xorld"
        color="purple"
      />

      <IconButton
        icon={<User />}
        size="2xl"
        title="Hello xorld"
        color="yellow"
      />
    </Flex>
  );
};

export const IconButtonCorner = () => {
  return (
    <Flex wrap gap="md" items="center">
      <IconButton icon={<User />} corner="2xs" title="World" />
      <IconButton icon={<User />} corner="xs" title="World" />

      <IconButton icon={<User />} corner="sm" title="World" />

      <IconButton icon={<User />} corner="md" title="World" />

      <IconButton icon={<User />} corner="lg" title="World" />

      <IconButton icon={<User />} corner="xl" title="World" />

      <IconButton icon={<User />} corner="2xl" title="World" />
      <IconButton icon={<User />} corner="full" title="World" />
      <IconButton icon={<User />} title="World" />
    </Flex>
  );
};

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Playground = Template.bind({});
