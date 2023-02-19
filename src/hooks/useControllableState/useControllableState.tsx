import { useState, useRef, useCallback } from 'react';
import type { Dispatch, SetStateAction } from 'react';

// declare const __DEV__: boolean;

/**
 * Check if a component is controlled or uncontrolled and return the correct
 * state value and setter accordingly. If the component state is controlled by
 * the app, the setter is a noop.
 *
 * @param controlledValue
 * @param defaultValue
 */
export function useControllableState<T = any>({
  controlledValue,
  defaultValue,
}: // calledFrom = "A component",
{
  controlledValue: T | undefined;
  defaultValue: T | (() => T);
  // calledFrom?: string;
}): [T, React.Dispatch<React.SetStateAction<T>>] {
  const wasControlled = controlledValue !== undefined;
  const isControlledRef = useRef(wasControlled);

  // if (__DEV__) {
  //   if (!isControlledRef.current && wasControlled) {
  //     console.warn(
  //       `${calledFrom} is changing from controlled to uncontrolled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
  //     );
  //   }

  //   if (isControlledRef.current && !wasControlled) {
  //     console.warn(
  //       `${calledFrom} is changing from uncontrolled to controlled. Components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
  //     );
  //   }
  // }

  const [state, setState] = useState(
    isControlledRef.current ? controlledValue! : defaultValue,
  );
  const set: Dispatch<SetStateAction<T>> = useCallback((n) => {
    if (!isControlledRef.current) {
      setState(n);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [isControlledRef.current ? (controlledValue as T) : state, set];
}
