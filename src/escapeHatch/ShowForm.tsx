import React, { ChangeEvent, useRef, useState } from "react";
import { MyInput } from "./MyInput";

export const ShowForm: React.FC = () => {
  const [firstText, setFirstText] = useState<string>('')
  const [secondText, setSecondText] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null)
  function handleClick() {
    setIsVisible(!isVisible)
  }
  function handleFirstChange(e: ChangeEvent<HTMLInputElement>) {
    setFirstText(e.target.value)
  }
  function handleSecondChange(e: ChangeEvent<HTMLInputElement>) {
    setSecondText(e.target.value)
  }
  return (
    <>
      <button onClick={handleClick}>{ isVisible ? 'Hide' : ' Show' } form</button>
      <hr></hr>
      { isVisible
        ? <MyInput value={firstText} onChange={handleFirstChange} ref={inputRef} shouldFocus={true} ></MyInput>
        : null
      }
      <br/>
      { isVisible
        ? <MyInput value={secondText} onChange={handleSecondChange} ref={inputRef} shouldFocus={false} ></MyInput>
        : null
      }
    </>
  )
}