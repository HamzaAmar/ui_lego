import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Heading, Flex } from '../..';

export default {
  title: 'COMPONENTS/CORE/Typography/Heading',
  component: Heading,
  args: {
    children: 'Nice To Meet You',
  },
} as ComponentMeta<typeof Heading>;

export const HeadingSizes = () => {
  return (
    <Flex direction="column">
      <Heading size="3xs">
        Test Your text is better than nothing here you can find all size that we
        have (3xs)
      </Heading>
      <Heading size="2xs">
        Test Your text is better than nothing here you can find all size that we
        have (2xs)
      </Heading>
      <Heading size="xs">
        Test Your text is better than nothing here you can find all size that we
        have (xs)
      </Heading>
      <Heading size="sm">
        Test Your text is better than nothing here you can find all size that we
        have (sm)
      </Heading>
      <Heading>
        Test Your text is better than nothing here you can find all size that we
        have (md)
      </Heading>
      <Heading size="lg">
        Test Your text is better than nothing here you can find all size that we
        have (lg)
      </Heading>
      <Heading size="xl">
        Test Your text is better than nothing here you can find all size that we
        have (xl)
      </Heading>
      <Heading size="2xl">
        Test Your text is better than nothing here you can find all size that we
        have (2xl)
      </Heading>
      <Heading size="3xl">
        Test Your text is better than nothing here you can find all size that we
        have (3xl)
      </Heading>
    </Flex>
  );
};

export const HeadingLeading = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Heading size="3xl" leading="normal">
        Test Your text is better than nothing here you can find all size that we
        have (Normal Leading 1)
      </Heading>
      <Heading size="3xl" leading="lg">
        Test Your text is better than nothing here you can find all size that we
        have Test Your text is better than nothing here you can find all size
        that we have (Large Leading)
      </Heading>
      <Heading size="3xl" leading="md">
        Test Your text is better than nothing here you can find all size that we
        have (2xl) (Medium Leading)
      </Heading>
      <Heading size="3xl" leading="sm">
        Test Your text is better than nothing here you can find all size that we
        have (Small Leading)
      </Heading>
    </Flex>
  );
};

export const HeadingTransform = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Heading size="lg" transform="uppercase">
        Test Your text is better than nothing here you can find all size that we
        have (UPPERCASE)
      </Heading>
      <Heading size="xl" transform="capitalize">
        Test Your text is better than nothing here you can find all size that we
        have Test Your text is better than nothing here you can find all size
        that we have (Capitalize)
      </Heading>
      <Heading size="2xl" transform="lowercase">
        Test Your text is better than nothing here you can find all size that we
        have (2xl) (lowercase)
      </Heading>
    </Flex>
  );
};

export const HeadingWeight = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Heading weight="thin">
        Test Your text is better than nothing here you can find all size that we
        have (thin)
      </Heading>
      <Heading weight="extra-light">
        Test Your text is better than nothing here you can find all size that we
        have (extra-light)
      </Heading>
      <Heading weight="light">
        Test Your text is better than nothing here you can find all size that we
        have (light)
      </Heading>
      <Heading>
        Test Your text is better than nothing here you can find all size that we
        have (normal)
      </Heading>
      <Heading weight="medium">
        Test Your text is better than nothing here you can find all size that we
        have (normal)
      </Heading>
      <Heading weight="bold">
        Test Your text is better than nothing here you can find all size that we
        have (bold)
      </Heading>
      <Heading weight="extra-bold">
        Test Your text is better than nothing here you can find all size that we
        have (extra-bold)
      </Heading>
      <Heading weight="black">
        Test Your text is better than nothing here you can find all size that we
        have (black)
      </Heading>
    </Flex>
  );
};

export const HeadingDecoration = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Heading decoration="line-through">
        Test Your text is better than nothing here you can find all size that we
        have (line-through)
      </Heading>
      <Heading decoration="overline">
        Test Your text is better than nothing here you can find all size that we
        have Test Your text is better than nothing here you can find all size
        that we have (overline)
      </Heading>
      <Heading decoration="underline">
        Test Your text is better than nothing here you can find all size that we
        have (underline)
      </Heading>
    </Flex>
  );
};

export const TexTruncate = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Heading truncate="multiline" numberLine={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum?
      </Heading>
      <Heading truncate="multiline" numberLine={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum? Test Your
        text is better than nothing here you can find all size that we have
      </Heading>
      <Heading truncate="multiline" numberLine={3}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum?
      </Heading>
      <Heading truncate="multiline" numberLine={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit fugiat
        voluptatum dolor voluptas itaque neque minima tenetur ipsam adipisci nam
        quo, vitae quia laboriosam deleniti libero tempore numquam, a odio.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique iste
        ad nemo, modi deserunt natus enim quidem rem sed veritatis dolorem
        possimus ex quisquam quia pariatur quas! Labore, iusto harum? ste ad
        nemo, modi deserunt natus enim quidem rem sed veritatis dolorem possimus
        ex quisquam quia pariatur quas! Labore, iusto harum?
      </Heading>
    </Flex>
  );
};

export const TexColor = () => {
  return (
    <Flex wrap gap="md" items="center">
      <Heading color="indigo">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
      <Heading color="indigo" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>

      <Heading color="slate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
      <Heading color="slate" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
      <Heading color="purple">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>

      <Heading color="purple" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
      <Heading color="orange">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
      <Heading color="orange" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
      <Heading color="red">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
      <Heading color="red" contrast="low">
        Lorem ipsum dolor sit amet consectetur adipisicing elit
      </Heading>
    </Flex>
  );
};

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Playground = Template.bind({});
