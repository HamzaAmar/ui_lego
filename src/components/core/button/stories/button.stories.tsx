import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button, Flex } from '../..';
import { User } from '../../../icons';

export default {
  title: 'COMPONENTS/CORE/Button',
  component: Button,
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
} as ComponentMeta<typeof Button>;

export const ButtonSolidColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button variant="solid">Update Profile</Button>
      <Button variant="solid" color="danger">
        Hey
      </Button>
      <Button variant="solid" color="warning">
        Add Cart
      </Button>
      <Button variant="solid" color="success">
        Review
      </Button>
      <Button variant="solid" color="indigo">
        Like
      </Button>
      <Button variant="solid" color="purple">
        Send
      </Button>
      <Button variant="solid" color="yellow">
        Yellow
      </Button>
      <Button variant="solid" color="slate">
        Slate
      </Button>
    </Flex>
  );
};

export const ButtonOutlineColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button variant="outline">Update Profile</Button>
      <Button variant="outline" color="danger">
        Hey
      </Button>
      <Button variant="outline" color="warning">
        Add Cart
      </Button>
      <Button variant="outline" color="success">
        Review
      </Button>
      <Button variant="outline" color="indigo">
        Like
      </Button>
      <Button variant="outline" color="purple">
        Send
      </Button>
      <Button variant="outline" color="yellow">
        Yellow
      </Button>
      <Button variant="outline" color="slate">
        Slate
      </Button>
    </Flex>
  );
};
export const ButtonSoftColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button variant="soft">Update Profile</Button>
      <Button variant="soft" color="danger">
        Hey
      </Button>
      <Button variant="soft" color="warning">
        Add Cart
      </Button>
      <Button variant="soft" color="success">
        Review
      </Button>
      <Button variant="soft" color="indigo">
        Like
      </Button>
      <Button variant="soft" color="purple">
        Send
      </Button>
      <Button variant="soft" color="yellow">
        Yellow
      </Button>
      <Button variant="soft" color="slate">
        Slate
      </Button>
    </Flex>
  );
};

export const ButtonSize = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button size="2xs">Update Profile</Button>
      <Button size="xs" color="danger">
        Hey
      </Button>
      <Button size="sm" color="warning">
        Add Cart
      </Button>
      <Button size="md" color="success">
        Review
      </Button>
      <Button size="lg" color="indigo">
        Like
      </Button>
      <Button size="xl" color="purple">
        Send
      </Button>
      <Button size="2xl" color="yellow">
        Yellow
      </Button>
    </Flex>
  );
};

export const ButtonIcons = () => {
  return (
    <Flex direction="column" gap="md">
      <Flex wrap gap="md" items="center">
        <Button size="2xs" icon={<User />}>
          Update Profile
        </Button>
        <Button size="xs" color="danger" icon={<User />}>
          Hey
        </Button>
        <Button size="sm" color="warning" icon={<User />}>
          Add Cart
        </Button>
        <Button size="md" color="success" icon={<User />}>
          Review
        </Button>
        <Button size="lg" color="indigo" icon={<User />}>
          Like
        </Button>
        <Button size="xl" color="purple" icon={<User />}>
          Send
        </Button>
        <Button size="2xl" color="yellow" icon={<User />}>
          Yellow
        </Button>
      </Flex>
      <Flex wrap gap="md" items="center">
        <Button iconPosition="end" size="2xs" icon={<User />}>
          Update Profile
        </Button>
        <Button iconPosition="end" size="xs" color="danger" icon={<User />}>
          Hey
        </Button>
        <Button iconPosition="end" size="sm" color="warning" icon={<User />}>
          Add Cart
        </Button>
        <Button iconPosition="end" size="md" color="success" icon={<User />}>
          Review
        </Button>
        <Button iconPosition="end" size="lg" color="indigo" icon={<User />}>
          Like
        </Button>
        <Button iconPosition="end" size="xl" color="purple" icon={<User />}>
          Send
        </Button>
        <Button iconPosition="end" size="2xl" color="yellow" icon={<User />}>
          Yellow
        </Button>
      </Flex>
    </Flex>
  );
};

export const ButtonStatus = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Button state="loading" variant="solid">
        Update Profile
      </Button>
      <Button variant="solid" color="danger">
        Hey
      </Button>
      <Button variant="solid" disabled color="danger">
        Hey
      </Button>
    </Flex>
  );
};

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Playground = Template.bind({});
