import React from 'eslint-plugin-react-hooks';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, Flex, Heading } from '../../core';
import { Table } from '..';
import type { TableProps } from './table.type';
import { ArrowDown } from '../../icons';

export const NormalTableExample = (props: Omit<TableProps, 'children'>) => {
  return (
    <Table {...props}>
      <Table.Row type="head">
        <Table.Column as="th">ID</Table.Column>
        <Table.Column as="th">User</Table.Column>
        <Table.Column as="th">Followers</Table.Column>
        <Table.Column as="th">Following</Table.Column>
        <Table.Column as="th">Action</Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column weight="medium">#HE1234</Table.Column>
        <Table.Column>Samir Lamir</Table.Column>
        <Table.Column weight="medium">15.3K</Table.Column>
        <Table.Column weight="medium">1</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="soft"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column weight="medium">#HE12sd</Table.Column>
        <Table.Column>Kent Lempo</Table.Column>
        <Table.Column weight="medium">19.3K</Table.Column>
        <Table.Column weight="medium">190.9K</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="soft"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column weight="medium">#HE15434</Table.Column>
        <Table.Column>Ryan Dod</Table.Column>
        <Table.Column weight="medium">2.5K</Table.Column>
        <Table.Column weight="medium">20K</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="soft"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
      <Table.Row>
        <Table.Column weight="medium">#HE12s56</Table.Column>
        <Table.Column>Remix Run</Table.Column>
        <Table.Column weight="medium">20.5K</Table.Column>
        <Table.Column weight="medium">27.8K</Table.Column>
        <Table.Column>
          <Button
            iconPosition="end"
            icon={<ArrowDown direction="right" width={16} />}
            size="sm"
            variant="soft"
          >
            Accept
          </Button>
        </Table.Column>
      </Table.Row>
    </Table>
  );
};

export default {
  default: 'Components/Composition/Table',
  component: Table,
} as ComponentMeta<typeof Table>;

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const Playground = Template.bind({});

export const TableVariant = () => {
  return (
    <Flex direction="column" gap="sm">
      <Heading size="sm">Striped Table</Heading>
      <NormalTableExample variant="striped" />
      <Heading size="sm">Default Table</Heading>
      <NormalTableExample />
      <Heading size="sm">Soft Table</Heading>
      <NormalTableExample variant="soft" />
      <Heading size="sm">Head Color Table</Heading>
      <NormalTableExample variant="head-color" />
    </Flex>
  );
};
export const NormalTableColor = () => {
  return (
    <Flex direction="column" gap="sm">
      <Heading size="sm">Striped Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          Striped Table danger
        </Heading>
        <NormalTableExample color="danger" variant="striped" />

        <Heading as="h2" size="xs">
          Striped Table success
        </Heading>
        <NormalTableExample color="success" variant="striped" />
        <Heading as="h2" size="xs">
          Striped Table purple
        </Heading>
        <NormalTableExample color="purple" variant="striped" />
        <Heading as="h2" size="xs">
          Striped Table yellow
        </Heading>
        <NormalTableExample color="yellow" variant="striped" />
        <Heading as="h2" size="xs">
          Striped Table indigo
        </Heading>
        <NormalTableExample color="indigo" variant="striped" />
      </Flex>

      <Heading size="sm">Default Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          Default Table danger
        </Heading>
        <NormalTableExample color="danger" />

        <Heading as="h2" size="xs">
          Default Table success
        </Heading>
        <NormalTableExample color="success" />
        <Heading as="h2" size="xs">
          Default Table purple
        </Heading>
        <NormalTableExample color="purple" />
        <Heading as="h2" size="xs">
          Default Table yellow
        </Heading>
        <NormalTableExample color="yellow" />
        <Heading as="h2" size="xs">
          Default Table indigo
        </Heading>
        <NormalTableExample color="indigo" />
      </Flex>
      <Heading size="sm">Soft Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          Soft Table danger
        </Heading>
        <NormalTableExample variant="soft" color="danger" />

        <Heading as="h2" size="xs">
          Soft Table success
        </Heading>
        <NormalTableExample variant="soft" color="success" />
        <Heading as="h2" size="xs">
          Soft Table purple
        </Heading>
        <NormalTableExample variant="soft" color="purple" />
        <Heading as="h2" size="xs">
          Soft Table yellow
        </Heading>
        <NormalTableExample variant="soft" color="yellow" />
        <Heading as="h2" size="xs">
          Soft Table indigo
        </Heading>
        <NormalTableExample variant="soft" color="indigo" />
      </Flex>
      <NormalTableExample variant="soft" />
      <Heading size="sm">Head Color Table</Heading>
      <Flex wrap gap="xs">
        <Heading as="h2" size="xs">
          ead Color Table danger
        </Heading>
        <NormalTableExample variant="head-color" color="danger" />

        <Heading as="h2" size="xs">
          ead Color Table success
        </Heading>
        <NormalTableExample variant="head-color" color="success" />
        <Heading as="h2" size="xs">
          ead Color Table purple
        </Heading>
        <NormalTableExample variant="head-color" color="purple" />
        <Heading as="h2" size="xs">
          ead Color Table yellow
        </Heading>
        <NormalTableExample variant="head-color" color="yellow" />
        <Heading as="h2" size="xs">
          ead Color Table indigo
        </Heading>
        <NormalTableExample variant="head-color" color="indigo" />
      </Flex>
      <NormalTableExample variant="head-color" />
    </Flex>
  );
};

export const TableSize = () => {
  return (
    <Flex direction="column" gap="sm">
      <Heading size="sm">Table Size SMALL</Heading>
      <NormalTableExample size="sm" />
      <Heading size="sm">Table Size Medium</Heading>
      <NormalTableExample />
      <Heading size="sm">Table Size Large</Heading>
      <NormalTableExample size="lg" />
    </Flex>
  );
};
