import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Breadcrumb } from '..';
import { Flex } from '../../core';
import { HandFinger, Home, Linkdin, Minus } from '../../icons';

export default {
  title: 'Components/Composition/Breadcrumb',
  component: Breadcrumb,
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => (
  <Breadcrumb {...args} />
);

export const Default = () => {
  return (
    <Flex direction="column" gap="2xs">
      <Breadcrumb>
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </Flex>
  );
};

export const BreadcrumbSeparator = () => {
  return (
    <Flex direction="column" gap="2xs">
      <Breadcrumb separator="-">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb separator="*">
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb separator={<Minus width={10} />}>
        <Breadcrumb.Item link="../..">components</Breadcrumb.Item>
        <Breadcrumb.Item link="../">base-ui</Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </Flex>
  );
};

export const BreadcrumbIcon = () => {
  return (
    <Flex direction="column" gap="2xs">
      <Breadcrumb>
        <Breadcrumb.Item link="../../..">
          Home
          <Home width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../..">
          components
          <HandFinger width={16} />
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../">
          base-ui
          <Home width={16} />
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          breadcrumb
          <Linkdin width={16} />
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb>
        <Breadcrumb.Item link="../../..">
          <Home width={16} />
          Home
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../..">
          <HandFinger width={16} />
          components
        </Breadcrumb.Item>

        <Breadcrumb.Item link="../">
          <Home width={16} />
          <Home width={16} />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Linkdin width={16} />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </Flex>
  );
};

export const BreadcrumbSize = () => {
  return (
    <Flex direction="column" gap="2xs">
      <Breadcrumb size="2xs" separator="-">
        <Breadcrumb.Item link="../..">
          <Home />
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item link="../">
          <Home />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Home />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb size="xs" separator="-">
        <Breadcrumb.Item link="../..">
          <Home />
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item link="../">
          <Home />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Home />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb separator="-">
        <Breadcrumb.Item link="../..">
          <Home />
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item link="../">
          <Home />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Home />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb size="md" separator="/">
        <Breadcrumb.Item link="../..">
          <Home />
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item link="../">
          <Home />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Home />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>

      <Breadcrumb size="lg">
        <Breadcrumb.Item link="../..">
          <Home />
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item link="../">
          <Home />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Home />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="xl">
        <Breadcrumb.Item link="../..">
          <Home />
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item link="../">
          <Home />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Home />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb size="2xl">
        <Breadcrumb.Item link="../..">
          <Home />
          components
        </Breadcrumb.Item>
        <Breadcrumb.Item link="../">
          <Home />
          base-ui
        </Breadcrumb.Item>
        <Breadcrumb.Item link="./" current>
          <Home />
          breadcrumb
        </Breadcrumb.Item>
      </Breadcrumb>
    </Flex>
  );
};

export const Playground = Template.bind({});
