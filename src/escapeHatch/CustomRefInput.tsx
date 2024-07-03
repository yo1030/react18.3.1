import { InputHTMLAttributes, forwardRef, useImperativeHandle, useRef } from 'react';

interface MyInputHandler {
  focus: () => void
}

const MyInput = forwardRef<MyInputHandler, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>({} as HTMLInputElement);
  useImperativeHandle(ref, () => ({
    // Only expose focus and nothing else
    focus()  {
      if (realInputRef.current) {
        realInputRef.current.focus();
      }
    }
  }));
  return <input {...props} ref={realInputRef} />;
});

export default function CustomRefInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  return (
    <div>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </div>
  );
}
