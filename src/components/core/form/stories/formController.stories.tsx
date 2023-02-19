import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { FormController, InputNumber, Input, InputPassword } from '..';

export default {
  title: 'Components/core/form/FormController',
  component: FormController,
  args: {
    'aria-label': 'Nice',
    placeholder: 'Type your Name',
  },
} as ComponentMeta<typeof FormController>;

const Template: ComponentStory<typeof FormController> = (args) => (
  <FormController {...args} />
);

export const SizeInput = () => {
  return (
    <FormController id="hello" label="Name" required>
      <Input fluid name="name" />
    </FormController>
  );
};

export const StepInput = () => {
  return (
    <FormController
      id="age"
      required
      label="Age"
      status="danger"
      message="number Must be greet than 0"
    >
      <InputNumber step="1" size="sm" min="1" placeholder="Step 1" />
    </FormController>
  );
};

export const PasswordControllerWithHint = () => {
  return (
    <FormController
      required
      hint="Password Must be Between 5 and 10 Caracteres"
      id="password"
      label="Password"
    >
      <InputPassword />
    </FormController>
  );
};

export const Playground = Template.bind({});
