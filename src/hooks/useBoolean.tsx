import { useState } from 'react';

const useBoolean = (initialVal: boolean = false) => {
  const [state, setState] = useState(initialVal);

  const handleToggle = () => {
    setState((state) => !state);
  };
  const handleTrue = () => {
    setState(true);
  };
  const handleFalse = () => {
    setState(false);
  };

  return { state, setState, handleFalse, handleToggle, handleTrue };
};

export default useBoolean;
