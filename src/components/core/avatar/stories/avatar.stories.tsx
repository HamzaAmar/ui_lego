import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from '..';
import { User } from '../../../icons';

export default {
  title: 'Components/Core/Avatar',
  component: Avatar,
  args: {
    title: 'Hamza Miloud Amar',
  },
  argTypes: {
    if: {
      icon: { arg: 'variant', eq: 'icon' },
      image: { arg: 'variant', eq: 'image' },
    },
  },
} as ComponentMeta<typeof Avatar>;

const AvatarTemplate: ComponentStory<typeof Avatar> = (args) => (
  <Avatar {...args} />
);

export const AvatarWithImage = AvatarTemplate.bind({});

AvatarWithImage.args = {
  size: 'sm',
  image: 'https://picsum.photos/id/120/50/50',
  variant: 'image',
};

export const AvatarWithoutImage = AvatarTemplate.bind({});

AvatarWithoutImage.args = {
  size: 'sm',
};

export const AvatarWithIcon = AvatarTemplate.bind({});

AvatarWithIcon.args = {
  size: 'sm',
  variant: 'icon',
  icon: <User width={16} />,
};
