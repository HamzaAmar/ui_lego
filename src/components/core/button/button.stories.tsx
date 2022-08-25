import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'COMPONENTS/CORE/Button',
  component: Button,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;
export const RegularButton = Template.bind({});
