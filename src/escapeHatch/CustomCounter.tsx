import { useCounter } from './useCounter';

export default function CustomCounter() {
  const count = useCounter();
  return <div><h1>Seconds passed: {count}</h1></div>;
}
