import { useState } from 'react';
import { useInterval } from './useIntervalBackground';

export function useCounter(delay: number) {
  const [count, setCount] = useState(0);
  useInterval(() => {
    setCount(c => c + 1);
  }, delay);
  return count;
}
