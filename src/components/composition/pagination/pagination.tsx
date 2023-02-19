import { forwardRef } from 'react';
import { Button, Flex } from '../../core';
import { ChevronDown, Dots } from '../../icons';
import { usePagination } from '../../../hooks/usePagination';
import { ForwardRefComponent } from '../../../types/polymorphic';
import { PaginationProvider, usePaginationContext } from './context';

import type { PaginationItem, PaginationProps } from './pagination.type';

const Item = forwardRef((props, forwardedRef) => {
  const context = usePaginationContext();
  const {
    active = 1,
    children,
    variant = context.variant ?? 'outline',
    color = context.color ?? 'slate',
    size = context.size ?? 'md',
    corner = context.corner ?? 'sm',
    number,
    ...rest
  } = props;
  return (
    <li>
      <Button
        variant={variant}
        className="pagination--button"
        size={size}
        color={color}
        corner={corner}
        aria-current={active === number ? 'page' : undefined}
        {...rest}
        aria-label={`${active ? '' : 'Go to '}Page ${number}`}
        ref={forwardedRef}
      >
        {children}
      </Button>
    </li>
  );
}) as ForwardRefComponent<'button', PaginationItem>;

const Pagination = (props: PaginationProps) => {
  const { pageSize = 10, color, ...rest } = props;
  const { active, range, setPage, next, previous } = usePagination({
    total: 10,
  });

  console.log('this the value of rest', rest);

  return (
    <nav className={`pagination u_${color ?? 'slate'}`} aria-label="Pagination">
      <PaginationProvider {...rest}>
        <Flex as="ul" gap="xs">
          <Item
            disabled={active === 1}
            onClick={previous}
            active={active}
            number={active - 1}
          >
            <ChevronDown width="20" direction="left" />
          </Item>
          {range.map((item) =>
            item === '.' ? (
              <div className="pagination-item--link u_flex u_items-center u_justify-center">
                <Dots width={16} />
              </div>
            ) : (
              <Item active={active} onClick={() => setPage(item)} number={item}>
                {item}
              </Item>
            ),
          )}
          <Item
            disabled={active === pageSize}
            onClick={next}
            active={active}
            number={active + 1}
          >
            <ChevronDown width="20" direction="right" />
          </Item>
        </Flex>
      </PaginationProvider>
    </nav>
  );
};

Pagination.Item = Item;

export default Pagination;
