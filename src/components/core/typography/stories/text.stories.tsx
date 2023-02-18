import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Text, Flex } from '../..';

export default {
  title: 'COMPONENTS/CORE/Typography/Text',
  component: Text,
  args: {
    children: 'Nice To Meet You',
  },
} as ComponentMeta<typeof Text>;

export const TextSizes = () => {
  return (
    <Flex direction="column">
      <Text size="3xs">
        Test Your text is better than nothing here you can find all size that we
        have (3xs)
      </Text>
      <Text size="2xs">
        Test Your text is better than nothing here you can find all size that we
        have (2xs)
      </Text>
      <Text size="xs">
        Test Your text is better than nothing here you can find all size that we
        have (xs)
      </Text>
      <Text size="sm">
        Test Your text is better than nothing here you can find all size that we
        have (sm)
      </Text>
      <Text>
        Test Your text is better than nothing here you can find all size that we
        have (md)
      </Text>
      <Text size="lg">
        Test Your text is better than nothing here you can find all size that we
        have (lg)
      </Text>
      <Text size="xl">
        Test Your text is better than nothing here you can find all size that we
        have (xl)
      </Text>
      <Text size="2xl">
        Test Your text is better than nothing here you can find all size that we
        have (2xl)
      </Text>
      <Text size="3xl">
        Test Your text is better than nothing here you can find all size that we
        have (3xl)
      </Text>
    </Flex>
  );
};

export const TextLeading = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Text size="3xl" leading="normal">
        Test Your text is better than nothing here you can find all size that we
        have (Normal Leading 1)
      </Text>
      <Text size="3xl" leading="lg">
        Test Your text is better than nothing here you can find all size that we
        have Test Your text is better than nothing here you can find all size
        that we have (Large Leading)
      </Text>
      <Text size="3xl" leading="md">
        Test Your text is better than nothing here you can find all size that we
        have (2xl) (Medium Leading)
      </Text>
      <Text size="3xl" leading="sm">
        Test Your text is better than nothing here you can find all size that we
        have (Small Leading)
      </Text>
    </Flex>
  );
};

export const TextTransform = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Text size="lg" transform="uppercase">
        Test Your text is better than nothing here you can find all size that we
        have (UPPERCASE)
      </Text>
      <Text size="xl" transform="capitalize">
        Test Your text is better than nothing here you can find all size that we
        have Test Your text is better than nothing here you can find all size
        that we have (Capitalize)
      </Text>
      <Text size="2xl" transform="lowercase">
        Test Your text is better than nothing here you can find all size that we
        have (2xl) (lowercase)
      </Text>
    </Flex>
  );
};

export const TextWeight = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Text weight="thin">
        Test Your text is better than nothing here you can find all size that we
        have (thin)
      </Text>
      <Text weight="extra-light">
        Test Your text is better than nothing here you can find all size that we
        have (extra-light)
      </Text>
      <Text weight="light">
        Test Your text is better than nothing here you can find all size that we
        have (light)
      </Text>
      <Text>
        Test Your text is better than nothing here you can find all size that we
        have (normal)
      </Text>
      <Text weight="medium">
        Test Your text is better than nothing here you can find all size that we
        have (normal)
      </Text>
      <Text weight="bold">
        Test Your text is better than nothing here you can find all size that we
        have (bold)
      </Text>
      <Text weight="extra-bold">
        Test Your text is better than nothing here you can find all size that we
        have (extra-bold)
      </Text>
      <Text weight="black">
        Test Your text is better than nothing here you can find all size that we
        have (black)
      </Text>
    </Flex>
  );
};

export const TextDecoration = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Text decoration="line-through">
        Test Your text is better than nothing here you can find all size that we
        have (line-through)
      </Text>
      <Text decoration="overline">
        Test Your text is better than nothing here you can find all size that we
        have Test Your text is better than nothing here you can find all size
        that we have (overline)
      </Text>
      <Text decoration="underline">
        Test Your text is better than nothing here you can find all size that we
        have (underline)
      </Text>
    </Flex>
  );
};

export const TexTruncate = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Text truncate="multiline" numberLine={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum?
      </Text>
      <Text truncate="multiline" numberLine={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum? Test Your
        text is better than nothing here you can find all size that we have
      </Text>
      <Text truncate="multiline" numberLine={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum?
      </Text>
      <Text truncate="multiline" numberLine={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum? ste ad
        nemo, modi deserunt natus enim quidem rem sed veritatis dolorem possimus
        ex quisquam quia pariatur quas! Labore, iusto harum?
      </Text>
    </Flex>
  );
};

export const TexColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Text color="indigo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <Text color="indigo" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>

      <Text color="slate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <Text color="slate" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <Text color="purple">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>

      <Text color="purple" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <Text color="orange">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <Text color="orange" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <Text color="red">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
      <Text color="red" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Text>
    </Flex>
  );
};

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Playground = Template.bind({});
