import { forwardRef } from 'react';
import { classnames } from '../../../utils/classnames';
import type { ForwardRefComponent } from '../../../types/polymorphic';
import type { TableColumnProps, TableProps, TableRowProps } from './table.type';

export const Column = forwardRef(
  (
    { as: Comp = 'td', children, weight = 'normal', className, ...rest },
    forwardedRef,
  ) => {
    return (
      <Comp
        ref={forwardedRef}
        className={classnames('column', {
          [`u_font-${weight}`]: weight !== 'normal',
          [className!]: !!className,
        })}
        {...rest}
      >
        {children}
      </Comp>
    );
  },
) as ForwardRefComponent<'td', TableColumnProps>;

export const Row = forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ children, type = 'body', ...rest }, forwardedRef) => {
    return (
      <tr ref={forwardedRef} className={`row row__${type}`} {...rest}>
        {children}
      </tr>
    );
  },
);

export const Table = ({
  color = 'slate',
  variant = 'default',
  showBorder,
  size = 'md',
  children,

  ...rest
}: TableProps) => {
  return (
    <div className="table--wrapper">
      <table
        className={classnames(
          `table table__${size} table__${variant}  u_${color}`,
          {
            table__border: showBorder,
          },
        )}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
};

Table.Column = Column;
Table.Row = Row;
