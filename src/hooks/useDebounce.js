import { useState, useEffect, useRef } from 'react';

const useDebounce = (val, delay = 500) => {
  const [debouncedVal, setDebouncedVal] = useState(val);
  let timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDebouncedVal(val);
    }, delay);

    return () => clearTimeout(timeoutRef.current);
  });

  return debouncedVal;
};

export default useDebounce;
