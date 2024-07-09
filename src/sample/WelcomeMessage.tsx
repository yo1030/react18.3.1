import { useState, useEffect, useRef, useCallback } from 'react';
// import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { FadeInAnimation } from './animation';

type WelcomeType = {
  duration: number
}

function Welcome({ duration }: WelcomeType) {
  const ref = useRef<HTMLHeadingElement>(null);

  // const onAppear = useEffectEvent((targetAnimation) => {
  //   targetAnimation.start(duration)
  // })

  const onAppear = useCallback((targetAnimation: FadeInAnimation) => {
    targetAnimation.start(duration)
  }, [duration])

  useEffect(() => {
    if (ref.current === null) {
      return
    }
    const animation = new FadeInAnimation(ref.current);
    // animation.start(duration);
    onAppear(animation)
    return () => {
      animation.stop();
    };
  }, []);

  return (
    <div>
      <h1
        ref={ref}
        style={{
          opacity: 0,
          color: 'white',
          padding: 50,
          textAlign: 'center',
          fontSize: 50,
          backgroundImage: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)'
        }}
      >
        Welcome
      </h1>
    </div>
  );
}

export default function WelcomeMessage() {
  const [duration, setDuration] = useState(1000);
  const [show, setShow] = useState(false);

  return (
    <>
      <label>
        <input
          type="range"
          min="100"
          max="3000"
          value={duration}
          onChange={e => setDuration(Number(e.target.value))}
        />
        <br />
        Fade in duration: {duration} ms
      </label>
      <button onClick={() => setShow(!show)}>
        {show ? 'Remove' : 'Show'}
      </button>
      <hr />
      {show && <Welcome duration={duration} />}
    </>
  );
}
