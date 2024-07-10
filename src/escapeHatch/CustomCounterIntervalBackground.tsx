import { useCounter } from './useCounterIntervalBackground';
import { useInterval } from './useIntervalBackground';

export default function CustomCounterIntervalBackground() {
  const count = useCounter(1000);

  useInterval(() => {
    const randomColor = `hsla(${Math.random() * 360}, 100%, 50%, 0.2)`;
    document.getElementById('CustomCounterBackground')!.style.backgroundColor = randomColor;
  }, 2000);

  return <div id='CustomCounterBackground'><h1>Seconds passed: {count}</h1></div>;
}
