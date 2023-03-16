import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Caret } from '../../../icons';
import { MenuButton, Button, Text } from '../..';

export default {
  title: 'Components/Composition/MenuButtonRegular',
  component: MenuButton,
} as ComponentMeta<typeof MenuButton>;

export const SortMenuButton = () => {
  const [state, setState] = useState('lowest-price');
  return (
    <MenuButton
      trigger={
        <Button
          iconPosition="end"
          size="sm"
          icon={<Caret />}
          variant="outline"
          color="slate"
        >
          Sort by
        </Button>
      }
    >
      <MenuButton.Content>
        <MenuButton.RadioGroup value={state} onValueChange={setState}>
          <MenuButton.Radio value="lowest-price">
            <Text
              size="xs"
              weight={state === 'lowest-price' ? 'medium' : 'normal'}
            >
              Lowest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="highest-price">
            <Text
              size="xs"
              weight={state === 'highest-price' ? 'medium' : 'normal'}
            >
              Highest Price
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="top-review">
            <Text
              size="xs"
              weight={state === 'top-review' ? 'medium' : 'normal'}
            >
              Top Customers Review
            </Text>
          </MenuButton.Radio>
          <MenuButton.Radio value="recent">
            <Text size="xs" weight={state === 'recent' ? 'medium' : 'normal'}>
              Most Recent
            </Text>
          </MenuButton.Radio>
        </MenuButton.RadioGroup>
      </MenuButton.Content>
    </MenuButton>
  );
};

const Template: ComponentStory<typeof MenuButton> = (args) => (
  <MenuButton {...args} />
);

export const Playground = Template.bind({});
