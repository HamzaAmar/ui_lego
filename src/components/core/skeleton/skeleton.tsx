import { CSSProperties } from 'react';
import { Flex } from '../layout';
import type * as SKeletonType from './skeleton.type';

const Skeleton = ({ isLoading = true, children, content }: any) => {
  return (
    <div className="skeleton-container">
      <div aria-hidden={isLoading ? 'false' : 'true'}> {children}</div>
      <span className="u_visually-hidden">Loading</span>
      <div aria-busy={isLoading ? 'true' : 'false'}>{content}</div>
    </div>
  );
};

const Avatar = ({
  size = 'xl',
  corner = 'full',
  children,
  isLoading,
}: SKeletonType.SkeletonAvatarProps) => {
  return (
    <Skeleton isLoading={isLoading} content={children}>
      <div
        className={`skeleton skeleton--avatar avatar__${size} avatar__${corner}`}
      />
    </Skeleton>
  );
};

const Text = ({
  size = 'md',
  lines = 2.5,
  children,
  isLoading,
}: SKeletonType.SkeletonTextProps) => {
  const ceilNumber = Math.ceil(lines);

  const linesComp = Array.from({ length: ceilNumber }, (_, index) => {
    const decimalPercentage = (lines - Math.floor(lines)) * 100;
    const isLast = ceilNumber === index + 1;
    const textWidth = !isLast ? '100%' : `${decimalPercentage || 100}%`;

    return (
      <div
        key={index}
        style={{ '--text-width': textWidth } as CSSProperties}
        className={`skeleton skeleton--text u_size-${size}`}
      />
    );
  });

  return (
    <Skeleton isLoading={isLoading} content={children}>
      <Flex direction="column" gap="xs" style={{ width: '100%' }}>
        {linesComp}
      </Flex>
    </Skeleton>
  );
};

const Button = ({
  size = 'md',
  isLoading,
  children,
}: SKeletonType.SkeletonButtonProps) => {
  return (
    <Skeleton isLoading={isLoading} content={children}>
      <div className={`skeleton skeleton--btn btn__${size}`} />{' '}
    </Skeleton>
  );
};

const Box = ({
  height = '10rem',
  isLoading,
  children,
}: SKeletonType.SkeletonProps) => {
  return (
    <Skeleton isLoading={isLoading} content={children}>
      <div
        style={{ '--height': height } as CSSProperties}
        className="skeleton skeleton--box"
      />
    </Skeleton>
  );
};

Box.Avatar = Avatar;
Box.Text = Text;
Box.Button = Button;

export default Box;
