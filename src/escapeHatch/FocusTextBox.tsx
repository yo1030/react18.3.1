import { useRef } from 'react';
import SearchButton from './SearchButton';
import { SearchInput } from './SearchInput';

export interface MyInputHandler {
  focus: () => void
}

export default function FocusTextBox() {
  const inputRef = useRef<MyInputHandler>(null)
  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }
  return (
    <div>
      <nav>
        <SearchButton onClick={handleClick} />
      </nav>
      <SearchInput ref={inputRef} />
    </div>
  );
}
