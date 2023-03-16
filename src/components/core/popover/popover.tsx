import * as PopoverRadix from '@radix-ui/react-popover';
import { Close } from '../../icons';
import { IconButton } from '../button';

import type { DirectionProps, PopoverRootProps } from './popover.type';

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

export const Popover = ({
  trigger,
  children,
  placement = 'top-start',
}: PopoverRootProps) => (
  <PopoverRadix.Root>
    <PopoverRadix.Trigger asChild>{trigger}</PopoverRadix.Trigger>
    <PopoverRadix.Portal>
      <PopoverRadix.Content
        {...direction[placement]}
        className="popup--content"
        sideOffset={5}
      >
        <PopoverRadix.Arrow className="popup--arrow" />
        <div className="u_flex u_justify-end">
          <PopoverRadix.Close asChild aria-label="close">
            <IconButton
              className="popup--close"
              icon={<Close width={16} />}
              title="Close"
              size="xs"
              variant="soft"
              color="slate"
            />
          </PopoverRadix.Close>
        </div>
        {children}
      </PopoverRadix.Content>
    </PopoverRadix.Portal>
  </PopoverRadix.Root>
);

//  To Custom It With the style you like use this components

export const PopoverClose = PopoverRadix.Close;
export const PopoverArrow = PopoverRadix.Arrow;
export const PopoverContent = PopoverRadix.Content;
export const PopoverPortal = PopoverRadix.Portal;
export const PopoverRoot = PopoverRadix.Root;
export const PopoverTrigger = PopoverRadix.Trigger;
