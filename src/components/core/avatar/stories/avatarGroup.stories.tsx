import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Avatar } from '..';

const members = [
  <Avatar
    variant="image"
    image="https://picsum.photos/id/120/50/50"
    title="hello"
  />,
  <Avatar
    variant="image"
    image="https://picsum.photos/id/121/50/50"
    title="hello"
  />,
  <Avatar
    variant="image"
    image="https://picsum.photos/id/122/50/50"
    title="hello"
  />,
  <Avatar
    variant="image"
    image="https://picsum.photos/id/123/50/50"
    title="hello"
  />,
  <Avatar
    variant="image"
    image="https://picsum.photos/id/124/50/50"
    title="hello"
  />,
];

export default {
  title: 'Components/Core/AvatarGroup',
  component: Avatar.Group,
  args: {
    children: members,
    size: 'sm',
  },
} as ComponentMeta<typeof Avatar.Group>;

export const AvatarGroupLimit = () => {
  return (
    <Avatar.Group limit={10} size="lg" color="success" variant="grid">
      <Avatar variant="image" title="Hamza Miloud Amar" />
      <Avatar variant="image" title="Nabil Labil" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
    </Avatar.Group>
  );
};

export const AvatarGroupColor = () => {
  return (
    <Avatar.Group limit={10} size="lg" color="red" variant="grid">
      <Avatar variant="image" title="Hamza Miloud Amar" />
      <Avatar variant="image" title="Nabil Labil" />
    </Avatar.Group>
  );
};

export const AvatarGroupStack = () => {
  return (
    <Avatar.Group color="purple" variant="stack" limit={7}>
      <Avatar variant="image" title="Hamza Miloud Amar" />
      <Avatar variant="image" title="Nabil Labil" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
      <Avatar variant="image" title="Kmal Sifoun" />
    </Avatar.Group>
  );
};

const Template: ComponentStory<typeof Avatar.Group> = (args) => (
  <Avatar.Group {...args} />
);

export const Playground = Template.bind({});
