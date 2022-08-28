import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Check } from '../../icons';

import Button from './button';

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

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {};
export const ButtonSecondary = Template.bind({});
ButtonSecondary.args = {
  color: 'secondary',
};

export const ButtonDanger = Template.bind({});
ButtonDanger.args = {
  color: 'danger',
};

export const ButtonSuccess = Template.bind({});
ButtonSuccess.args = {
  color: 'success',
};

export const ButtonWarning = Template.bind({});
ButtonWarning.args = {
  color: 'warning',
};

export const ButtonInfo = Template.bind({});
ButtonInfo.args = {
  color: 'info',
};

export const ButtonPrimaryOutline = Template.bind({});
ButtonPrimaryOutline.args = {
  variant: 'outline',
};
export const ButtonSecondaryOutline = Template.bind({});
ButtonSecondaryOutline.args = {
  color: 'secondary',
  variant: 'outline',
};

export const ButtonDangerOutline = Template.bind({});
ButtonDangerOutline.args = {
  color: 'danger',
  variant: 'outline',
};

export const ButtonSuccessOutline = Template.bind({});
ButtonSuccessOutline.args = {
  color: 'success',
  variant: 'outline',
};

export const ButtonWarningOutline = Template.bind({});
ButtonWarningOutline.args = {
  color: 'warning',
  variant: 'outline',
};

export const ButtonInfoOutline = Template.bind({});
ButtonInfoOutline.args = {
  color: 'info',
  variant: 'outline',
};

export const ButtonPrimaryText = Template.bind({});
ButtonPrimaryText.args = {
  variant: 'text',
};
export const ButtonSecondaryText = Template.bind({});
ButtonSecondaryText.args = {
  color: 'secondary',
  variant: 'text',
};

export const ButtonDangerText = Template.bind({});
ButtonDangerText.args = {
  color: 'danger',
  variant: 'text',
};

export const ButtonSuccessText = Template.bind({});
ButtonSuccessText.args = {
  color: 'success',
  variant: 'text',
};

export const ButtonWarningText = Template.bind({});
ButtonWarningText.args = {
  color: 'warning',
  variant: 'text',
};

export const ButtonInfoText = Template.bind({});
ButtonInfoText.args = {
  color: 'info',
  variant: 'text',
};

export const ButtonWithStartIcon = Template.bind({});
ButtonWithStartIcon.args = {
  icon: <Check width="16" />,
};

export const ButtonWithEndIcon = Template.bind({});
ButtonWithEndIcon.args = {
  icon: <Check width="16" />,
  iconPosition: 'end',
};

export const ButtonLoading = Template.bind({});
ButtonLoading.args = {
  state: 'loading',
};

export const ButtonWithIconLoading = Template.bind({});
ButtonWithIconLoading.args = {
  state: 'loading',
};

export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  disabled: true,
};
