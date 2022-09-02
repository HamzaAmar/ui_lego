import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from '.';

export default {
  title: 'COMPONENTS/CORE/Radio',
  component: Radio,
  args: {
    children: 'Hello world',
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RegularRadio = Template.bind({});
