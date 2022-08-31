import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Text from '.';

export default {
  title: 'COMPONENTS/CORE/Text',
  component: Text,
  args: {
    children: 'Nice To Meet You',
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Extra3SmallText = Template.bind({});
Extra3SmallText.args = {
  variant: '3xs',
};

export const Extra2SmallText = Template.bind({});
Extra2SmallText.args = {
  variant: 'xxs',
};

export const ExtraSmallText = Template.bind({});
ExtraSmallText.args = {
  variant: 'xs',
};

export const SmallText = Template.bind({});
SmallText.args = {
  variant: 'sm',
};

export const MediumText = Template.bind({});
MediumText.args = {
  variant: 'md',
};

export const ExtraLargeText = Template.bind({});
ExtraLargeText.args = {
  variant: 'xl',
};

export const Extra2LargeText = Template.bind({});
Extra2LargeText.args = {
  variant: 'xxl',
};

export const Extra3LargeText = Template.bind({});

Extra3LargeText.args = {
  variant: '3xl',
};
export const TruncateMultiLine = Template.bind({});
TruncateMultiLine.args = {
  variant: 'md',
  truncate: 'multiline',
  numberLine: 2,
  children:
    'Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet  Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You ',
};

export const TruncateSingleLine = Template.bind({});
TruncateSingleLine.args = {
  variant: 'md',
  truncate: 'singleline',
  children:
    'Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet  Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You Nice To Meet You ',
};

export const TextArabic = Template.bind({});
TextArabic.args = {
  dir: 'rtl',
  children:
    'مُرَاكُش  اموراكوش، «أرض الله») تسمى أيضًا بالمدينة الحمراء وعاصمة النخيل، هي ثالث أكبر مدينة في المملكة المغربية من ناحية عدد السكان. وهي عاصمة جهة مراكش آسفي. تقع مراكش على بعد 580 كم (360 ميل) جنوب شرق طنجة، 327 كم (203 ميل) جنوب شرق العاصمة المغربية الرباط، 239 كم (149 ميل) جنوب شرق الدار البيضاء، و 246 كم (153 ميل) شمال شرق أكادير.',
};
