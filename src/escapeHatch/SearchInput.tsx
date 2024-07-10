import { forwardRef, InputHTMLAttributes, useImperativeHandle, useRef } from "react";
import { MyInputHandler } from "./FocusTextBox";

export const SearchInput = forwardRef<MyInputHandler, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  const realInputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    focus() {
      if (realInputRef.current) {
        realInputRef.current.focus()
      }
    }
  }))
  return (
    <input
      {...props}
      placeholder="Looking for something?"
      ref={realInputRef}
    />
  );
})
