import React, { ChangeEvent, useRef, useState } from "react";
import { MyInput } from "./MyInput";

export const ShowForm: React.FC = () => {
  const [text, setText] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  function handleClick() {
    setIsVisible(!isVisible)
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setText(text)
    console.log(e.target.value)
  }
  return (
    <>
      <button onClick={handleClick}>{ isVisible ? 'Hide' : ' Show' } form</button>
      <hr></hr>
      { isVisible
        ? <MyInput value={text} onChange={handleChange} ref={inputRef} ></MyInput>
        : null
      }
    </>
  )
}