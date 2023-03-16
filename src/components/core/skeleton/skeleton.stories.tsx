import React, { useEffect, useRef } from 'react';
import { ComponentMeta } from '@storybook/react';
import useBoolean from '../../../hooks/useBoolean';
import { Avatar, Button, Flex, Skeleton, Text } from '..';

export default {
  title: 'COMPONENTS/CORE/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

function useLoading() {
  const { state: loading, handleFalse } = useBoolean(true);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const timerID = setTimeout(handleFalse, 3000);

    timerRef.current = timerID;

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [handleFalse]);

  return loading;
}

export const SkeletonAvatar = () => {
  const loading = useLoading();
  return (
    <Flex items="center" gap="md">
      <Skeleton.Avatar size="xs" isLoading={loading}>
        <Avatar size="xs" variant="image" title="Hello" />
      </Skeleton.Avatar>
      <Skeleton.Avatar size="sm" isLoading={loading}>
        <Avatar size="sm" variant="image" title="Hello" />
      </Skeleton.Avatar>
      <Skeleton.Avatar size="md" isLoading={loading}>
        <Avatar size="md" variant="image" title="Hello" />
      </Skeleton.Avatar>
      <Skeleton.Avatar size="xl" isLoading={loading}>
        <Avatar size="xl" variant="image" title="Hello" />
      </Skeleton.Avatar>
      <Skeleton.Avatar size="2xl" isLoading={loading}>
        <Avatar size="2xl" variant="image" title="Hello" />
      </Skeleton.Avatar>
    </Flex>
  );
};

export const SkeletonText = () => {
  const loading = useLoading();
  return (
    <Flex direction="column" items="center" gap="md">
      <Skeleton.Text size="xs" isLoading={loading} lines={3}>
        <Text size="xs">hello world</Text>
      </Skeleton.Text>
      <Skeleton.Text size="sm" isLoading={loading} lines={3.5}>
        <Text size="sm">hello world</Text>
      </Skeleton.Text>
      <Skeleton.Text size="md" isLoading={loading} lines={2.3}>
        <Text size="md">hello world</Text>
      </Skeleton.Text>
      <Skeleton.Text size="xl" isLoading={loading} lines={3.3}>
        <Text size="xl">hello world</Text>
      </Skeleton.Text>
      <Skeleton.Text size="2xl" isLoading={loading} lines={1.13}>
        <Text size="2xl">hello world</Text>
      </Skeleton.Text>
    </Flex>
  );
};

export const SkeletonButton = () => {
  const loading = useLoading();
  return (
    <Flex items="center" gap="md">
      <Skeleton.Button size="xs" isLoading={loading}>
        <Button size="xs">hello world</Button>
      </Skeleton.Button>
      <Skeleton.Button size="sm" isLoading={loading}>
        <Button size="sm">hello world</Button>
      </Skeleton.Button>
      <Skeleton.Button size="md" isLoading={loading}>
        <Button size="md">hello world</Button>
      </Skeleton.Button>
      <Skeleton.Button size="xl" isLoading={loading}>
        <Button size="xl">hello world</Button>
      </Skeleton.Button>
    </Flex>
  );
};

export const SkeletonBox = () => {
  const loading = useLoading();
  return (
    <Flex direction="column" items="center" gap="md">
      <Skeleton height="300px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/300" alt="" />
      </Skeleton>
      <Skeleton height="200px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/200" alt="" />
      </Skeleton>
      <Skeleton height="150px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/150" alt="" />
      </Skeleton>
      <Skeleton height="450px" isLoading={loading}>
        <img src="https://picsum.photos/id/300/300/450" alt="" />
      </Skeleton>
    </Flex>
  );
};
