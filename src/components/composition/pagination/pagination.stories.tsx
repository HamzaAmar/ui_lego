import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Pagination } from '..';

export default {
  default: 'Components/Composition/Avatar',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => (
  <Pagination {...args} />
);

export const Playground = Template.bind({});
