import { createContext, useContext } from 'react';
import type {
  PaginationContextProps,
  PaginationProviderProps,
} from './pagination.type';

const Context = createContext<PaginationContextProps>({});
Context.displayName = 'PaginationContext';
export function PaginationProvider({
  children,
  ...rest
}: PaginationProviderProps) {
  return <Context.Provider value={rest}>{children}</Context.Provider>;
}

export function usePaginationContext() {
  return useContext(Context);
}
