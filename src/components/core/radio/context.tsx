import { createContext, useContext } from 'react';
import type { RadioGroupContextProps, RadioProviderProps } from './radio.type';

const RadioContext = createContext<RadioGroupContextProps>(
  {} as RadioGroupContextProps,
);

RadioContext.displayName = 'RadioGroup';

function RadioProvider({ children, ...rest }: RadioProviderProps) {
  return <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>;
}

function useRadioGroup() {
  return useContext(RadioContext);
}

export { RadioProvider, useRadioGroup };
