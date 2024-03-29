import { Flex } from '..';
import { TimelineProvider, useTimeline } from './timeline.context';

import type { TimelineItemProps, TimelineProps } from './timeline.type';

const Item = (props: TimelineItemProps) => {
  const context = useTimeline();
  const {
    children,
    corner = context?.corner ?? 'circle',
    size = context?.size ?? 'md',
    variant = context?.variant ?? 'solid',
    bullet,
  } = props;
  return (
    <div
      className={`timeline--item  timeline--item__${variant} timeline--item__${corner}`}
    >
      <div className={`timeline--line  timeline--line__${size}`}>
        <Flex items="center" justify="center" className="timeline--bullet">
          {bullet}
        </Flex>
      </div>
      <div className="timeline--content">{children}</div>
    </div>
  );
};

const timeline = ({ color = 'slate', children, ...rest }: TimelineProps) => {
  return (
    <div className={`timeline u_${color}`}>
      <TimelineProvider {...rest}>{children}</TimelineProvider>
    </div>
  );
};

timeline.Item = Item;

export default timeline;
