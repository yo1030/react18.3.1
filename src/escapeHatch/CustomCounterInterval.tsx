import { useCounter } from './useCounterInterval';

export default function CustomCounterInterval() {
  const count = useCounter(1000);
  return <div><h1>Seconds passed: {count}</h1></div>;
}
