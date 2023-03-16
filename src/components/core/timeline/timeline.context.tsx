import { createContext, useContext } from 'react';
import type {
  ContextProps,
  TimelineContextProviderProps,
} from './timeline.type';

const TimelineContext = createContext<ContextProps | null>(null);

export const TimelineProvider = ({
  children,
  ...rest
}: TimelineContextProviderProps) => {
  return (
    <TimelineContext.Provider value={rest}>{children}</TimelineContext.Provider>
  );
};

export const useTimeline = () => {
  const context = useContext(TimelineContext);

  if (!context) {
    console.log("it's better to wrap you breadcrumb items with context");
  }

  return context;
};
