import React, { useContext } from 'react';
import type {
  BreadcrumbContextType,
  BreadcrumbProviderProps,
} from './breadcrumb.type';

const BreadcrumbContext = React.createContext<BreadcrumbContextType | null>(
  null,
);

export const BreadcrumbProvider = ({
  children,
  ...rest
}: BreadcrumbProviderProps) => {
  return (
    <BreadcrumbContext.Provider value={rest}>
      {children}
    </BreadcrumbContext.Provider>
  );
};

export const useBreadcrumb = () => {
  const context = useContext(BreadcrumbContext);

  if (!context) {
    console.log("it's better to wrap you breadcrumb items with context");
  }
  return context;
};
