import React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { CircleAlert } from '../../icons';
import { IconButton } from '../button';
import { Grid, Heading } from '..';
import { Popover } from '.';

export default {} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Playground = Template.bind({});

export const Placement = () => {
  return (
    <Grid columns="repeat(3, 1fr)" gap="xl">
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="top-start"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="top-center"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="top-end"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>

      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="right-start"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="right-center"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="right-end"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>

      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="bottom-start"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="bottom-center"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="bottom-end"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="left-start"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="left-center"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
      <Popover
        trigger={
          <IconButton
            variant="soft"
            color="slate"
            icon={<CircleAlert width={16} />}
            title="open popover"
          />
        }
        placement="left-end"
      >
        <Heading size="sm">Hello world</Heading>
      </Popover>
    </Grid>
  );
};
