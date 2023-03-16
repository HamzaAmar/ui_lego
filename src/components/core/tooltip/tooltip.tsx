import * as TooltipRadix from '@radix-ui/react-tooltip';

import type { DirectionProps } from '../popover/popover.type';
import type { TooltipProps } from './tooltip.type';

const direction: DirectionProps = {
  'top-start': { align: 'start', side: 'top' },
  'top-center': { align: 'center', side: 'top' },
  'top-end': { align: 'end', side: 'top' },
  'right-start': { align: 'start', side: 'right' },
  'right-center': { align: 'center', side: 'right' },
  'right-end': { align: 'end', side: 'right' },
  'bottom-start': { align: 'start', side: 'bottom' },
  'bottom-center': { align: 'center', side: 'bottom' },
  'bottom-end': { align: 'end', side: 'bottom' },
  'left-start': { align: 'start', side: 'left' },
  'left-center': { align: 'center', side: 'left' },
  'left-end': { align: 'end', side: 'left' },
};
export const Tooltip = ({
  children,
  title,
  placement = 'top-center',
  ...rest
}: TooltipProps) => {
  return (
    <TooltipRadix.Provider {...rest}>
      <TooltipRadix.Root>
        <TooltipRadix.Trigger asChild>{children}</TooltipRadix.Trigger>
        <TooltipRadix.Content
          {...direction[placement]}
          className="popup--content tooltip"
          sideOffset={5}
        >
          {title}
          <TooltipRadix.Arrow className="popup--arrow" />
        </TooltipRadix.Content>
      </TooltipRadix.Root>
    </TooltipRadix.Provider>
  );
};
