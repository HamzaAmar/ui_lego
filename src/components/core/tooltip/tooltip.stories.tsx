import React from 'react';
import type { ComponentMeta } from '@storybook/react';
import { CircleAlert } from '../../icons';
import { IconButton } from '../button';
import { Tooltip } from '.';
import { Grid } from '../layout';

export default {} as ComponentMeta<typeof Tooltip>;

// const Template: ComponentStory<typeof Tooltip> = (args) => (
//   <Tooltip title='CircleAlert' {...args} />
// );

export const Placement = () => {
  return (
    <Grid columns="repeat(3, 1fr)" gap="xl">
      <Tooltip title="CircleAlert" placement="top-start">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="top-center">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="top-end">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>

      <Tooltip title="CircleAlert" placement="right-start">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="right-center">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="right-end">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>

      <Tooltip title="CircleAlert" placement="bottom-start">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="bottom-center">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="bottom-end">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="left-start">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="left-center">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
      <Tooltip title="CircleAlert" placement="left-end">
        <IconButton
          variant="soft"
          color="slate"
          icon={<CircleAlert width={16} />}
          title="open popover"
        />
      </Tooltip>
    </Grid>
  );
};
