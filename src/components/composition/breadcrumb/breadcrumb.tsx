import { Flex } from '../../core';
import type { BreadcrumbProps, BreadcrumbItemProps } from './breadcrumb.type';
import { BreadcrumbProvider, useBreadcrumb } from './context';

/* 
======================================================================================================
Breadcrumb Item Section
======================================================================================================
*/

const BreadcrumbItem = (props: BreadcrumbItemProps) => {
  const context = useBreadcrumb();
  const { children, current, size = context?.size ?? 'md' } = props;

  const currentPage = current
    ? ({ 'aria-current': 'page' } as { 'aria-current': 'page' })
    : {};
  return (
    <Flex
      as="li"
      gap="2xs"
      items="center"
      className={`breadcrumb--item breadcrumb--item__${size}`}
    >
      <Flex
        as="a"
        gap="2xs"
        items="center"
        {...currentPage}
        className="breadcrumb--link"
      >
        {children}
      </Flex>
      {current ? null : (
        <span className="u_font-medium" role="presentation">
          {context?.separator ?? '>'}
        </span>
      )}
    </Flex>
  );
};

/* 
======================================================================================================
Breadcrumb Section
======================================================================================================
*/

export const Breadcrumb = ({ children, separator, size }: BreadcrumbProps) => {
  const context = { separator, size };
  return (
    <nav aria-label="Breadcrumb">
      <Flex className="breadcrumb--list" as="ol" wrap gap="2xs">
        <BreadcrumbProvider {...context}> {children}</BreadcrumbProvider>
      </Flex>
    </nav>
  );
};

Breadcrumb.Item = BreadcrumbItem;
