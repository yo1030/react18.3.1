import { ChangeEvent, forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

type MyInputType = {
  value: string,
  shouldFocus: boolean,
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

interface MyInputHandler {
  focus: () => void
}

export const MyInput = forwardRef<MyInputHandler, MyInputType>((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (props.shouldFocus && realInputRef.current) {
      realInputRef.current.focus()
    }
  }, [props.shouldFocus]);

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
