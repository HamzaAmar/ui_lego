import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu';
import { Check, CircleCheck } from '../../icons';
import { Flex } from '..';

import type {
  MenuButtonCheckboxProps,
  MenuButtonItemProps,
  MenuButtonProps,
  MenuButtonRadioGroupProps,
  MenuButtonRadioProps,
} from './menuButton.type';

export const Content = ({ children, ...rest }: MenuButtonItemProps) => {
  return (
    <DropdownMenuRadix.Portal>
      <DropdownMenuRadix.Content
        {...rest}
        className="menu-button--content l_box"
        sideOffset={3}
        align="start"
      >
        {children}
      </DropdownMenuRadix.Content>
    </DropdownMenuRadix.Portal>
  );
};

export const Item = ({ children }: MenuButtonItemProps) => {
  return (
    <DropdownMenuRadix.Item className="menu-button--item">
      {children}
    </DropdownMenuRadix.Item>
  );
};

export const Radio = ({ children, ...rest }: MenuButtonRadioProps) => {
  return (
    <Flex
      as={DropdownMenuRadix.RadioItem}
      justify="between"
      items="center"
      gap="sm"
      className="menu-button--item menu-button--radio-item"
      {...rest}
    >
      {children}

      <DropdownMenuRadix.ItemIndicator>
        <CircleCheck width={16} />
      </DropdownMenuRadix.ItemIndicator>
    </Flex>
  );
};
export const RadioGroup = ({
  title,
  children,
  ...rest
}: MenuButtonRadioGroupProps) => {
  return (
    <DropdownMenuRadix.RadioGroup {...rest}>
      <DropdownMenuRadix.Label className="menu-button--label">
        {title}
      </DropdownMenuRadix.Label>
      {children}
    </DropdownMenuRadix.RadioGroup>
  );
};

export const CheckboxItem = ({
  children,
  ...rest
}: MenuButtonCheckboxProps) => {
  return (
    <DropdownMenuRadix.CheckboxItem
      {...rest}
      className="menu-button--item menu-button--checkbox-item"
    >
      <DropdownMenuRadix.ItemIndicator className="menu-button--indicator">
        <Check />
      </DropdownMenuRadix.ItemIndicator>
      {children}
    </DropdownMenuRadix.CheckboxItem>
  );
};

export const MenuButton = ({ children, trigger }: MenuButtonProps) => {
  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>{trigger}</DropdownMenuRadix.Trigger>
      {children}
    </DropdownMenuRadix.Root>
  );
};

MenuButton.Trigger = DropdownMenuRadix.Trigger;
MenuButton.Label = DropdownMenuRadix.Label;
MenuButton.Group = DropdownMenuRadix.Group;
MenuButton.Arrow = DropdownMenuRadix.Arrow;
MenuButton.Separator = DropdownMenuRadix.Separator;
MenuButton.Content = Content;
MenuButton.Item = Item;
MenuButton.Radio = Radio;
MenuButton.RadioGroup = RadioGroup;
MenuButton.CheckboxItem = CheckboxItem;
