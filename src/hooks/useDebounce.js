import { useState, useEffect } from 'react';

const useDebounce = (val, delay = 500) => {
  const [debouncedVal, setDebouncedVal] = useState(val);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => clearTimeout(timeout);
  });

  return debouncedVal;
};

export default useDebounce;
