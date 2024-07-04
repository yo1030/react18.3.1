import { ChangeEvent, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

type MyInputType = {
  value: string,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

interface MyInputHandler {
  focus: () => void
}

export const MyInput = forwardRef<MyInputHandler, MyInputType>((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (realInputRef.current) {
      realInputRef.current.focus()
    }
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      if (realInputRef.current) {
        realInputRef.current.focus()
      }
    }
  }))
  // TODO: This doesn't quite work. Fix it.

  return (
    <input
      ref={realInputRef}
      value={props.value}
      onChange={props.onChange}
    />
  );
})
